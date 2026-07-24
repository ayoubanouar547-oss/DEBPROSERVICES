import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
import { postToGoogleSheets } from "@/lib/googleSheets";

let aiClient: GoogleGenAI | null = null;

function getGeminiClient(): GoogleGenAI | null {
  const key = process.env.GEMINI_API_KEY;
  if (!key) {
    console.warn("GEMINI_API_KEY is not defined in environment variables.");
    return null;
  }
  if (!aiClient) {
    aiClient = new GoogleGenAI({
      apiKey: key,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

async function saveLeadToSheet(lead: {
  nom: string;
  password?: string | null;
  telephone: string | null;
  email?: string | null;
  service: string;
  ville: string;
  message?: string;
}) {
  const dateStr = new Date().toLocaleString("fr-BE", {
    timeZone: "Europe/Brussels",
  });

  const nameVal = lead.nom && !lead.nom.includes("Client") ? lead.nom : "Client Chatbot";
  const passVal = lead.password || "Non fourni";
  const phoneVal = lead.telephone || "Non fourni";
  const emailVal = lead.email && lead.email.includes("@") ? lead.email : "Non fourni";
  const serviceVal = lead.service || "Dépannage";
  const cityVal = lead.ville || "Belgique";
  const discussionVal = lead.message || "Aucune discussion enregistrée";

  const formattedLead = {
    "Date / Heure": dateStr,
    "Nom": nameVal,
    "Mot de passe": passVal,
    "Téléphone": phoneVal,
    "Email": emailVal,
    "Service": serviceVal,
    "Ville / Adresse": cityVal,
    "Message": discussionVal,

    // Accent-free and column variation aliases for Google Sheet headers
    "Date": dateStr,
    "Password": passVal,
    "MotDePasse": passVal,
    "pass": passVal,
    "password": passVal,
    "Telephone": phoneVal,
    "Ville": cityVal,
    "Adresse": cityVal,
    "nom": nameVal,
    "telephone": phoneVal,
    "email": emailVal,
    "service": serviceVal,
    "ville": cityVal,
    "adresse": cityVal,
    "message": discussionVal,
    "date": dateStr,
    "name": nameVal,
    "phone": phoneVal,
    "city": cityVal,
    "address": cityVal,
    "details": discussionVal,
    "timestamp": dateStr,
    "Source": "Chatbot Sofia Mobile"
  };

  if (process.env.GOOGLE_SCRIPT_URL) {
    try {
      console.log("[saveLeadToSheet] Sending payload to Google Sheets:", formattedLead);
      const res = await postToGoogleSheets(process.env.GOOGLE_SCRIPT_URL, formattedLead);
      console.log("[saveLeadToSheet] Result from Google Sheets:", res);
    } catch (err) {
      console.error("Error sending chatbot lead to Google Sheets:", err);
    }
  } else {
    console.warn("[saveLeadToSheet] GOOGLE_SCRIPT_URL is not set in process.env");
  }

  return formattedLead;
}

// Helper function to format chat history for Gemini API (must start with user and strictly alternate)
function formatGeminiContents(rawMessages: any[]) {
  const valid = rawMessages.filter(
    (m) =>
      m &&
      (m.role === "user" || m.role === "assistant") &&
      typeof m.content === "string" &&
      m.content.trim() !== ""
  );

  const formatted: { role: "user" | "model"; parts: { text: string }[] }[] = [];

  for (const msg of valid) {
    const role = msg.role === "assistant" ? "model" : "user";
    if (formatted.length === 0) {
      if (role === "user") {
        formatted.push({ role, parts: [{ text: msg.content }] });
      }
      continue;
    }

    const last = formatted[formatted.length - 1];
    if (last.role === role) {
      last.parts[0].text += "\n" + msg.content;
    } else {
      formatted.push({ role, parts: [{ text: msg.content }] });
    }
  }

  return formatted;
}

// Helper function to extract info for the smart rule-based fallback and telemetry
function extractContactInfo(messages: { role: string; content: string }[]) {
  const validMessages = (messages || []).filter(
    (m) => m && typeof m.content === "string" && m.content.trim().length > 0
  );
  const userMessages = validMessages.filter((m) => m.role === "user").map((m) => m.content);

  // Build the complete conversation transcript (Client & Sofia)
  const fullDiscussionTranscript = validMessages
    .map((m) => `${m.role === "assistant" ? "Sofia" : "Client"}: ${m.content.trim()}`)
    .join("\n");

  if (userMessages.length === 0) {
    return {
      telephone: null,
      email: null,
      service: "Dépannage & Service Technique",
      ville: "Belgique",
      hasVille: false,
      nom: "Client Chatbot",
      message: fullDiscussionTranscript || "Discussion via Chatbot",
    };
  }

  const combinedText = userMessages.join("\n");
  const combinedTextLower = combinedText.toLowerCase();

  // Strip timestamps like 17:51:21 or dates like 22/07/2026 to prevent false phone matching
  const textWithoutTimestamps = combinedText
    .replace(/\b\d{1,2}:\d{2}(?::\d{2})?\b/g, "")
    .replace(/\b\d{1,2}\/\d{1,2}\/\d{2,4}\b/g, "");

  // 1. Ultra-Flexible Phone Number Extraction
  // Catches formats like: 04656754678, 0465 67 54 67, +32 465 67 54 67, 0465.67.54.67, etc.
  let telephone: string | null = null;
  const digitsMatches = textWithoutTimestamps.match(/(?:\+32|0032|0)?[\s.\/-]?[1-9](?:[\s.\/-]?\d){7,12}\b|\b04\d{7,10}\b|\b\d{8,13}\b/g);
  if (digitsMatches) {
    for (const m of digitsMatches) {
      const cleanDigits = m.replace(/\D/g, "");
      if (cleanDigits.length >= 8 && cleanDigits.length <= 13) {
        telephone = m.trim();
        break;
      }
    }
  }

  // 2. Email extraction
  const emailPattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
  const emailMatch = combinedText.match(emailPattern);
  const email = emailMatch ? emailMatch[0].trim() : null;

  // 3. Service / Problem extraction (More robust for abbreviations)
  let service = "Dépannage & Service Technique";
  if (/caméra|camera|surveillance|sécurité|securite|cctv/i.test(combinedTextLower)) {
    service = "Installation Caméras";
  } else if (/vidange|fosse|bac|septique|dégraisseur/i.test(combinedTextLower)) {
    service = "Vidange Fosse";
  } else if (/débouch|debouch|canalisation|wc|toilette|égout|egout|évier|evier|baignoire|siphon|bouch/i.test(combinedTextLower)) {
    service = "Débouchage";
  } else if (/chauff|chaudière|chaudiere|boiler|thermostat|radiateur|brûleur/i.test(combinedTextLower)) {
    service = "Chauffage";
  } else if (/plomb|fuite|robinet|tuyau|chasse|sanitaire|eau/i.test(combinedTextLower)) {
    service = "Plomberie";
  } else if (/élec|elec|tableau|panne|courant|prise|disjoncteur/i.test(combinedTextLower)) {
    service = "Électricité";
  } else if (/gaz|cerga/i.test(combinedTextLower)) {
    service = "Gaz";
  } else if (/clim|airco|ventilation/i.test(combinedTextLower)) {
    service = "Climatisation";
  }

  // 4. City / Address extraction
  const cities = [
    "bruxelles", "brussels", "brussel", "liège", "liege", "namur", "charleroi", "mons", "wavre",
    "waterloo", "grimbergen", "grimbrgen", "grimberghe", "woluwe", "uccle", "anderlecht", "ixelles", "jette",
    "schaerbeek", "scharbeek", "forest", "evere", "auderghem", "etterbeek", "saint-gilles",
    "molenbeek", "ganshoren", "berchem", "lasne", "rixensart", "tubize", "nivelles",
    "tournai", "verviers", "herstal", "seraing", "chatelet", "ath", "binche", "durbuy",
    "couvin", "hasselt", "genk", "alost", "aalst", "vilvorde", "vilvoorde", "zaventem", "arlon",
    "bastogne", "ciney", "dinant", "marche-en-famenne", "spa", "waremme", "leuven", "louvain",
    "antwerpen", "anvers", "gent", "gand", "brugge", "bruges", "oostende", "ostende", "kortrijk", "courtrai"
  ];
  let ville: string | null = null;
  for (const city of cities) {
    if (combinedTextLower.includes(city)) {
      if (city === "grimbrgen" || city === "grimberghe") ville = "Grimbergen";
      else if (city === "brussels" || city === "brussel") ville = "Bruxelles";
      else if (city === "scharbeek") ville = "Schaerbeek";
      else if (city === "vilvoorde") ville = "Vilvorde";
      else ville = city.charAt(0).toUpperCase() + city.slice(1);
      break;
    }
  }

  const postalCodeMatch = combinedText.match(/\b([1-9]\d{3})\b/);
  if (!ville && postalCodeMatch) {
    ville = `Code Postal ${postalCodeMatch[1]}`;
  }

  // Address street pattern matching
  let fullAddress = ville;
  const streetMatch = combinedText.match(/(?:rue|chaussée|chaussee|avenue|av\.|boulevard|bd\.|straat|steenweg|place|allée|allee|dreef|dorp)\s+[^,\n.]+/i);
  if (streetMatch) {
    const streetName = streetMatch[0].trim();
    fullAddress = ville ? `${streetName}, ${ville}` : streetName;
  }

  // 5. Name extraction
  let nom = "Client Chatbot";
  const namePatterns = [
    /(?:je m'appelle|moi c'est|mon nom est|nom\s*:\s*|m\.|mme\.|prénom\s*:\s*)\s*([A-Za-zÀ-ÿ\-]+(?:\s+[A-Za-zÀ-ÿ\-]+)*)/i,
    /(?:je suis|ici)\s+([A-Z][a-zÀ-ÿ\-]+(?:\s+[A-Z][a-zÀ-ÿ\-]+)*)/
  ];

  for (const pattern of namePatterns) {
    const matchName = combinedText.match(pattern);
    if (matchName && matchName[1] && matchName[1].trim().length > 1) {
      const extracted = matchName[1].trim();
      const lowerExtracted = extracted.toLowerCase();
      if (!["un", "une", "le", "la", "des", "du", "sur", "pour", "avec", "chez", "besoin", "salam", "bonjour"].includes(lowerExtracted)) {
        nom = extracted;
        break;
      }
    }
  }

  // 6. Password extraction
  let password: string | null = null;
  const passwordPatterns = [
    /(?:mot de passe|password|code|passcode|pass|mdp)\s*:\s*([^\s,\n.]+)/i,
    /(?:mon mot de passe est|mon code est|code client)\s*([^\s,\n.]+)/i,
  ];
  for (const pattern of passwordPatterns) {
    const matchPass = combinedText.match(pattern);
    if (matchPass && matchPass[1] && matchPass[1].trim().length > 0) {
      password = matchPass[1].trim();
      break;
    }
  }

  return {
    telephone,
    email,
    password,
    service,
    ville: fullAddress || "Belgique",
    hasVille: Boolean(fullAddress),
    nom,
    message: fullDiscussionTranscript || "Discussion enregistrée via Chatbot",
  };
}

function cleanJsonString(str: string) {
  let cleaned = str.trim();
  if (cleaned.startsWith("```json")) {
    cleaned = cleaned.substring(7);
  } else if (cleaned.startsWith("```")) {
    cleaned = cleaned.substring(3);
  }
  if (cleaned.endsWith("```")) {
    cleaned = cleaned.substring(0, cleaned.length - 3);
  }
  return cleaned.trim();
}

export async function POST(req: NextRequest) {
  try {
    const { messages, rollingSummary, locale } = await req.json();

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "Historique de messages invalide." },
        { status: 400 }
      );
    }

    const lastUserMsg = (messages.filter((m: any) => m.role === "user").pop()?.content || "").trim();
    const lower = lastUserMsg.toLowerCase();
    const isDutch = locale === "nl" || lower.includes("hallo") || lower.includes("goedendag") || lower.includes("loodgieter") || lower.includes("zonnepanelen");

    // extract any contact info if available (Name, Password, Phone, Email, Address)
    const info = extractContactInfo(messages);
    let appointmentSaved: any = null;

    // Save lead to Google Sheets whenever contact info is collected in conversation
    if (info.telephone || info.email || info.password || (info.nom && info.nom !== "Client Chatbot") || info.hasVille) {
      try {
        appointmentSaved = await saveLeadToSheet({
          nom: info.nom,
          password: info.password,
          telephone: info.telephone,
          email: info.email,
          service: info.service,
          ville: info.ville,
          message: info.message, // Send full discussion history
        });
      } catch (err) {
        console.error("Error saving lead:", err);
      }
    }

    const encoder = new TextEncoder();

    const stream = new ReadableStream({
      async start(controller) {
        const sendJSON = (data: any) => {
          controller.enqueue(encoder.encode(JSON.stringify(data) + "\n"));
        };

        const ai = getGeminiClient();
        if (ai) {
          try {
            const systemInstruction = `Tu es Sofia, l'assistante virtuelle de DEB PRO SERVICES (Spécialiste Débouchage, Plomberie, Chauffage, Vidange, Électricité, Gaz, Climatisation en Belgique).

REGLES ABSOLUES DE CONVERSATION :
1. LANGUE ET STYLE CLAIR (AUCUN MELANGE DE LANGUES) :
   - Parle en Français clair, accueillant et professionnel.
   - Si le client s'adresse à toi en Darija (arabe marocain), réponds-lui naturellement en Darija sans utiliser l'Arabe classique littéraire (الفصحى) et SANS mélanger le Français et l'Arabe dans le même message.
   - N'utilise JAMAIS l'Arabe littéraire classique (الفصحى). Garde un style naturel et fluide.

2. ETAPES DE CONVERSATION DANS LE CHAT (NE DEMANDE PAS LES INFOS AU DEBUT !) :
   - ÉTAPE 1 : Écoute le problème du client et réponds à sa question.
   - ÉTAPE 2 : Demande-lui ses disponibilités et quand il souhaite l'intervention ("Quand souhaitez-vous qu'on intervienne ?", "Est-ce que vous êtes disponible aujourd'hui ou demain ?", "Êtes-vous prêt pour qu'on fixe la visite ?").
   - ÉTAPE 3 : Une fois le problème discuté et qu'il vous dit quand il est disponible/prêt, CONFIRME l'intervention et demande-lui de te donner directement dans le chat ses 4 informations :
     1. Nom complet
     2. Numéro de téléphone
     3. Adresse d'intervention
     4. Adresse email

3. PARCOURS 100% CHAT DIRECT (SANS AUCUN FORMULAIRE) :
   - Collecte toutes les informations par simple message dans la discussion.
   - Une fois les infos reçues, confirme au client que sa demande est validée et enregistrée sur la feuille de suivi de l'équipe technique pour l'envoi immédiat du technicien.

4. COMPORTEMENT ET FORMAT :
   - Réponses courtes, claires et adaptées au mobile (1 à 3 phrases max).`;

            let contents = formatGeminiContents(messages);
            if (contents.length === 0 && lastUserMsg) {
              contents = [{ role: "user", parts: [{ text: lastUserMsg }] }];
            }

            let responseStream = null;
            const modelsToTry = ["gemini-3.1-flash-lite", "gemini-3.6-flash", "gemini-flash-latest"];

            for (const modelName of modelsToTry) {
              try {
                responseStream = await ai.models.generateContentStream({
                  model: modelName,
                  contents: contents,
                  config: { systemInstruction: systemInstruction }
                });
                if (responseStream) break;
              } catch (e) {
                console.warn(`Model ${modelName} stream error, trying next fallback model...`);
              }
            }

            if (!responseStream) {
              throw new Error("All Gemini models exceeded quota or failed; activating local fallback.");
            }

            for await (const chunk of responseStream) {
              if (chunk.text) {
                sendJSON({ type: "text", content: chunk.text });
              }
            }

            // Do NOT send any large interactive form to mobile chat! Collect via conversation directly.
            const resolvedFormType = undefined;

            sendJSON({
              type: "meta",
              formType: resolvedFormType,
              appointment: appointmentSaved,
            });
            controller.close();
            return;
          } catch (geminiErr) {
            console.error("Gemini stream error, falling back to smart rules:", geminiErr);
          }
        }

        // --- SMART CONVERSATIONAL FALLBACK (STREAMED CHUNK BY CHUNK) ---
        let responseText = "";
        let formType: "appointment" | "quote" | undefined = undefined;

        const isAffirmative = ["oui", "ok", "d'accord", "daccord", "yes", "ya", "da", "waga", "ja", "goed", "bevestigen", "bevestig"].includes(lower) || 
                             lower.startsWith("oui ") || lower.startsWith("ja ") || lower === "ouai" || lower === "ouais";
        const hasHistory = messages.filter(m => m.role === "user").length > 0;
        const isFollowUp = messages.filter(m => m.role === "user").length > 1;

        if (isDutch) {
          if (lower.includes("camera") || lower.includes("bewaking")) {
            responseText = "Dat is genoteerd voor uw camerasysteem. Wenst u een offerte of een interventie ter plaatse?";
          } else if (lower.includes("ruiming") || lower.includes("vidange") || lower.includes("putten")) {
            responseText = "Dat is genoteerd voor de ruiming of het onderhoud. In welke gemeente in België bevindt u zich?";
          } else if (lower.includes("lek") || lower.includes("loodgieter") || lower.includes("sanitair")) {
            responseText = "Onze loodgieters komen met spoed ter plaatse voor alle lekken en sanitair werk. In welke stad bevindt u zich?";
          } else if (lower.includes("verwarming") || lower.includes("boiler") || lower.includes("ketel")) {
            responseText = "Onze erkende verwarmingstechnici staan 24/7 klaar voor onderhoud en herstelling van uw ketel.";
          } else if (lower === "ja" || lower === "ok" || lower === "goed") {
            responseText = "Prima! Kunt u uw telefoonnummer en gemeente doorgeven zodat we contact met u kunnen opnemen?";
          } else if (info.telephone && !info.hasVille) {
            responseText = `Bedankt voor uw nummer (${info.telephone}). In welke stad of gemeente is de interventie nodig?`;
          } else if (info.telephone && info.hasVille) {
            responseText = `Bedankt! Een technieker belt u zo snel mogelijk terug op ${info.telephone} voor de interventie in ${info.ville}.`;
          } else if (info.hasVille && !info.telephone) {
            responseText = `Bedankt! We hebben techniekers in ${info.ville}. Kunt u uw telefoonnummer achterlaten zodat we u kunnen terugbellen?`;
          } else {
            responseText = isFollowUp 
              ? "Ik begrijp het niet helemaal. Kunt u meer details geven over uw probleem of uw telefoonnummer achterlaten?"
              : "Hallo! Ik ben Sofia, de assistente van DEB PRO SERVICES. Waarmee kan ik u vandaag helpen met uw loodgieterij, verwarming of elektriciteit?";
          }
        } else {
          if (
            lower.includes("caméra") ||
            lower.includes("camera") ||
            lower.includes("surveillance")
          ) {
            responseText = `C'est bien noté pour votre projet de caméras. Souhaitez-vous un devis ou une intervention sur site ?`;
          } else if (
            lower.includes("vidange") ||
            lower.includes("entretien") ||
            lower.includes("fosse") ||
            lower.includes("bac à graisse")
          ) {
            responseText = `C'est bien pris en compte pour la vidange. Quelle est votre commune en Belgique ?`;
          } else if (
            lower.includes("fuite") ||
            lower.includes("plomberie") ||
            lower.includes("plombier") ||
            lower.includes("eau") ||
            lower.includes("robinet") ||
            lower.includes("chasse")
          ) {
            responseText = `Nos plombiers interviennent en urgence 24h/24 pour stopper toute fuite d'eau. Dans quelle commune vous trouvez-vous ?`;
          } else if (
            lower.includes("débouch") ||
            lower.includes("debouch") ||
            lower.includes("wc") ||
            lower.includes("toilette") ||
            lower.includes("égout") ||
            lower.includes("canalisation")
          ) {
            responseText = `Nos équipes de débouchage haute pression interviennent en 30 minutes. Souhaitez-vous fixer une intervention ?`;
          } else if (
            lower.includes("chauffage") ||
            lower.includes("chaudière") ||
            lower.includes("boiler") ||
            lower.includes("thermostat")
          ) {
            responseText = `Nos chauffagistes certifiés interviennent immédiatement pour tout dépannage de chaudière et chauffage. Quel est votre code postal ?`;
          } else if (
            lower.includes("prix") ||
            lower.includes("tarif") ||
            lower.includes("combien") ||
            lower.includes("devis") ||
            lower.includes("coût")
          ) {
            responseText = `Tous nos devis sont 100% gratuits et sans engagement. Décrivez-moi votre besoin et dites-moi quand vous souhaitez qu'on intervienne !`;
            formType = undefined;
          } else if (
            lower.includes("rendez-vous") ||
            lower.includes("rdv") ||
            lower.includes("réserver") ||
            lower.includes("reserver")
          ) {
            responseText = `Quand souhaitez-vous fixer le rendez-vous ? Dites-moi quel jour et quelle heure vous conviennent le mieux.`;
            formType = undefined;
          } else if (isAffirmative) {
            responseText = isDutch 
              ? "Dat is prima. Wanneer wenst u dat onze technicus langskomt?"
              : "C'est parfait. Quand souhaitez-vous qu'on intervienne ? Dites-moi si vous êtes disponible aujourd'hui ou un autre jour.";
          } else if (info.telephone && !info.hasVille) {
            responseText = `C'est bien noté pour le ${info.telephone}. Dans quelle ville ou commune avez-vous besoin de nous ?`;
          } else if (info.telephone && info.hasVille) {
            responseText = `C'est parfait ! Un technicien vous rappellera rapidement sur le ${info.telephone} pour l'intervention à ${info.ville}.`;
          } else if (info.hasVille && !info.telephone) {
            responseText = `Nous avons des techniciens à ${info.ville}. Pouvez-vous me laisser votre numéro de téléphone pour vous recontacter ?`;
          } else if (
            lower.includes("bonjour") ||
            lower.includes("salut") ||
            lower.includes("hello") ||
            lower.includes("hi") ||
            lower.includes("coucou") ||
            lower.includes("hallo") ||
            lower.includes("goedendag")
          ) {
            responseText = isDutch
              ? "Hallo! Ik ben Sofia, de assistente van DEB PRO SERVICES. Hoe kan ik u vandaag helpen?"
              : `Salut ! Je suis Sofia, l'assistante virtuelle de DEB PRO SERVICES. Comment puis-je vous aider aujourd'hui ?`;
          } else if (lower.includes("bonsoir") || lower.includes("goedenavond")) {
            responseText = isDutch
              ? "Goedenavond! Ik ben Sofia van DEB PRO SERVICES. Waarmee kan ik u helpen?"
              : `Bonsoir ! Je suis Sofia de DEB PRO SERVICES. Comment puis-je vous aider ?`;
          } else if (
            lower.includes("salam") ||
            lower.includes("labas") ||
            lower.includes("sbah lkhir") ||
            lower.includes("msal khir")
          ) {
            responseText = `Salam ! Kifash n3awnak lyoum f les travaux wla dépannage dialk ?`;
          } else {
            if (isDutch) {
              responseText = isFollowUp 
                ? "Ik begrijp het niet helemaal. Kunt u meer details geven over uw probleem of uw telefoonnummer achterlaten?"
                : "Hallo! Ik ben Sofia, de assistente van DEB PRO SERVICES. Waarmee kan ik u vandaag helpen met uw loodgieterij, verwarming of elektriciteit?";
            } else {
              responseText = isFollowUp 
                ? "Je ne suis pas sûre d'avoir bien compris. Pouvez-vous me donner plus de détails sur votre problème ou me laisser votre numéro de téléphone ?"
                : `Bonjour ! Je suis Sofia de DEB PRO SERVICES. Je suis à votre disposition pour toute demande de dépannage, plomberie, chauffage, électricité ou vidange en Belgique.`;
            }
          }
        }

        // Stream fallback text word by word
        const words = responseText.split(" ");
        for (let i = 0; i < words.length; i++) {
          const space = i < words.length - 1 ? " " : "";
          sendJSON({ type: "text", content: words[i] + space });
          await new Promise((resolve) => setTimeout(resolve, 25));
        }

        sendJSON({
          type: "meta",
          formType,
          appointment: appointmentSaved,
        });

        controller.close();
      },
    });

    return new NextResponse(stream, {
      headers: {
        "Content-Type": "application/x-ndjson; charset=utf-8",
        "Cache-Control": "no-cache, no-transform",
        "Connection": "keep-alive",
      },
    });

  } catch (err: any) {
    console.error("Chat API Critical Error:", err);
    return NextResponse.json(
      {
        error: "Une erreur est survenue lors du traitement du message.",
        details: err?.message || String(err),
      },
      { status: 500 }
    );
  }
}

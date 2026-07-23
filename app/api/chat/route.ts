import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { GoogleGenAI, Type } from "@google/genai";

const resend = new Resend(process.env.RESEND_API_KEY || "re_placeholder");

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

async function saveLeadToSheetAndEmail(lead: {
  nom: string;
  telephone: string;
  email?: string;
  service: string;
  ville: string;
  message?: string;
}) {
  const dateStr = new Date().toLocaleString("fr-BE", {
    timeZone: "Europe/Brussels",
  });

  const nameVal =
    lead.nom &&
    lead.nom !== "Client Chatbot" &&
    lead.nom !== "Client Site" &&
    lead.nom !== "Pas d'enregistrement"
      ? lead.nom
      : "Client Chatbot";
  const phoneVal = lead.telephone || "Non fourni";
  const emailVal = lead.email && lead.email.includes("@") ? lead.email : "Non fourni";
  const serviceVal = lead.service || "Dépannage & Service Technique";
  const cityVal = lead.ville || "Belgique";
  const discussionVal =
    lead.message && lead.message.trim() !== "Pas d'enregistrement"
      ? lead.message
      : "Demande d'intervention enregistrée via Assistant Virtuel Sofia";

  const formattedLead = {
    // Exact column headers matching Google Sheet layout:
    // Date / Heure | Nom | Téléphone | Email | Service | Ville / Adresse | Message
    "Date / Heure": dateStr,
    "Nom": nameVal,
    "Téléphone": phoneVal,
    "Email": emailVal,
    "Service": serviceVal,
    "Ville / Adresse": cityVal,
    "Message": discussionVal,

    // Accent-free and simplified exact header variations
    "Date": dateStr,
    "Telephone": phoneVal,
    "Ville": cityVal,
    "Adresse": cityVal,

    // Primary French lowercase keys
    "nom": nameVal,
    "telephone": phoneVal,
    "email": emailVal,
    "service": serviceVal,
    "ville": cityVal,
    "message": discussionVal,
    "date": dateStr,

    // English & standard Google Sheet column aliases
    "name": nameVal,
    "phone": phoneVal,
    "city": cityVal,
    "address": cityVal,
    "details": discussionVal,
    "timestamp": dateStr,

    // Additional common column keys
    "fullName": nameVal,
    "phoneNumber": phoneVal,
    "location": cityVal,
    "serviceType": serviceVal,
    "source": "Chatbot Sofia DEBServices",
  };

  // 1. Send to Google Sheets if GOOGLE_SCRIPT_URL is configured
  if (process.env.GOOGLE_SCRIPT_URL) {
    try {
      await fetch(process.env.GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formattedLead),
      });
    } catch (err) {
      console.error("Error sending chatbot lead to Google Sheets:", err);
    }
  }

  // 2. Send email notification via Resend if RESEND_API_KEY is configured
  if (process.env.RESEND_API_KEY) {
    try {
      await resend.emails.send({
        from: "Chatbot Sofia <onboarding@resend.dev>",
        to: "debproservices@canalrose.be",
        subject: `🤖 Nouveau RDV Chatbot - ${serviceVal.toUpperCase()} - ${cityVal}`,
        html: `
          <h3>🤖 Nouveau rendez-vous enregistré par l'Assistant Virtuel (Sofia)</h3>
          <p><strong>Nom:</strong> ${nameVal}</p>
          <p><strong>Téléphone:</strong> ${phoneVal}</p>
          <p><strong>Email:</strong> ${emailVal}</p>
          <p><strong>Service:</strong> ${serviceVal}</p>
          <p><strong>Ville / Adresse:</strong> ${cityVal}</p>
          <p><strong>Discussion Complète:</strong><br/><pre style="background:#f4f4f4;padding:10px;border-radius:5px;white-space:pre-wrap;">${discussionVal}</pre></p>
          <p><strong>Date / Heure:</strong> ${dateStr}</p>
        `,
      });
    } catch (emailErr) {
      console.error("Error sending chatbot email notification:", emailErr);
    }
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

  // 1. Strict Belgian / International Phone Regex
  const phonePattern = /(?:(?:\+|00)32[\s.\/-]?|0)(?:4[5-9]\d|2|3|9|81|85|87|65|71|63|67|69|50|51|56|58|59)[\s.\/-]?\d{2}[\s.\/-]?\d{2}[\s.\/-]?\d{2}[\s.\/-]?\d{2}|\b04\d{8}\b|\b0[1-9]\d{7,8}\b/;
  const phoneMatch = textWithoutTimestamps.match(phonePattern);
  let telephone: string | null = null;
  if (phoneMatch) {
    const rawMatch = phoneMatch[0].trim();
    const digitsOnly = rawMatch.replace(/\D/g, "");
    if (digitsOnly.length >= 9 && digitsOnly.length <= 13) {
      telephone = rawMatch;
    }
  }

  // 2. Email extraction
  const emailPattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
  const emailMatch = combinedText.match(emailPattern);
  const email = emailMatch ? emailMatch[0].trim() : null;

  // 3. Service extraction
  let service = "Dépannage & Service Technique";
  if (/caméra|camera|surveillance|sécurité|securite|cctv/i.test(combinedTextLower)) {
    service = "Installation Caméras de Surveillance";
  } else if (/vidange|fosse|bac à graisse|bac a graisse|septique|dégraisseur/i.test(combinedTextLower)) {
    service = "Vidange Fosse Septique & Assainissement";
  } else if (/débouch|debouch|canalisation|wc|toilette|égout|egout|évier|evier|baignoire|siphon/i.test(combinedTextLower)) {
    service = "Débouchage Canalisation";
  } else if (/chauff|chaudière|chaudiere|boiler|thermostat|radiateur|brûleur/i.test(combinedTextLower)) {
    service = "Chauffage & Chaudière";
  } else if (/plomb|fuite|robinet|tuyau|chasse d'eau|sanitaire/i.test(combinedTextLower)) {
    service = "Plomberie & Fuite d'eau";
  } else if (/élec|elec|tableau|panne|courant|prise|disjoncteur/i.test(combinedTextLower)) {
    service = "Électricité Générale";
  } else if (/gaz|cerga|conduite gaz/i.test(combinedTextLower)) {
    service = "Gaz & Conformité CERGA";
  } else if (/clim|airco|vmc|ventilation/i.test(combinedTextLower)) {
    service = "Climatisation & VMC";
  } else if (/renovation|salle de bain|douche/i.test(combinedTextLower)) {
    service = "Rénovation & Sanitaire";
  }

  // 4. City / Address extraction
  const cities = [
    "bruxelles", "brussels", "liège", "liege", "namur", "charleroi", "mons", "wavre",
    "waterloo", "grimbergen", "woluwe", "uccle", "anderlecht", "ixelles", "jette",
    "schaerbeek", "forest", "evere", "auderghem", "etterbeek", "saint-gilles",
    "molenbeek", "ganshoren", "berchem", "lasne", "rixensart", "tubize", "nivelles",
    "tournai", "verviers", "herstal", "seraing", "chatelet", "ath", "binche", "durbuy",
    "couvin", "hasselt", "genk", "alost", "vilvorde", "vilvoorde", "zaventem", "arlon",
    "bastogne", "ciney", "dinant", "marche-en-famenne", "spa", "waremme"
  ];
  let ville: string | null = null;
  for (const city of cities) {
    if (combinedTextLower.includes(city)) {
      ville = city.charAt(0).toUpperCase() + city.slice(1);
      break;
    }
  }

  const postalCodeMatch = combinedText.match(/\b([1-9]\d{3})\b/);
  if (!ville && postalCodeMatch) {
    ville = `Code Postal ${postalCodeMatch[1]}`;
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

  return {
    telephone,
    email,
    service,
    ville: ville || "Belgique",
    hasVille: Boolean(ville),
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

    const lastUserMsg = messages.filter((m: any) => m.role === "user").pop()?.content || "";
    const lower = lastUserMsg.toLowerCase();
    const isDutch = locale === "nl" || lower.includes("hallo") || lower.includes("goedendag") || lower.includes("loodgieter") || lower.includes("zonnepanelen");

    // extract any phone info if available
    const info = extractContactInfo(messages);
    let appointmentSaved: any = null;

    // If phone number is provided, save lead in background for the team
    if (info.telephone) {
      try {
        appointmentSaved = await saveLeadToSheetAndEmail({
          nom: info.nom !== "Client Chatbot" ? info.nom : "Client Site",
          telephone: info.telephone,
          service: info.service,
          ville: info.ville,
          message: lastUserMsg,
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
            const systemInstruction = isDutch
              ? `Je bent Sofia, de assistente van DEB PRO SERVICES (https://debservices.canalrose.be/), marktleider in België voor loodgieterij, ontstopping, verwarming, gaz, elektriciteit, climatisatie, ventilatie VMC, bewakingscamera's, zonnepanelen, ruiming van putten, dakbedekking en renovatie.
REGELS:
1. Antwoord ALTIJD in het Nederlands, direct, uiterst beknopt, natuurlijk en beleefd (maximaal 1 à 2 korte zinnen).
2. Voeg NOOIT ongevraagde dienstenlijsten of herhalende vragen toe.
3. Vraag enkel om gegevens als de klant om een offerte, afspraak of interventie vraagt.`
              : `Tu es Sofia, l'assistante de DEB PRO SERVICES (https://debservices.canalrose.be/).

RÈGLES STRICTES DE RÉPONSE :
1. Réponds DIRECTEMENT et EXCLUSIVEMENT à ce que le client demande. Ne rajoute JAMAIS de liste de services non demandée, de suggestions non sollicitées ni de questions automatiques sur d'autres services.
2. Sois extrêmement concis, naturel, poli et utile (1 à 2 phrases courtes maximum).
3. Ne demande les coordonnées que si le client demande explicitement un devis, un rendez-vous ou une intervention.
4. Tu comprends et réponds naturellement en Français, Darija marocaine, Arabe, Néerlandais et Anglais.`;

            let contents = formatGeminiContents(messages);
            if (contents.length === 0 && lastUserMsg) {
              contents = [{ role: "user", parts: [{ text: lastUserMsg }] }];
            }

            let responseStream;
            try {
              responseStream = await ai.models.generateContentStream({
                model: "gemini-3.6-flash",
                contents: contents,
                config: { systemInstruction },
              });
            } catch (e) {
              console.warn("gemini-3.6-flash stream error, fallback to gemini-flash-latest", e);
              responseStream = await ai.models.generateContentStream({
                model: "gemini-flash-latest",
                contents: contents,
                config: { systemInstruction },
              });
            }

            for await (const chunk of responseStream) {
              if (chunk.text) {
                sendJSON({ type: "text", content: chunk.text });
              }
            }

            // Determine if a form should be shown based on intent
            let resolvedFormType: "appointment" | "quote" | undefined = undefined;
            if (
              lower.includes("rendez-vous") ||
              lower.includes("rendez vous") ||
              lower.includes("rdv") ||
              lower.includes("réserver") ||
              lower.includes("planifier")
            ) {
              resolvedFormType = "appointment";
            } else if (
              lower.includes("devis") ||
              lower.includes("estimation") ||
              lower.includes("chiffrage")
            ) {
              resolvedFormType = "quote";
            }

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

        if (isDutch) {
          if (lower.includes("camera") || lower.includes("bewaking")) {
            responseText = "Dat is genoteerd voor uw camerasysteem. Wenst u een offerte of een interventie ter plaatse?";
          } else if (lower.includes("ruiming") || lower.includes("vidange") || lower.includes("putten")) {
            responseText = "Dat is genoteerd voor de ruiming of het onderhoud. In welke gemeente in België bevindt u zich?";
          } else if (info.telephone) {
            responseText = `Dat is genoteerd! Een technieker belt u zo snel mogelijk terug op ${info.telephone}.`;
          } else if (info.hasVille) {
            responseText = `Akkoord, onze techniekers komen snel ter plaatse in ${info.ville}. Wenst u de aanvraag te bevestigen?`;
          } else {
            responseText = "Hallo! Ik ben Sofia, de assistente van DEB PRO SERVICES. Waarmee kan ik u vandaag helpen?";
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
          } else if (info.telephone) {
            responseText = `C'est bien noté ! Un technicien vous rappellera sur le ${info.telephone}.`;
          } else if (info.hasVille) {
            responseText = `D'accord, nos techniciens interviennent rapidement à ${info.ville}. Souhaitez-vous confirmer votre demande ?`;
          } else if (
            lower.includes("bonjour") ||
            lower.includes("salut") ||
            lower.includes("hello") ||
            lower.includes("hi") ||
            lower.includes("coucou")
          ) {
            responseText = `Salut ! Je suis Sofia l'assistant de deb pro services, Comment puis-je vous aider aujourd'hui ?`;
          } else if (lower.includes("bonsoir")) {
            responseText = `Bonsoir ! Comment puis-je vous aider ?`;
          } else if (
            lower.includes("salam") ||
            lower.includes("labas") ||
            lower.includes("sbah lkhir") ||
            lower.includes("msal khir")
          ) {
            responseText = `Salam ! Kifash n3awnak lyoum ?`;
          } else {
            responseText = `Bonjour, comment puis-je vous aider ?`;
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

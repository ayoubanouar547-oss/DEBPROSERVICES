import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

const schema = z.object({
  nom: z.string().min(2).max(100).trim(),
  telephone: z.string().min(8).max(15),
  email: z.string().email().optional().or(z.literal("")),
  service: z.string(),
  ville: z.string().min(2).max(100),
  message: z.string().min(10).max(1000).trim(),
  photos: z.array(z.string()).optional(),
  latitude: z.number().optional(),
  longitude: z.number().optional(),
  honeypot: z.string().max(0).optional(),
});

const resend = new Resend(process.env.RESEND_API_KEY || "re_placeholder");

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = schema.parse(body);

    if (data.honeypot && data.honeypot.length > 0) {
      // It's a bot
      return NextResponse.json({ success: true }); // Fake success for bots
    }

    if (process.env.RESEND_API_KEY) {
      try {
        const photoHtml = data.photos && data.photos.length > 0
          ? `
            <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid #334155;">
              <p style="color: #38bdf8; font-weight: bold; margin-bottom: 8px;">📷 Photos jointes (${data.photos.length}) :</p>
              <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                ${data.photos
                  .map(
                    (p, idx) =>
                      `<img src="${p}" alt="Photo ${idx + 1}" style="max-width: 180px; max-height: 180px; border-radius: 8px; border: 1px solid #475569; object-fit: cover;" />`
                  )
                  .join("")}
              </div>
            </div>
          `
          : "";

        const attachments = data.photos && data.photos.length > 0
          ? data.photos.map((base64Str, idx) => {
              const matches = base64Str.match(/^data:(image\/[a-zA-Z]+);base64,(.+)$/);
              const contentType = matches ? matches[1] : "image/jpeg";
              const ext = contentType.split("/")[1] || "jpg";
              const content = matches ? matches[2] : base64Str;
              return {
                filename: `photo_fuite_${idx + 1}.${ext}`,
                content: content,
              };
            })
          : undefined;

        const recipient = process.env.NOTIFICATION_EMAIL || "debproservices@canalrose.be";
        const sender = process.env.RESEND_FROM_EMAIL || "Contact Site <onboarding@resend.dev>";

        await resend.emails.send({
          from: sender,
          to: recipient,
          subject: `Nouvelle demande - ${data.service.toUpperCase()} - ${data.ville}${data.photos && data.photos.length > 0 ? ` [📷 ${data.photos.length} Photo(s)]` : ""}`,
          html: `
            <h3>Nouvelle demande d'intervention</h3>
            <p><strong>Nom:</strong> ${data.nom}</p>
            <p><strong>Téléphone:</strong> ${data.telephone}</p>
            <p><strong>Email:</strong> ${data.email || "Non fourni"}</p>
            <p><strong>Service:</strong> ${data.service}</p>
            <p><strong>Ville:</strong> ${data.ville}</p>
            ${data.latitude && data.longitude ? `<p><strong>GPS:</strong> ${data.latitude}, ${data.longitude}</p>` : ""}
            <p><strong>Message:</strong><br/>${data.message.replace(/\n/g, "<br/>")}</p>
            ${photoHtml}
          `,
          attachments: attachments,
        });
      } catch (emailError) {
        console.error("Resend email error in contact API:", emailError);
      }
    } else {
      // Fallback or demo mode logging
      console.log("No Resend API Key. Payload received:", data);
    }

    // Google Sheets Integration
    if (process.env.GOOGLE_SCRIPT_URL) {
      try {
        const dateStr = new Date().toLocaleString("fr-BE", {
          timeZone: "Europe/Brussels",
        });
        await fetch(process.env.GOOGLE_SCRIPT_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            // Exact column headers matching Google Sheet layout:
            // Date / Heure | Nom | Téléphone | Email | Service | Ville / Adresse | Message
            "Date / Heure": dateStr,
            "Nom": data.nom,
            "Téléphone": data.telephone,
            "Email": data.email || "Non fourni",
            "Service": data.service,
            "Ville / Adresse": data.ville,
            "Message": data.message,

            // Accent-free variations
            "Date": dateStr,
            "Telephone": data.telephone,
            "Ville": data.ville,
            "Adresse": data.ville,

            // Primary French lowercase keys
            "nom": data.nom,
            "telephone": data.telephone,
            "email": data.email || "Non fourni",
            "service": data.service,
            "ville": data.ville,
            "message": data.message,
            "date": dateStr,

            // English & standard Google Sheet column aliases
            "name": data.nom,
            "phone": data.telephone,
            "city": data.ville,
            "address": data.ville,
            "details": data.message,
            "timestamp": dateStr,

            // Additional common column keys
            "fullName": data.nom,
            "phoneNumber": data.telephone,
            "location": data.ville,
            "serviceType": data.service,
            "source": "Formulaire de Contact Site",
          }),
        });
      } catch (sheetError) {
        console.error("Error sending to Google Sheets:", sheetError);
        // We don't block the response even if sheets fail
      }
    }

    return NextResponse.json({ success: true });
  } catch (err: any) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Données invalides", details: err.issues },
        { status: 400 },
      );
    }
    console.error(err);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}

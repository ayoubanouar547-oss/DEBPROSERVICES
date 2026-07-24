import { NextResponse } from "next/server";
import { z } from "zod";
import { postToGoogleSheets } from "@/lib/googleSheets";

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

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = schema.parse(body);

    if (data.honeypot && data.honeypot.length > 0) {
      // It's a bot
      return NextResponse.json({ success: true }); // Fake success for bots
    }

    // Google Sheets Integration
    if (process.env.GOOGLE_SCRIPT_URL) {
      try {
        const dateStr = new Date().toLocaleString("fr-BE", {
          timeZone: "Europe/Brussels",
        });
        await postToGoogleSheets(process.env.GOOGLE_SCRIPT_URL, {
          // Exact column headers matching Google Sheet layout:
          // Date / Heure | Nom | Téléphone | Email | Service | Ville / Adresse | Message
          "Date / Heure": dateStr,
          "Nom": data.nom,
          "Téléphone": data.telephone,
          "Email": data.email || "Non fourni",
          "Service": data.service,
          "Ville / Adresse": data.ville,
          "Message": data.message,
          "Source": "Formulaire de Contact",
          "timestamp": dateStr,
        });
      } catch (sheetError) {
        console.error("Error sending to Google Sheets:", sheetError);
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

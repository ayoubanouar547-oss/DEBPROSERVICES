import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    if (process.env.GOOGLE_SCRIPT_URL) {
      await fetch(process.env.GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // The script expects: nom, telephone, email, service, ville, message, date
          service: data.service || "Assistance AI Sofia",
          nom: data.nom || "Utilisateur Anonyme",
          telephone: data.telephone || "Non fourni",
          email: data.email || "Non fourni",
          ville: data.ville || "Non précisée",
          message: data.message || "Rendez-vous pris via Assistant IA",
          date: new Date().toLocaleString("fr-BE", {
            timeZone: "Europe/Brussels",
          }),
        }),
      });
      return NextResponse.json({ success: true });
    } else {
      console.log("No GOOGLE_SCRIPT_URL configured. Payload:", data);
      return NextResponse.json({ success: true, warning: "Mock successful" });
    }
  } catch (error) {
    console.error("Booking API Error:", error);
    return NextResponse.json({ error: "Booking Failed" }, { status: 500 });
  }
}

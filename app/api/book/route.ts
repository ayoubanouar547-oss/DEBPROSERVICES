import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "re_placeholder");

// Simple in-memory fallback for booked slots if needed
let BOOKINGS_STORE: Array<{
  id: string;
  bookingDate: string;
  timeSlot: string;
  service: string;
  nom: string;
  telephone: string;
  email: string;
  ville: string;
  message: string;
  status: string;
  createdAt: string;
}> = [];

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const dateParam = searchParams.get("date");

  if (dateParam) {
    const slotsOnDate = BOOKINGS_STORE.filter((b) => b.bookingDate === dateParam).map((b) => b.timeSlot);
    return NextResponse.json({ date: dateParam, occupiedSlots: slotsOnDate });
  }

  return NextResponse.json({ bookings: BOOKINGS_STORE });
}

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const timestampStr = new Date().toLocaleString("fr-BE", {
      timeZone: "Europe/Brussels",
    });

    const nomVal = data.nom || data.name || data.fullName || "Utilisateur Client";
    const telVal = data.telephone || data.phone || data.phoneNumber || "Non fourni";
    const emailVal = data.email && data.email.includes("@") ? data.email : "Non fourni";
    const serviceVal = data.service || data.serviceType || "Intervention Générale";
    const villeVal = data.ville || data.city || data.location || "Belgique";
    const bookingDateVal = data.bookingDate || data.dateIntervention || new Date().toISOString().split("T")[0];
    const timeSlotVal = data.timeSlot || data.creneauHoraire || "09:00 - 11:00";
    const messageVal = data.message || data.details || "Réservation d'intervention directe";

    const newBooking = {
      id: "BK-" + Date.now(),
      bookingDate: bookingDateVal,
      timeSlot: timeSlotVal,
      service: serviceVal,
      nom: nomVal,
      telephone: telVal,
      email: emailVal,
      ville: villeVal,
      message: messageVal,
      status: "confirme",
      createdAt: new Date().toISOString(),
    };

    // Store in-memory
    BOOKINGS_STORE.unshift(newBooking);
    // Keep max 100 entries in memory
    if (BOOKINGS_STORE.length > 100) {
      BOOKINGS_STORE = BOOKINGS_STORE.slice(0, 100);
    }

    const payload = {
      "Date d'intervention": bookingDateVal,
      "Créneau Horaire": timeSlotVal,
      "Date / Heure Enregistrement": timestampStr,
      "Nom": nomVal,
      "Téléphone": telVal,
      "Email": emailVal,
      "Service": serviceVal,
      "Ville / Adresse": villeVal,
      "Message": messageVal,

      // Lowercase & aliases for Google Sheets
      "nom": nomVal,
      "telephone": telVal,
      "email": emailVal,
      "service": serviceVal,
      "ville": villeVal,
      "message": messageVal,
      "bookingDate": bookingDateVal,
      "timeSlot": timeSlotVal,
      "source": "Formulaire de Réservation d'Intervention Directe",
    };

    if (process.env.GOOGLE_SCRIPT_URL) {
      try {
        await fetch(process.env.GOOGLE_SCRIPT_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });
      } catch (sheetErr) {
        console.error("Error sending booking to Google Sheet:", sheetErr);
      }
    }

    if (process.env.RESEND_API_KEY) {
      try {
        await resend.emails.send({
          from: "Réservation DEB PRO <onboarding@resend.dev>",
          to: "debproservices@canalrose.be",
          subject: `📅 Nouvelle Réservation Intervenant - ${serviceVal.toUpperCase()} le ${bookingDateVal} (${timeSlotVal})`,
          html: `
            <div font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; background: #0f172a; color: #ffffff;">
              <h2 style="color: #38bdf8; margin-top: 0;">📅 Nouvelle Réservation d'Intervention Confirmée</h2>
              <p style="color: #94a3b8;">Un client a réservé un créneau d'intervention sur le site DEB PRO SERVICES.</p>
              
              <div style="background: #1e293b; padding: 16px; border-radius: 8px; margin: 20px 0;">
                <p style="margin: 6px 0; color: #38bdf8;"><strong>🗓️ Date demandée :</strong> ${bookingDateVal}</p>
                <p style="margin: 6px 0; color: #38bdf8;"><strong>⏰ Créneau horaire :</strong> ${timeSlotVal}</p>
                <p style="margin: 6px 0;"><strong>🛠️ Service :</strong> ${serviceVal}</p>
                <p style="margin: 6px 0;"><strong>👤 Nom Client :</strong> ${nomVal}</p>
                <p style="margin: 6px 0;"><strong>📞 Téléphone :</strong> <a href="tel:${telVal}" style="color: #4ade80;">${telVal}</a></p>
                <p style="margin: 6px 0;"><strong>✉️ Email :</strong> ${emailVal}</p>
                <p style="margin: 6px 0;"><strong>📍 Ville / Adresse :</strong> ${villeVal}</p>
                <p style="margin: 6px 0;"><strong>📝 Remarques / Problème :</strong><br/>${messageVal}</p>
              </div>
              
              <p style="font-size: 12px; color: #64748b;">E-mail généré automatiquement par l'application DEB PRO SERVICES.</p>
            </div>
          `,
        });
      } catch (emailErr) {
        console.error("Error sending email via Resend:", emailErr);
      }
    }

    return NextResponse.json({ success: true, booking: newBooking });
  } catch (error) {
    console.error("Booking API Error:", error);
    return NextResponse.json({ error: "Booking Failed" }, { status: 500 });
  }
}

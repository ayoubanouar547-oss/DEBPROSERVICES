import { NextResponse } from "next/server";
import { postToGoogleSheets } from "@/lib/googleSheets";

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
        await postToGoogleSheets(process.env.GOOGLE_SCRIPT_URL, payload);
        console.log("Booking lead successfully sent to Google Sheets");
      } catch (sheetErr) {
        console.error("Error sending booking to Google Sheet:", sheetErr);
      }
    }

    return NextResponse.json({ success: true, booking: newBooking });
  } catch (error) {
    console.error("Booking API Error:", error);
    return NextResponse.json({ error: "Booking Failed" }, { status: 500 });
  }
}

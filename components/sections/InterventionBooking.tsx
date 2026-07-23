"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { 
  Calendar as CalendarIcon, Clock, MapPin, Send, CheckCircle2, Loader2, 
  Wrench, Flame, Droplets, Zap, Wind, Truck, Home, Sun, Camera, Sparkles, 
  ShieldCheck, AlertTriangle, Phone, CalendarPlus, Download, User, ArrowRight, FileText
} from "lucide-react";
import dynamic from "next/dynamic";
import { generatePdfDocument } from "@/lib/generatePdf";

const MapSelector = dynamic(() => import("@/components/ui/MapSelector"), {
  ssr: false,
  loading: () => (
    <div className="h-[250px] w-full bg-slate-900 animate-pulse rounded-2xl flex items-center justify-center text-slate-500 text-xs">
      Chargement de la carte GPS...
    </div>
  ),
});

interface TimeSlot {
  id: string;
  time: string;
  labelFr: string;
  labelNl: string;
  isUrgent?: boolean;
}

const TIME_SLOTS: TimeSlot[] = [
  { id: "s1", time: "08:00 - 10:00", labelFr: "Matin (08h - 10h)", labelNl: "Ochtend (08u - 10u)" },
  { id: "s2", time: "10:00 - 12:00", labelFr: "Matin (10h - 12h)", labelNl: "Ochtend (10u - 12u)" },
  { id: "s3", time: "12:00 - 14:00", labelFr: "Midi (12h - 14h)", labelNl: "Middag (12u - 14u)" },
  { id: "s4", time: "14:00 - 16:00", labelFr: "Après-midi (14h - 16h)", labelNl: "Namiddag (14u - 16u)" },
  { id: "s5", time: "16:00 - 18:00", labelFr: "Fin d'après-midi (16h - 18h)", labelNl: "Namiddag (16u - 18u)" },
  { id: "s6", time: "18:00 - 20:00", labelFr: "Soirée (18h - 20h)", labelNl: "Avond (18u - 20u)" },
  { id: "s7", time: "Intervention Express 24h/24", labelFr: "Urgence < 30 Min", labelNl: "Dringend < 30 Min", isUrgent: true },
];

const SERVICES_LIST = [
  { id: "plomberie", nameFr: "Plomberie & Fuites", nameNl: "Loodgieterij & Lekken", icon: Wrench },
  { id: "debouchage", nameFr: "Débouchage Express", nameNl: "Snelle Ontstopping", icon: Droplets },
  { id: "chauffage", nameFr: "Chauffage & Chaudière", nameNl: "Verwarming & Boiler", icon: Flame },
  { id: "electricite", nameFr: "Électricité & Panne", nameNl: "Elektriciteit & Storing", icon: Zap },
  { id: "gaz", nameFr: "Gaz & Dépannage GNC", nameNl: "Gas & CNG Herstelling", icon: Flame },
  { id: "fosse", nameFr: "Vidange Fosse Septique", nameNl: "Septische Put Ledigen", icon: Truck },
  { id: "climatisation", nameFr: "Climatisation & VMC", nameNl: "Airco & Ventilatie", icon: Wind },
  { id: "toiture", nameFr: "Toiture & Étanchéité", nameNl: "Dakwerken & Dichtheid", icon: Home },
  { id: "panneaux-solaires", nameFr: "Panneaux Solaires", nameNl: "Zonnepanelen", icon: Sun },
  { id: "camera-surveillance", nameFr: "Caméras & Alarme", nameNl: "Camerabewaking & Alarm", icon: Camera },
  { id: "renovation", nameFr: "Rénovation & Sanitaires", nameNl: "Renovatie & Sanitair", icon: Sparkles },
];

export function InterventionBooking() {
  const pathname = usePathname();
  const isNl = pathname ? pathname.startsWith("/nl") : false;

  // Generate next 14 days
  const [availableDays, setAvailableDays] = useState<Array<{
    fullDate: string;
    dayName: string;
    dayNum: number;
    monthName: string;
    isToday: boolean;
  }>>([]);

  useEffect(() => {
    const days = [];
    const today = new Date();
    
    for (let i = 0; i < 14; i++) {
      const d = new Date();
      d.setDate(today.getDate() + i);

      const dayName = d.toLocaleDateString(isNl ? "nl-BE" : "fr-BE", { weekday: "short" }).toUpperCase();
      const monthName = d.toLocaleDateString(isNl ? "nl-BE" : "fr-BE", { month: "short" }).toUpperCase();
      const fullDate = d.toISOString().split("T")[0];

      days.push({
        fullDate,
        dayName,
        dayNum: d.getDate(),
        monthName,
        isToday: i === 0,
      });
    }

    setAvailableDays(days);
  }, [isNl]);

  const [selectedDate, setSelectedDate] = useState<string>(
    new Date().toISOString().split("T")[0]
  );
  const [selectedSlot, setSelectedSlot] = useState<string>("10:00 - 12:00");
  const [selectedService, setSelectedService] = useState<string>("plomberie");
  const [showMap, setShowMap] = useState<boolean>(false);

  // Form Fields
  const [nom, setNom] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [ville, setVille] = useState("");
  const [message, setMessage] = useState("");
  const [lat, setLat] = useState<number | undefined>(undefined);
  const [lng, setLng] = useState<number | undefined>(undefined);

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [bookingResult, setBookingResult] = useState<any>(null);

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nom.trim() || nom.length < 2) {
      setErrorMessage(isNl ? "Vul uw naam in." : "Veuillez entrer votre nom.");
      setStatus("error");
      return;
    }
    if (!telephone.trim() || telephone.length < 8) {
      setErrorMessage(isNl ? "Vul een geldig telefoonnummer in." : "Veuillez entrer un numéro de téléphone valide.");
      setStatus("error");
      return;
    }
    if (!ville.trim()) {
      setErrorMessage(isNl ? "Vul uw stad of gemeente in." : "Veuillez indiquer votre ville ou commune.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    const payload = {
      bookingDate: selectedDate,
      timeSlot: selectedSlot,
      service: selectedService,
      nom,
      telephone,
      email,
      ville,
      message,
      latitude: lat,
      longitude: lng,
    };

    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok || data.error) {
        throw new Error(data.error || "Erreur lors de la réservation");
      }

      // Persist locally for dashboard real-time view
      if (typeof window !== "undefined") {
        const currentBookings = JSON.parse(localStorage.getItem("deb_bookings") || "[]");
        const currentLeads = JSON.parse(localStorage.getItem("deb_leads") || "[]");

        const newEntry = {
          id: data.booking?.id || "BK-" + Date.now(),
          name: nom,
          phone: telephone,
          email,
          service: selectedService.charAt(0).toUpperCase() + selectedService.slice(1),
          city: ville,
          bookingDate: selectedDate,
          timeSlot: selectedSlot,
          date: "À l'instant",
          status: "confirme",
          message: message || `Réservation pour le ${selectedDate} (${selectedSlot})`,
          latitude: lat,
          longitude: lng,
        };

        localStorage.setItem("deb_bookings", JSON.stringify([newEntry, ...currentBookings]));
        localStorage.setItem("deb_leads", JSON.stringify([newEntry, ...currentLeads]));

        // Dispatch custom event to notify app state
        window.dispatchEvent(new CustomEvent("booking-updated", { detail: newEntry }));
      }

      setBookingResult(data.booking || newBookingObj(payload));
      setStatus("success");
    } catch (err: any) {
      console.error("Booking submit error:", err);
      setStatus("error");
      setErrorMessage(
        isNl
          ? "Fout bij de online boekingsaanvraag. Neem telefonisch contact op."
          : "Erreur lors de la réservation en ligne. Veuillez nous contacter directement par téléphone."
      );
    }
  };

  const newBookingObj = (p: any) => ({
    id: "BK-" + Date.now(),
    bookingDate: p.bookingDate,
    timeSlot: p.timeSlot,
    service: p.service,
    nom: p.nom,
    telephone: p.telephone,
    ville: p.ville,
  });

  // Calendar Export helpers
  const generateGoogleCalendarUrl = () => {
    if (!selectedDate) return "#";
    const dateFormatted = selectedDate.replace(/-/g, "");
    const title = encodeURIComponent(`Intervention DEB PRO SERVICES - ${selectedService.toUpperCase()}`);
    const details = encodeURIComponent(`Rendez-vous intervention technique DEB PRO SERVICES.\nClient: ${nom}\nTéléphone: ${telephone}\nVille: ${ville}\nCréneau: ${selectedSlot}\nDétails: ${message}`);
    const location = encodeURIComponent(`${ville}, Belgique`);
    
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dateFormatted}T080000Z/${dateFormatted}T100000Z&details=${details}&location=${location}`;
  };

  const downloadIcsFile = () => {
    const dateFormatted = selectedDate.replace(/-/g, "");
    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//DEB PRO SERVICES//Rendez-vous Intervention//FR",
      "BEGIN:VEVENT",
      `UID:booking-${Date.now()}@debservices.canalrose.be`,
      `DTSTAMP:${dateFormatted}T080000Z`,
      `DTSTART:${dateFormatted}T080000Z`,
      `DTEND:${dateFormatted}T100000Z`,
      `SUMMARY:Intervention DEB PRO SERVICES - ${selectedService.toUpperCase()}`,
      `DESCRIPTION:Rendez-vous technique DEB PRO SERVICES.\\nClient: ${nom}\\nTéléphone: ${telephone}\\nCréneau: ${selectedSlot}`,
      `LOCATION:${ville}\\, Belgique`,
      "STATUS:CONFIRMED",
      "END:VEVENT",
      "END:VCALENDAR"
    ].join("\n");

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.setAttribute("download", `intervention-debpro-${selectedDate}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const downloadBookingPdf = () => {
    const srvName = SERVICES_LIST.find((s) => s.id === selectedService);
    const serviceTitleStr = srvName ? (isNl ? srvName.nameNl : srvName.nameFr) : selectedService;

    generatePdfDocument({
      documentType: "RESERVATION",
      referenceNumber: bookingResult?.id || `BK-${Date.now()}`,
      isNl,
      clientInfo: {
        nom,
        telephone,
        email,
        ville,
      },
      serviceCategory: "DEB PRO SERVICES BELGIQUE",
      serviceTitle: serviceTitleStr,
      urgencyTitle: selectedSlot,
      bookingDate: selectedDate,
      timeSlot: selectedSlot,
      message: message || (isNl ? "Directe online boeking van interventie" : "Réservation directe d'intervention en ligne"),
    });
  };

  return (
    <div id="reserver-intervention" className="w-full bg-slate-900/90 backdrop-blur-2xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
      {/* Header Banner */}
      <div className="p-6 md:p-8 border-b border-white/10 bg-gradient-to-r from-blue-900/40 via-indigo-900/20 to-slate-900 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="p-3.5 bg-blue-500/20 border border-blue-500/40 rounded-2xl text-blue-400">
            <CalendarIcon className="w-7 h-7" />
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-black text-white flex items-center gap-2">
              {isNl ? "📅 Boek rechtstreeks een interventie" : "📅 Réserver une Intervention Directe"}
            </h3>
            <p className="text-slate-400 text-xs md:text-sm mt-0.5">
              {isNl
                ? "Kies uw datum, tijdslot en technicus. Bevestiging per SMS & Telefoon binnen 15 min."
                : "Choisissez votre date, créneau horaire et service. Bevestiging par SMS & Téléphone sous 15 min."}
            </p>
          </div>
        </div>

        <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-3.5 py-1.5 rounded-full text-xs font-bold flex items-center gap-2">
          <ShieldCheck className="w-4 h-4" />
          {isNl ? "Gegarandeerde Technicus 24/7" : "Technicien Agréé Garanti 24h/7"}
        </div>
      </div>

      {status === "success" ? (
        /* Success Screen */
        <div className="p-8 md:p-12 text-center space-y-6 animate-in fade-in zoom-in-95 duration-300">
          <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-400 mx-auto border border-emerald-500/40 shadow-xl shadow-emerald-500/10">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div className="max-w-lg mx-auto space-y-2">
            <h4 className="text-2xl md:text-3xl font-black text-white">
              {isNl ? "Interventie Succesvol Geboekt!" : "Intervention Réservée avec Succès !"}
            </h4>
            <p className="text-slate-300 text-sm leading-relaxed">
              {isNl
                ? `Uw afspraak op ${selectedDate} tussen ${selectedSlot} voor ${selectedService} te ${ville} is geregistreerd.`
                : `Votre rendez-vous le ${selectedDate} entre ${selectedSlot} pour le service "${selectedService}" à ${ville} a bien été enregistré.`}
            </p>
          </div>

          {/* Booking Recap card */}
          <div className="max-w-md mx-auto bg-slate-800/80 p-5 rounded-2xl border border-white/10 text-left space-y-2 text-xs text-slate-300">
            <div className="flex justify-between border-b border-white/5 pb-2">
              <span className="text-slate-400">{isNl ? "Referentie:" : "Référence :"}</span>
              <span className="font-mono font-bold text-blue-400">{bookingResult?.id || "BK-REGISTRED"}</span>
            </div>
            <div className="flex justify-between border-b border-white/5 pb-2">
              <span className="text-slate-400">{isNl ? "Datum:" : "Date :"}</span>
              <span className="font-bold text-white">{selectedDate}</span>
            </div>
            <div className="flex justify-between border-b border-white/5 pb-2">
              <span className="text-slate-400">{isNl ? "Tijdslot:" : "Créneau Horaire :"}</span>
              <span className="font-bold text-amber-400">{selectedSlot}</span>
            </div>
            <div className="flex justify-between border-b border-white/5 pb-2">
              <span className="text-slate-400">{isNl ? "Klant:" : "Client :"}</span>
              <span className="font-medium text-slate-200">{nom} ({telephone})</span>
            </div>
            <div className="flex justify-between pt-1">
              <span className="text-slate-400">{isNl ? "Locatie:" : "Lieu :"}</span>
              <span className="font-medium text-emerald-400">{ville}</span>
            </div>
          </div>

          {/* Export & Download buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              type="button"
              onClick={downloadBookingPdf}
              className="w-full sm:w-auto bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-black py-3 px-5 rounded-xl text-xs flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-600/20"
            >
              <Download className="w-4 h-4 text-emerald-200" />
              {isNl ? "📄 Bevestigingsfiche Downloaden (PDF)" : "📄 Télécharger Fiche de Réservation (PDF)"}
            </button>

            <a
              href={generateGoogleCalendarUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-5 rounded-xl text-xs flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-600/20"
            >
              <CalendarPlus className="w-4 h-4" />
              {isNl ? "Google Agenda" : "Ajouter à Google Calendar"}
            </a>

            <button
              onClick={downloadIcsFile}
              className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-slate-200 border border-white/10 font-bold py-3 px-5 rounded-xl text-xs flex items-center justify-center gap-2 transition-all"
            >
              <Download className="w-4 h-4 text-emerald-400" />
              {isNl ? "iCal / Outlook (.ics)" : "Rappel (.ics)"}
            </button>
          </div>

          <div className="pt-4">
            <button
              onClick={() => {
                setStatus("idle");
                setNom("");
                setTelephone("");
                setMessage("");
              }}
              className="text-xs text-blue-400 font-bold underline hover:text-white transition-colors"
            >
              {isNl ? "Nog een interventie boeken" : "Effectuer une autre réservation"}
            </button>
          </div>
        </div>
      ) : (
        /* Form body */
        <form onSubmit={handleBookingSubmit} className="p-6 md:p-8 space-y-8">
          
          {/* Step 1: Date Strip & Picker */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-2">
                <span className="w-5 h-5 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center text-[10px]">1</span>
                {isNl ? "Kies de datum van de interventie" : "Choisissez la date d'intervention"}
              </label>

              <div className="flex items-center gap-2">
                <span className="text-[11px] text-slate-400">{isNl ? "Of kies exact:" : "Ou sélection directe :"}</span>
                <input
                  type="date"
                  value={selectedDate}
                  min={new Date().toISOString().split("T")[0]}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="bg-slate-800 border border-white/10 text-white text-xs px-2.5 py-1 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            {/* Date carousel strip */}
            <div className="flex items-center gap-2 overflow-x-auto pb-3 pt-1 scrollbar-thin scrollbar-thumb-slate-700">
              {availableDays.map((day) => {
                const isSelected = selectedDate === day.fullDate;
                return (
                  <button
                    key={day.fullDate}
                    type="button"
                    onClick={() => setSelectedDate(day.fullDate)}
                    className={`flex-shrink-0 w-20 py-3 rounded-2xl border flex flex-col items-center justify-center transition-all ${
                      isSelected
                        ? "border-blue-500 bg-blue-600/30 text-white shadow-lg shadow-blue-500/20 scale-105"
                        : "border-white/5 bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <span className="text-[10px] font-bold tracking-widest">{day.dayName}</span>
                    <span className="text-xl font-black text-white my-0.5">{day.dayNum}</span>
                    <span className="text-[9px] uppercase tracking-wider text-slate-400">{day.monthName}</span>
                    {day.isToday && (
                      <span className="mt-1 text-[8px] font-bold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded-full border border-emerald-500/20">
                        {isNl ? "Vandaag" : "Aujourd'hui"}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Time Slot Selector */}
          <div>
            <label className="block text-xs font-bold text-slate-200 mb-3 uppercase tracking-wider flex items-center gap-2">
              <span className="w-5 h-5 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center text-[10px]">2</span>
              {isNl ? "Kies het gewenste tijdslot" : "Sélectionnez le créneau horaire souhaité"}
            </label>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
              {TIME_SLOTS.map((slot) => {
                const isSelected = selectedSlot === slot.time;
                return (
                  <button
                    key={slot.id}
                    type="button"
                    onClick={() => setSelectedSlot(slot.time)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      isSelected
                        ? slot.isUrgent 
                          ? "border-red-500 bg-red-500/20 text-white shadow-lg shadow-red-500/20" 
                          : "border-blue-500 bg-blue-500/20 text-white shadow-lg shadow-blue-500/20"
                        : "border-white/5 bg-white/5 text-slate-400 hover:border-white/10 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center gap-1.5 mb-1">
                      <Clock className={`w-3.5 h-3.5 ${slot.isUrgent ? "text-red-400" : isSelected ? "text-blue-400" : "text-slate-400"}`} />
                      <span className="text-xs font-bold">{slot.time}</span>
                    </div>
                    <span className="text-[10px] block opacity-80">
                      {isNl ? slot.labelNl : slot.labelFr}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 3: Service Selection */}
          <div>
            <label className="block text-xs font-bold text-slate-200 mb-3 uppercase tracking-wider flex items-center gap-2">
              <span className="w-5 h-5 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center text-[10px]">3</span>
              {isNl ? "Vakgebied & Type dienst" : "Métier & Type de prestation"}
            </label>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
              {SERVICES_LIST.map((srv) => {
                const SrvIcon = srv.icon;
                const isSelected = selectedService === srv.id;
                return (
                  <button
                    key={srv.id}
                    type="button"
                    onClick={() => setSelectedService(srv.id)}
                    className={`p-3 rounded-xl border text-left transition-all flex items-center gap-2.5 ${
                      isSelected
                        ? "border-blue-500 bg-blue-500/20 text-white shadow-md shadow-blue-500/10"
                        : "border-white/5 bg-white/5 text-slate-400 hover:border-white/10 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <SrvIcon className={`w-4 h-4 flex-shrink-0 ${isSelected ? "text-blue-400" : "text-slate-400"}`} />
                    <span className="text-xs font-bold leading-tight">{isNl ? srv.nameNl : srv.nameFr}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 4: Contact & Location details */}
          <div className="pt-2 border-t border-white/10 space-y-4">
            <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-2">
              <span className="w-5 h-5 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center text-[10px]">4</span>
              {isNl ? "Uw contactgegevens & Adres" : "Vos coordonnées & Adresse d'intervention"}
            </label>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-bold text-slate-300 mb-1.5 uppercase">
                  {isNl ? "Naam Complet *" : "Nom Complet *"}
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                    placeholder={isNl ? "Jan Dupont" : "Jean Dupont"}
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-black/30 border border-white/10 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-300 mb-1.5 uppercase">
                  {isNl ? "Telefoonnummer *" : "Téléphone (GSM) *"}
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    required
                    value={telephone}
                    onChange={(e) => setTelephone(e.target.value)}
                    placeholder="0496 32 57 33"
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-black/30 border border-white/10 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-bold text-slate-300 mb-1.5 uppercase">
                  {isNl ? "Stad / Gemeente *" : "Ville / Commune *"}
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={ville}
                    onChange={(e) => setVille(e.target.value)}
                    placeholder={isNl ? "1000 Brussel / Antwerpen / Gent" : "1000 Bruxelles / Liège / Namur"}
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-black/30 border border-white/10 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-300 mb-1.5 uppercase">
                  {isNl ? "E-mail (Optioneel)" : "E-mail (Optionnel)"}
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="exemple@email.be"
                  className="w-full px-4 py-2.5 rounded-xl bg-black/30 border border-white/10 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            {/* GPS Map toggle */}
            <div>
              <button
                type="button"
                onClick={() => setShowMap(!showMap)}
                className="text-[11px] font-bold text-blue-400 hover:text-white transition-colors flex items-center gap-1.5"
              >
                <MapPin className="w-3.5 h-3.5" />
                {showMap 
                  ? (isNl ? "Verberg GPS Kaart" : "Masquer la carte GPS") 
                  : (isNl ? "📍 Exacte GPS-locatie op kaart aanduiden" : "📍 Préciser la localisation GPS exacte sur la carte")}
              </button>

              {showMap && (
                <div className="mt-3">
                  <MapSelector
                    onCoordsChange={(l, g) => {
                      setLat(l);
                      setLng(g);
                    }}
                    initialLat={lat}
                    initialLng={lng}
                  />
                </div>
              )}
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-300 mb-1.5 uppercase">
                {isNl ? "Omschrijving / Details van het probleem" : "Description du problème / Détails d'accès"}
              </label>
              <textarea
                rows={2}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={isNl ? "bv. Waterlek onder de gootsteen, bel aan op de 2de verdieping..." : "ex: Fuite sous évier, sonner à l'appartement 2ème étage..."}
                className="w-full px-4 py-2.5 rounded-xl bg-black/30 border border-white/10 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-blue-500 resize-none"
              />
            </div>
          </div>

          {/* Error display */}
          {status === "error" && (
            <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-xs font-bold flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 flex-shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Submit Action */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <div className="text-xs text-slate-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              {isNl ? "Technici beschikbaar in uw région" : "Techniciens disponibles dans votre secteur"}
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 hover:from-blue-500 hover:to-indigo-500 text-white font-black py-4 px-8 rounded-2xl shadow-xl shadow-blue-600/20 text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all disabled:opacity-50"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  {isNl ? "Reservering verwerken..." : "Traitement de la réservation..."}
                </>
              ) : (
                <>
                  {isNl ? "Bevestig mijn afspraak" : "Confirmer ma réservation d'intervention"}
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>

        </form>
      )}
    </div>
  );
}

"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import {
  Send,
  CheckCircle,
  Loader2,
  MapPin,
  Calendar,
  FileText,
  Clock,
  ShieldCheck,
  Phone,
  Download,
  Camera,
  UploadCloud,
  X,
  Image as ImageIcon,
  AlertCircle,
  Trash2,
  Mic,
  MicOff,
  Volume2,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import dynamic from "next/dynamic";
import { InterventionBooking } from "@/components/sections/InterventionBooking";
import { generatePdfDocument } from "@/lib/generatePdf";

const MapSelector = dynamic(() => import("@/components/ui/MapSelector"), {
  ssr: false,
  loading: () => (
    <div className="h-[300px] w-full bg-slate-900 animate-pulse rounded-2xl flex items-center justify-center text-slate-500">
      Chargement de la carte...
    </div>
  ),
});

const createSchema = (isNl: boolean) => z.object({
  nom: z.string().min(2, isNl ? "Naam is te kort" : "Le nom est trop court").max(100),
  telephone: z.string().min(8, isNl ? "Ongeldig telefoonnummer" : "Numéro de téléphone invalide"),
  email: z
    .string()
    .email(isNl ? "Ongeldig e-mailadres" : "Adresse email invalide")
    .optional()
    .or(z.literal("")),
  service: z.enum([
    "plomberie",
    "chauffage",
    "gaz",
    "electricite",
    "climatisation",
    "fosse",
    "construction",
    "debouchage",
    "toiture",
    "panneaux-solaires",
    "renovation",
    "camera-surveillance",
    "vitres",
    "jardinage",
  ]),
  ville: z.string().min(2, isNl ? "Voer uw stad in" : "Veuillez entrer votre ville"),
  message: z
    .string()
    .min(10, isNl ? "Bericht is te kort, geef meer details." : "Le message est trop court, merci de préciser.")
    .max(1000),
  photos: z.array(z.string()).optional(),
  latitude: z.number().optional(),
  longitude: z.number().optional(),
  honeypot: z.string().max(0, "Invalid field"), // Anti-spam
});

type FormData = z.infer<ReturnType<typeof createSchema>>;

interface AttachedPhoto {
  id: string;
  name: string;
  size: number;
  previewUrl: string;
  base64: string;
}

export function ContactForm() {
  const pathname = usePathname();
  const isNl = pathname ? pathname.startsWith("/nl") : false;

  const [activeTab, setActiveTab] = useState<"booking" | "devis">("booking");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [showMap, setShowMap] = useState(false);
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);

  // Photo Upload State
  const [photos, setPhotos] = useState<AttachedPhoto[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [photoError, setPhotoError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const MAX_PHOTOS = 4;
  const MAX_FILE_SIZE_BYTES = 5 * 1024 * 1024; // 5MB

  // Speech Recognition State
  const [isListening, setIsListening] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(false);
  const [speechError, setSpeechError] = useState<string | null>(null);
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const SpeechRecognition =
        (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (SpeechRecognition) {
        setSpeechSupported(true);
      }
    }
  }, []);

  const schema = createSchema(isNl);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const lat = watch("latitude");
  const lng = watch("longitude");

  useEffect(() => {
    const handleCostEstimationApplied = (e: Event) => {
      const customEvent = e as CustomEvent<{ service: any; message: string }>;
      if (customEvent.detail) {
        setValue("service", customEvent.detail.service);
        setValue("message", customEvent.detail.message);
        setActiveTab("devis");
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("cost-estimation-applied", handleCostEstimationApplied);
      
      // Check location hash
      if (window.location.hash === "#reserver" || window.location.hash === "#reserver-intervention") {
        setActiveTab("booking");
      }
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("cost-estimation-applied", handleCostEstimationApplied);
      }
    };
  }, [setValue]);

  const toggleListening = () => {
    setSpeechError(null);
    if (isListening) {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.stop();
        } catch (e) {
          console.error(e);
        }
      }
      setIsListening(false);
      return;
    }

    if (typeof window === "undefined") return;

    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setSpeechError(
        isNl
          ? "Uw browser ondersteunt geen spraakherkenning."
          : "Votre navigateur ne prend pas en charge la reconnaissance vocale."
      );
      return;
    }

    try {
      const recognition = new SpeechRecognition();
      recognition.lang = isNl ? "nl-BE" : "fr-BE";
      recognition.continuous = true;
      recognition.interimResults = true;

      let startingText = watch("message") || "";

      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onresult = (event: any) => {
        let interimTranscript = "";
        let finalTranscript = "";

        for (let i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            finalTranscript += event.results[i][0].transcript;
          } else {
            interimTranscript += event.results[i][0].transcript;
          }
        }

        const added = finalTranscript || interimTranscript;
        if (added) {
          const updatedText = startingText
            ? `${startingText.trim()} ${added.trim()}`
            : added.trim();
          setValue("message", updatedText, { shouldValidate: true });
        }
      };

      recognition.onerror = (event: any) => {
        console.error("Speech recognition error", event.error);
        setIsListening(false);
        if (event.error === "not-allowed") {
          setSpeechError(
            isNl
              ? "Toegang tot de microfoon is geweigerd."
              : "L'accès au microphone a été refusé par le navigateur."
          );
        } else if (event.error !== "no-speech") {
          setSpeechError(
            isNl
              ? "Er is een fout opgetreden bij spraakherkenning."
              : "Une erreur est survenue lors de la dictée vocale."
          );
        }
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = recognition;
      recognition.start();
    } catch (err) {
      console.error("Speech error", err);
      setIsListening(false);
      setSpeechError(
        isNl
          ? "Kan microfoon niet starten."
          : "Impossible d'activer le microphone."
      );
    }
  };

  const processFiles = (fileList: FileList | File[]) => {
    setPhotoError(null);
    const filesArray = Array.from(fileList);

    if (photos.length + filesArray.length > MAX_PHOTOS) {
      setPhotoError(
        isNl
          ? `U kunt maximaal ${MAX_PHOTOS} foto's toevoegen.`
          : `Vous pouvez ajouter un maximum de ${MAX_PHOTOS} photos.`
      );
      return;
    }

    const validFiles: File[] = [];
    for (const file of filesArray) {
      if (!file.type.startsWith("image/")) {
        setPhotoError(
          isNl
            ? "Alleen afbeeldingen (JPG, PNG, WebP) zijn toegestaan."
            : "Seules les images (JPG, PNG, WebP) sont acceptées."
        );
        continue;
      }
      if (file.size > MAX_FILE_SIZE_BYTES) {
        setPhotoError(
          isNl
            ? `De afbeelding "${file.name}" is te groot (max 5 MB).`
            : `L'image "${file.name}" dépasse la taille maximale de 5 Mo.`
        );
        continue;
      }
      validFiles.push(file);
    }

    if (validFiles.length === 0) return;

    const newPhotoPromises = validFiles.map(
      (file) =>
        new Promise<AttachedPhoto>((resolve) => {
          const reader = new FileReader();
          reader.onload = (e) => {
            const base64 = e.target?.result as string;
            resolve({
              id: `photo-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
              name: file.name,
              size: file.size,
              previewUrl: URL.createObjectURL(file),
              base64,
            });
          };
          reader.readAsDataURL(file);
        })
    );

    Promise.all(newPhotoPromises).then((newPhotos) => {
      const updatedPhotos = [...photos, ...newPhotos].slice(0, MAX_PHOTOS);
      setPhotos(updatedPhotos);
      setValue("photos", updatedPhotos.map((p) => p.base64));
    });
  };

  const removePhoto = (id: string) => {
    const updated = photos.filter((p) => p.id !== id);
    setPhotos(updated);
    setValue("photos", updated.map((p) => p.base64));
    if (updated.length === 0 && fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      const payload = {
        ...data,
        photos: photos.map((p) => p.base64),
      };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Erreur lors de l'envoi");
      }

      // Persist to localStorage for Dashboard Real-time simulation
      if (typeof window !== "undefined") {
        const existingLeads = JSON.parse(
          localStorage.getItem("deb_leads") || "[]",
        );
        const newLead = {
          id: Date.now(),
          name: data.nom,
          phone: data.telephone,
          service: data.service.charAt(0).toUpperCase() + data.service.slice(1),
          city: data.ville,
          date: "À l'instant",
          status: "nouveau",
          email: data.email,
          message: data.message,
          photos: photos.map((p) => p.base64),
          latitude: data.latitude,
          longitude: data.longitude,
        };
        localStorage.setItem(
          "deb_leads",
          JSON.stringify([newLead, ...existingLeads]),
        );
      }

      setSubmittedData(payload);
      setStatus("success");
      setPhotos([]);
      setPhotoError(null);
      reset();
    } catch (e) {
      console.error(e);
      setStatus("error");
      setErrorMessage(
        isNl ? (
          "Er is een fout opgetreden bij het verzenden. Neem telefonisch contact met ons op."
        ) : (
          "Une erreur est survenue lors de l'envoi. Veuillez nous contacter par téléphone."
        )
      );
    }
  };

  const handleDownloadSubmittedPdf = () => {
    if (!submittedData) return;
    generatePdfDocument({
      documentType: "DEVIS",
      referenceNumber: `DEV-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`,
      isNl,
      clientInfo: {
        nom: submittedData.nom,
        telephone: submittedData.telephone,
        email: submittedData.email || "",
        ville: submittedData.ville,
      },
      serviceCategory: "Demande de Devis DEB PRO SERVICES",
      serviceTitle: submittedData.service.toUpperCase(),
      urgencyTitle: "Demande Standard / Express",
      message: submittedData.message,
    });
  };

  return (
    <section className="py-20 relative z-10" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header & Selector Tabs */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-blue-400 font-bold tracking-widest uppercase mb-2 text-xs md:text-sm">
            {isNl ? "Contact & Afspraken" : "Contact & Prise de Rendez-vous"}
          </h2>
          <h3 className="text-3xl md:text-5xl font-black text-white mb-4">
            {isNl ? "Réserver une intervention ou obtenir un devis" : "Réserver une intervention ou demander un devis"}
          </h3>
          <p className="text-slate-400 text-base md:text-lg">
            {isNl
              ? "Kies een datum en tijdslot voor een snelle interventie door een erkende technicus, of stuur ons een algemene offerte-aanvraag."
              : "Choisissez une date et un créneau horaire pour une intervention directe avec un technicien certifié, ou envoyez une demande de devis express."}
          </p>

          {/* Tab Switcher */}
          <div className="inline-flex p-1.5 bg-slate-900/90 rounded-2xl border border-white/10 mt-8 shadow-xl">
            <button
              onClick={() => setActiveTab("booking")}
              className={`px-6 py-3 rounded-xl font-bold text-xs md:text-sm transition-all flex items-center gap-2 ${
                activeTab === "booking"
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/30"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <Calendar className="w-4 h-4 text-blue-300" />
              {isNl ? "📅 Réserver une intervention (Datum & Tijdslot)" : "📅 Réserver une intervention (Date & Créneau)"}
            </button>

            <button
              onClick={() => setActiveTab("devis")}
              className={`px-6 py-3 rounded-xl font-bold text-xs md:text-sm transition-all flex items-center gap-2 ${
                activeTab === "devis"
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/30"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <FileText className="w-4 h-4 text-indigo-300" />
              {isNl ? "📋 Snelle Offerte / Bericht" : "📋 Demande de Devis / Message"}
            </button>
          </div>
        </div>

        {/* Tab 1: Full Interactive Booking Component */}
        {activeTab === "booking" ? (
          <div className="max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-3 duration-300">
            <InterventionBooking />
          </div>
        ) : (
          /* Tab 2: Standard Quick Quote Form */
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-3 duration-300">
            <div>
              <h3 className="text-2xl md:text-4xl font-black text-white mb-4">
                {isNl ? "Gratis en Vrijblijvende Offerte" : "Devis Gratuit & Sans Engagement"}
              </h3>
              <p className="text-slate-400 mb-8 text-base leading-relaxed">
                {isNl ? (
                  "Vul het onderstaande formulier in met zoveel mogelijk details. Ons team neemt zo snel mogelijk contact met u op voor een diagnose of een nauwkeurige offerte."
                ) : (
                  "Remplissez le formulaire ci-dessous avec le maximum de détails. Notre équipe vous recontactera très rapidement avec un diagnostic ou un devis précis."
                )}
              </p>

              <div className="space-y-4">
                <div className="bg-white/5 backdrop-blur-xl p-5 rounded-2xl border border-white/10 flex items-start gap-3">
                  <ShieldCheck className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-white text-sm">
                      {isNl ? "100% Transparante Tarieven" : "Tarifs 100% Transparents"}
                    </h4>
                    <p className="text-slate-400 text-xs mt-1">
                      {isNl
                        ? "Geen verborgen kosten. Voorafgaande schriftelijke offerte voor elke herstelling."
                        : "Aucun frais caché. Devis écrit préalable avant toute intervention."}
                    </p>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-xl p-5 rounded-2xl border border-white/10 flex items-start gap-3">
                  <Phone className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-white text-sm">
                      {isNl ? "Telefonische Support 24/7" : "Assistance Téléphonique 24h/7"}
                    </h4>
                    <p className="text-slate-400 text-xs mt-1">
                      {isNl
                        ? "Voor dringende situaties kunt u ons rechtstreeks bellen op 0496 32 57 33."
                        : "En cas d'urgence absolue, vous pouvez nous joindre directement au 0496 32 57 33."}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/10">
              {status === "success" ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center text-green-400 mb-4 border border-green-500/30">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-black text-white">
                    {isNl ? "Bericht Verzonden!" : "Message Envoyé !"}
                  </h4>
                  <p className="text-slate-400 text-sm">
                    {isNl ? (
                      "We hebben uw aanvraag goed ontvangen en nemen zo snel mogelijk contact met u op."
                    ) : (
                      "Nous avons bien reçu votre demande et vous recontacterons dans les plus brefs délais."
                    )}
                  </p>

                  {submittedData && (
                    <button
                      type="button"
                      onClick={handleDownloadSubmittedPdf}
                      className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-black py-3 px-6 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 my-2"
                    >
                      <Download className="w-4 h-4 text-emerald-200" />
                      {isNl ? "📄 Kopie van Aanvraag Downloaden (PDF)" : "📄 Télécharger Copie de la Demande (PDF)"}
                    </button>
                  )}

                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-2 text-blue-400 font-bold uppercase tracking-wider text-xs hover:text-white transition-colors"
                  >
                    {isNl ? "Stuur nog een bericht" : "Envoyer un autre message"}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <input
                    type="text"
                    {...register("honeypot")}
                    className="hidden"
                    aria-hidden="true"
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-nom-input" className="block text-xs font-bold text-slate-300 mb-2 uppercase tracking-wider">
                        {isNl ? "Volledige Naam *" : "Nom Complet *"}
                      </label>
                      <input
                        id="contact-nom-input"
                        type="text"
                        {...register("nom")}
                        className={`w-full px-4 py-3 rounded-xl bg-black/20 border ${errors.nom ? "border-red-500/50" : "border-white/10"} text-white text-xs placeholder-slate-500 focus:outline-none focus:border-blue-500/50 transition-colors`}
                        placeholder={isNl ? "Jan Dupont" : "Jean Dupont"}
                      />
                      {errors.nom && (
                        <p className="mt-1 text-xs text-red-400 font-bold">
                          {errors.nom.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="contact-telephone-input" className="block text-xs font-bold text-slate-300 mb-2 uppercase tracking-wider">
                        {isNl ? "Telefoon *" : "Téléphone *"}
                      </label>
                      <input
                        id="contact-telephone-input"
                        type="tel"
                        {...register("telephone")}
                        className={`w-full px-4 py-3 rounded-xl bg-black/20 border ${errors.telephone ? "border-red-500/50" : "border-white/10"} text-white text-xs placeholder-slate-500 focus:outline-none focus:border-blue-500/50 transition-colors`}
                        placeholder="0496 32 57 33"
                      />
                      {errors.telephone && (
                        <p className="mt-1 text-xs text-red-400 font-bold">
                          {errors.telephone.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="service-select" className="block text-xs font-bold text-slate-300 mb-2 uppercase tracking-wider">
                        {isNl ? "Gevraagde Dienst *" : "Service Demandé *"}
                      </label>
                      <select
                        id="service-select"
                        {...register("service")}
                        className={`w-full px-4 py-3 rounded-xl bg-slate-900 border ${errors.service ? "border-red-500/50" : "border-white/10"} text-white text-xs focus:outline-none focus:border-blue-500/50 transition-colors appearance-none`}
                        aria-label={isNl ? "Gevraagde Dienst" : "Service Demandé"}
                      >
                        <option value="plomberie">{isNl ? "Loodgieterij" : "Plomberie"}</option>
                        <option value="chauffage">{isNl ? "Verwarming" : "Chauffage"}</option>
                        <option value="gaz">{isNl ? "Gas" : "Gaz"}</option>
                        <option value="electricite">{isNl ? "Elektriciteit" : "Électricité"}</option>
                        <option value="climatisation">{isNl ? "Airco / Klimatisatie" : "Climatisation"}</option>
                        <option value="fosse">{isNl ? "Septische Put Ledigen" : "Vidange Fosse"}</option>
                        <option value="construction">{isNl ? "Ruwbouw & Constructie" : "Construction & Gros Œuvre"}</option>
                        <option value="vitres">{isNl ? "Ruitenwassing" : "Nettoyage de Vitres"}</option>
                        <option value="jardinage">{isNl ? "Tuinonderhoud & Snoei" : "Jardinage & Élagage"}</option>
                      </select>
                      {errors.service && (
                        <p className="mt-1 text-xs text-red-400 font-bold">
                          {errors.service.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="contact-ville-input" className="block text-xs font-bold text-slate-300 mb-2 uppercase tracking-wider">
                        {isNl ? "Stad / Postcode *" : "Ville / Code Postal *"}
                      </label>
                      <input
                        id="contact-ville-input"
                        type="text"
                        {...register("ville")}
                        className={`w-full px-4 py-3 rounded-xl bg-black/20 border ${errors.ville ? "border-red-500/50" : "border-white/10"} text-white text-xs placeholder-slate-500 focus:outline-none focus:border-blue-500/50 transition-colors`}
                        placeholder={isNl ? "1000 Brussel" : "1000 Bruxelles"}
                      />
                      {errors.ville && (
                        <p className="mt-1 text-xs text-red-400 font-bold">
                          {errors.ville.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-email-input" className="block text-xs font-bold text-slate-300 mb-2 uppercase tracking-wider">
                      {isNl ? "E-mail " : "Email "}
                      <span className="font-normal text-slate-500 lowercase">
                        {isNl ? "(Optioneel)" : "(Optionnel)"}
                      </span>
                    </label>
                    <input
                      id="contact-email-input"
                      type="email"
                      {...register("email")}
                      className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-blue-500/50 transition-colors"
                      placeholder="adresse@email.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                        {isNl ? "GPS Locatie " : "Localisation GPS "}
                        <span className="font-normal text-slate-500 lowercase">
                          {isNl ? "(Optioneel)" : "(Optionnel)"}
                        </span>
                      </label>
                      <button
                        type="button"
                        onClick={() => setShowMap(!showMap)}
                        className="text-[10px] font-black text-blue-400 uppercase tracking-widest flex items-center gap-1.5 hover:text-white transition-colors"
                      >
                        <MapPin className="w-3 h-3" />
                        {showMap ? (isNl ? "Verberg la kaart" : "Masquer la carte") : (isNl ? "Kaart gebruiken" : "Utiliser la carte")}
                      </button>
                    </div>

                    {showMap && (
                      <div className="space-y-3 pt-2">
                        <MapSelector
                          onCoordsChange={(l, g) => {
                            setValue("latitude", l);
                            setValue("longitude", g);
                          }}
                          initialLat={lat}
                          initialLng={lng}
                        />
                      </div>
                    )}
                  </div>

                  {/* Photo Upload Section */}
                  <div className="space-y-2.5 pt-1">
                    <div className="flex items-center justify-between">
                      <label htmlFor="photo-upload-input" className="block text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5 cursor-pointer">
                        <Camera className="w-3.5 h-3.5 text-blue-400" />
                        {isNl ? "Foto's van het lek / probleem " : "Photos de la fuite / du problème "}
                        <span className="font-normal text-slate-500 lowercase">
                          {isNl ? "(Optioneel)" : "(Optionnel)"}
                        </span>
                      </label>
                      <span className="text-[10px] font-bold text-slate-400">
                        {photos.length} / {MAX_PHOTOS} {isNl ? "foto's" : "photos"}
                      </span>
                    </div>

                    <p className="text-[11px] text-slate-400 leading-normal">
                      {isNl
                        ? "📷 Voeg foto's toe van het lek, de leiding of de installatie voor een snellere diagnose door onze dispatcher."
                        : "📷 Joignez des photos de la fuite, tuyauterie ou installation pour un diagnostic rapide par le dispatcher."}
                    </p>

                    {/* Hidden File Input */}
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/jpeg,image/png,image/webp,image/heic,image/gif"
                      multiple
                      onChange={(e) => {
                        if (e.target.files) processFiles(e.target.files);
                      }}
                      className="hidden"
                      id="photo-upload-input"
                    />

                    {/* Drag-and-drop Dropzone */}
                    {photos.length < MAX_PHOTOS && (
                      <div
                        onDragOver={(e) => {
                          e.preventDefault();
                          setIsDragging(true);
                        }}
                        onDragLeave={(e) => {
                          e.preventDefault();
                          setIsDragging(false);
                        }}
                        onDrop={(e) => {
                          e.preventDefault();
                          setIsDragging(false);
                          if (e.dataTransfer.files) processFiles(e.dataTransfer.files);
                        }}
                        onClick={() => fileInputRef.current?.click()}
                        className={`relative cursor-pointer rounded-2xl border-2 border-dashed p-4 text-center transition-all flex flex-col items-center justify-center gap-1.5 group ${
                          isDragging
                            ? "border-blue-400 bg-blue-500/20 shadow-lg shadow-blue-500/20 scale-[0.99]"
                            : "border-white/15 bg-black/20 hover:border-blue-400/60 hover:bg-white/5"
                        }`}
                      >
                        <div className="w-9 h-9 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                          <UploadCloud className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-white group-hover:text-blue-300 transition-colors">
                            {isNl
                              ? "Klik hier om foto's te kiezen of sleep ze hierheen"
                              : "Cliquez pour ajouter des photos ou glissez-les ici"}
                          </p>
                          <p className="text-[10px] text-slate-400 mt-0.5">
                            {isNl
                              ? "JPG, PNG, WebP (max 5 MB per bestand)"
                              : "JPG, PNG, WebP (max 5 Mo par photo)"}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Photo Error Display */}
                    {photoError && (
                      <div className="p-2.5 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-xs flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 flex-shrink-0" />
                        <span>{photoError}</span>
                      </div>
                    )}

                    {/* Thumbnails Preview Grid */}
                    {photos.length > 0 && (
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
                        {photos.map((photo, idx) => (
                          <div
                            key={photo.id}
                            className="relative group rounded-xl overflow-hidden bg-slate-900 border border-white/10 aspect-square shadow-md"
                          >
                            <img
                              src={photo.previewUrl}
                              alt={photo.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 opacity-90 group-hover:opacity-100 transition-opacity p-2 flex flex-col justify-between">
                              <div className="flex justify-between items-start">
                                <span className="text-[9px] font-bold text-blue-300 bg-blue-950/80 px-1.5 py-0.5 rounded border border-blue-400/30 backdrop-blur-sm">
                                  #{idx + 1}
                                </span>
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    removePhoto(photo.id);
                                  }}
                                  className="w-6 h-6 rounded-full bg-red-600/90 text-white flex items-center justify-center hover:bg-red-500 transition-colors shadow-md"
                                  title={isNl ? "Verwijder foto" : "Supprimer la photo"}
                                >
                                  <X className="w-3.5 h-3.5" />
                                </button>
                              </div>
                              <div>
                                <p className="text-[10px] font-medium text-white truncate drop-shadow-sm">
                                  {photo.name}
                                </p>
                                <p className="text-[9px] text-slate-300">
                                  {(photo.size / (1024 * 1024)).toFixed(2)} MB
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label htmlFor="contact-message-textarea" className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                        {isNl ? "Details van de aanvraag *" : "Détails de la demande *"}
                      </label>

                      {speechSupported && (
                        <button
                          type="button"
                          onClick={toggleListening}
                          className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold transition-all ${
                            isListening
                              ? "bg-red-500/20 text-red-400 border border-red-500/40 animate-pulse shadow-md shadow-red-500/20"
                              : "bg-blue-500/10 text-blue-400 border border-blue-500/20 hover:bg-blue-500/20"
                          }`}
                          title={
                            isNl
                              ? "Spreek uw bericht in (Dictafoon)"
                              : "Dicter votre message par la voix"
                          }
                        >
                          {isListening ? (
                            <>
                              <MicOff className="w-3.5 h-3.5 text-red-400 animate-bounce" />
                              <span>{isNl ? "Aan het luisteren..." : "Écoute en cours..."}</span>
                            </>
                          ) : (
                            <>
                              <Mic className="w-3.5 h-3.5 text-blue-400" />
                              <span>{isNl ? "🎙️ Dicteren" : "🎙️ Dictée vocale"}</span>
                            </>
                          )}
                        </button>
                      )}
                    </div>

                    {isListening && (
                      <div className="mb-2.5 p-2.5 rounded-xl bg-red-500/15 border border-red-500/30 text-red-200 text-xs flex items-center justify-between animate-pulse">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
                          <span className="font-medium">
                            {isNl
                              ? "Microfoon actief - Spreek nu om uw probleem te beschrijven..."
                              : "Microphone actif - Parlez maintenant pour décrire votre fuite ou problème..."}
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={toggleListening}
                          className="text-xs text-red-300 font-bold underline hover:text-white ml-2 flex-shrink-0"
                        >
                          {isNl ? "Stop" : "Arrêter"}
                        </button>
                      </div>
                    )}

                    {speechError && (
                      <div className="mb-2.5 p-2.5 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-xs flex items-center gap-2">
                        <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>{speechError}</span>
                      </div>
                    )}

                    <textarea
                      id="contact-message-textarea"
                      {...register("message")}
                      rows={3}
                      className={`w-full px-4 py-3 rounded-xl bg-black/20 border ${errors.message ? "border-red-500/50" : "border-white/10"} text-white text-xs placeholder-slate-500 focus:outline-none focus:border-blue-500/50 transition-colors resize-none`}
                      placeholder={
                        isNl
                          ? "Beschrijf uw probleem of spreek in via de dictafoon-knop..."
                          : "Décrivez votre problème ou dictez-le avec le bouton vocal..."
                      }
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-400 font-bold">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {status === "error" && (
                    <div className="p-3 bg-red-500/10 text-red-400 text-xs font-bold rounded-xl border border-red-500/20">
                      {errorMessage}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-lg shadow-red-600/20 flex justify-center items-center gap-2 uppercase tracking-widest text-xs disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" /> {isNl ? "Verzenden..." : "Envoi en cours..."}
                      </>
                    ) : (
                      <>
                        {isNl ? "Aanvraag Verzenden" : "Envoyer la demande"}{" "}
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

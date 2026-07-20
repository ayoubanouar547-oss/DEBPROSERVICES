"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Send, CheckCircle, Loader2, MapPin } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import dynamic from "next/dynamic";

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
  latitude: z.number().optional(),
  longitude: z.number().optional(),
  honeypot: z.string().max(0, "Invalid field"), // Anti-spam
});

type FormData = z.infer<ReturnType<typeof createSchema>>;

export function ContactForm() {
  const pathname = usePathname();
  const isNl = pathname ? pathname.startsWith("/nl") : false;

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [showMap, setShowMap] = useState(false);

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
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("cost-estimation-applied", handleCostEstimationApplied);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("cost-estimation-applied", handleCostEstimationApplied);
      }
    };
  }, [setValue]);

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
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
          latitude: data.latitude,
          longitude: data.longitude,
        };
        localStorage.setItem(
          "deb_leads",
          JSON.stringify([newLead, ...existingLeads]),
        );
      }

      setStatus("success");
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

  return (
    <section className="py-24 relative z-10" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-blue-400 font-bold tracking-widest uppercase mb-2 text-sm">
              {isNl ? "Snelle Offerte" : "Devis Rapide"}
            </h2>
            <h3 className="text-3xl md:text-5xl font-black text-white mb-4">
              {isNl ? "Vraag een interventie of gratis offerte aan" : "Demandez une intervention ou un devis gratuit"}
            </h3>
            <p className="text-slate-400 mb-8 text-lg">
              {isNl ? (
                "Vul het onderstaande formulier in met zoveel mogelijk details. Ons team neemt zo snel mogelijk contact met u op voor een diagnose of een nauwkeurige offerte."
              ) : (
                "Remplissez le formulaire ci-dessous avec le maximum de détails. Notre équipe vous recontactera très rapidement avec un diagnostic ou un devis précis."
              )}
            </p>

            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10">
                <h4 className="font-bold text-white uppercase tracking-wider text-sm mb-2">
                  {isNl ? "Onze Garantie" : "Notre Garantie"}
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {isNl ? (
                    "Uw gegevens zijn veilig en we zullen ze nooit met derden delen. Offertes die via dit formulier worden verzonden, zijn 100% gratis en volledig vrijblijvend."
                  ) : (
                    "Vos données sont sécurisées et nous ne les communiquerons jamais à des tiers. Les devis envoyés via ce formulaire sont 100% gratuits et sans aucun engagement."
                  )}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-10 shadow-2xl border border-white/10">
            {status === "success" ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center text-green-400 mb-4 border border-green-500/30">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-black text-white">
                  {isNl ? "Bericht Verzonden!" : "Message Envoyé !"}
                </h4>
                <p className="text-slate-400">
                  {isNl ? (
                    "We hebben uw aanvraag goed ontvangen en nemen zo snel mogelijk contact met u op."
                  ) : (
                    "Nous avons bien reçu votre demande et vous recontacterons dans les plus brefs délais."
                  )}
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-4 text-blue-400 font-bold uppercase tracking-wider text-sm hover:text-white transition-colors"
                >
                  {isNl ? "Stuur nog een bericht" : "Envoyer un autre message"}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Honeypot hidden field */}
                <input
                  type="text"
                  {...register("honeypot")}
                  className="hidden"
                  aria-hidden="true"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-2 uppercase tracking-wider">
                      {isNl ? "Volledige Naam *" : "Nom Complet *"}
                    </label>
                    <input
                      type="text"
                      {...register("nom")}
                      className={`w-full px-4 py-3 rounded-xl bg-black/20 border ${errors.nom ? "border-red-500/50" : "border-white/10"} text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 transition-colors`}
                      placeholder={isNl ? "Jan Dupont" : "Jean Dupont"}
                    />
                    {errors.nom && (
                      <p className="mt-2 text-xs text-red-400 font-bold">
                        {errors.nom.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-2 uppercase tracking-wider">
                      {isNl ? "Telefoon *" : "Téléphone *"}
                    </label>
                    <input
                      type="tel"
                      {...register("telephone")}
                      className={`w-full px-4 py-3 rounded-xl bg-black/20 border ${errors.telephone ? "border-red-500/50" : "border-white/10"} text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 transition-colors`}
                      placeholder="0496 32 57 33"
                    />
                    {errors.telephone && (
                      <p className="mt-2 text-xs text-red-400 font-bold">
                        {errors.telephone.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="service-select" className="block text-xs font-bold text-slate-300 mb-2 uppercase tracking-wider">
                      {isNl ? "Gevraagde Dienst *" : "Service Demandé *"}
                    </label>
                    <select
                      id="service-select"
                      {...register("service")}
                      className={`w-full px-4 py-3 rounded-xl bg-slate-900 border ${errors.service ? "border-red-500/50" : "border-white/10"} text-white focus:outline-none focus:border-blue-500/50 transition-colors appearance-none`}
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
                      <p className="mt-2 text-xs text-red-400 font-bold">
                        {errors.service.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-2 uppercase tracking-wider">
                      {isNl ? "Stad / Postcode *" : "Ville / Code Postal *"}
                    </label>
                    <input
                      type="text"
                      {...register("ville")}
                      className={`w-full px-4 py-3 rounded-xl bg-black/20 border ${errors.ville ? "border-red-500/50" : "border-white/10"} text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 transition-colors`}
                      placeholder={isNl ? "1000 Brussel" : "1000 Bruxelles"}
                    />
                    {errors.ville && (
                      <p className="mt-2 text-xs text-red-400 font-bold">
                        {errors.ville.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-2 uppercase tracking-wider">
                    {isNl ? "E-mail " : "Email "}
                    <span className="font-normal text-slate-500 lowercase">
                      {isNl ? "(Optioneel)" : "(Optionnel)"}
                    </span>
                  </label>
                  <input
                    type="email"
                    {...register("email")}
                    className={`w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 transition-colors`}
                    placeholder="adresse@email.com"
                  />
                </div>

                <div className="space-y-4">
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
                      className="text-[10px] font-black text-blue-400 uppercase tracking-widest flex items-center gap-2 hover:text-white transition-colors"
                    >
                      <MapPin className="w-3 h-3" />
                      {showMap ? (isNl ? "Verberg de kaart" : "Masquer la carte") : (isNl ? "Gebruik de kaart" : "Utiliser la carte")}
                    </button>
                  </div>

                  {showMap && (
                    <div className="space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
                      <MapSelector
                        onCoordsChange={(l, g) => {
                          setValue("latitude", l);
                          setValue("longitude", g);
                        }}
                        initialLat={lat}
                        initialLng={lng}
                      />
                      <div className="grid grid-cols-2 gap-4">
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[10px] font-black text-slate-500 uppercase">
                            Lat
                          </span>
                          <input
                            type="number"
                            step="any"
                            {...register("latitude", { valueAsNumber: true })}
                            className="w-full pl-12 pr-4 py-2 rounded-lg bg-black/20 border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-blue-500/50"
                          />
                        </div>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[10px] font-black text-slate-500 uppercase">
                            Lng
                          </span>
                          <input
                            type="number"
                            step="any"
                            {...register("longitude", { valueAsNumber: true })}
                            className="w-full pl-12 pr-4 py-2 rounded-lg bg-black/20 border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-blue-500/50"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-2 uppercase tracking-wider">
                    {isNl ? "Details van de interventie *" : "Détails de l'intervention *"}
                  </label>
                  <textarea
                    {...register("message")}
                    rows={4}
                    className={`w-full px-4 py-3 rounded-xl bg-black/20 border ${errors.message ? "border-red-500/50" : "border-white/10"} text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 transition-colors resize-none`}
                    placeholder={isNl ? "Beschrijf uw probleem zodat we de juiste apparatuur kunnen voorbereiden..." : "Décrivez votre problème afin qu'on prépare le matériel adéquat..."}
                  />
                  {errors.message && (
                    <p className="mt-2 text-xs text-red-400 font-bold">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {status === "error" && (
                  <div className="p-4 bg-red-500/10 text-red-400 text-sm font-bold rounded-xl border border-red-500/20">
                    {errorMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg shadow-red-600/20 flex justify-center items-center gap-2 uppercase tracking-widest disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" /> {isNl ? "Bezig met verzenden..." : "Envoi en cours..."}
                    </>
                  ) : (
                    <>
                      {isNl ? "Aanvraag Verzenden" : "Envoyer la demande"}{" "}
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

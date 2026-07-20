"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { 
  Wrench, Flame, Droplets, Zap, Wind, Truck, Home, Sun, Camera, Sparkles, Trees,
  Clock, ArrowRight, Coins, CheckCircle2, Calculator, ShieldCheck, Info
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Definitions of services matching ContactForm options
interface SubService {
  id: string;
  title: string;
  minPrice: number;
  maxPrice: number;
  desc: string;
}

interface ServiceCategory {
  id: string;
  slug: "plomberie" | "chauffage" | "gaz" | "electricite" | "climatisation" | "fosse" | "construction" | "debouchage" | "toiture" | "panneaux-solaires" | "renovation" | "camera-surveillance" | "vitres" | "jardinage";
  title: string;
  icon: any;
  subServices: SubService[];
}

const ESTIMATOR_SERVICES: ServiceCategory[] = [
  {
    id: "plomberie",
    slug: "plomberie",
    title: "Plomberie",
    icon: Wrench,
    subServices: [
      { id: "fuite", title: "Réparation & Recherche de Fuite d'Eau", minPrice: 90, maxPrice: 180, desc: "Détection acoustique ou thermique et colmatage rapide." },
      { id: "sanitaire", title: "Robinetterie, WC & Sanitaires", minPrice: 85, maxPrice: 160, desc: "Pose ou remplacement de mitigeur, chasse d'eau, évier." },
      { id: "boiler", title: "Chauffe-eau & Boiler (Dépannage/Remplacement)", minPrice: 120, maxPrice: 350, desc: "Remise en route, détartrage ou dépannage de la résistance." }
    ]
  },
  {
    id: "debouchage",
    slug: "debouchage",
    title: "Débouchage",
    icon: Droplets,
    subServices: [
      { id: "wc", title: "Débouchage WC, Toilette & Évier", minPrice: 90, maxPrice: 150, desc: "Dégagement au furet professionnel ou pompe à haute pression." },
      { id: "egout", title: "Débouchage Égout & Canalisations", minPrice: 150, maxPrice: 280, desc: "Curage hydrodynamique haute pression (camion pompe)." },
      { id: "camera", title: "Inspection par Caméra Endoscopique HD", minPrice: 120, maxPrice: 220, desc: "Diagnostic visuel intérieur de l'état des tuyauteries." }
    ]
  },
  {
    id: "chauffage",
    slug: "chauffage",
    title: "Chauffage",
    icon: Flame,
    subServices: [
      { id: "entretien_gaz", title: "Entretien Annuel Chaudière Gaz (Légal)", minPrice: 110, maxPrice: 150, desc: "Nettoyage, réglages et délivrance de l'attestation officielle." },
      { id: "entretien_mazout", title: "Entretien Annuel Chaudière Mazout", minPrice: 180, maxPrice: 250, desc: "Ramonage, nettoyage du brûleur et certificat de conformité." },
      { id: "depannage_chaudiere", title: "Dépannage Chaudière Urgent", minPrice: 95, maxPrice: 190, desc: "Diagnostic rapide et remise en route (hors pièces de rechange)." }
    ]
  },
  {
    id: "electricite",
    slug: "electricite",
    title: "Électricité",
    icon: Zap,
    subServices: [
      { id: "panne_elec", title: "Dépannage Panne / Court-Circuit", minPrice: 90, maxPrice: 180, desc: "Recherche de défaut d'isolement, disjoncteur défectueux." },
      { id: "mise_en_conformite", title: "Mise en Conformité AREI", minPrice: 400, maxPrice: 1200, desc: "Mise aux normes du tableau et du réseau avant inspection." },
      { id: "tableau", title: "Remplacement de Tableau Électrique", minPrice: 800, maxPrice: 1800, desc: "Pose d'un coffret neuf avec disjoncteurs différentiels." }
    ]
  },
  {
    id: "fosse",
    slug: "fosse",
    title: "Vidange Fosse",
    icon: Truck,
    subServices: [
      { id: "fosse_standard", title: "Vidange Fosse Septique Standard", minPrice: 160, maxPrice: 280, desc: "Pompage des boues par camion citerne agréé." },
      { id: "bac_graisse", title: "Pompage & Nettoyage Bac à Graisse", minPrice: 180, maxPrice: 290, desc: "Curage et pompage des matières grasses (restaurants & particuliers)." }
    ]
  },
  {
    id: "climatisation",
    slug: "climatisation",
    title: "Climatisation",
    icon: Wind,
    subServices: [
      { id: "clim_entretien", title: "Entretien Annuel Climatiseur (F-Gas)", minPrice: 120, maxPrice: 180, desc: "Désinfection, nettoyage des filtres et vérification de pression." },
      { id: "clim_recharge", title: "Recharge de Fluide Frigorigène (Gaz)", minPrice: 150, maxPrice: 260, desc: "Recherche de micro-fuite et recharge F-Gas réglementée." }
    ]
  },
  {
    id: "toiture",
    slug: "toiture",
    title: "Toiture",
    icon: Home,
    subServices: [
      { id: "toit_fuite", title: "Réparation d'urgence Infiltration/Toit", minPrice: 180, maxPrice: 450, desc: "Remplacement de tuiles/ardoises, réparation étanchéité de solin." },
      { id: "toit_demoussage", title: "Nettoyage & Démoussage Complet", minPrice: 250, maxPrice: 650, desc: "Élimination des lichens et application d'un traitement hydrofuge." }
    ]
  },
  {
    id: "jardinage",
    slug: "jardinage",
    title: "Jardin & Élagage",
    icon: Trees,
    subServices: [
      { id: "jardin_tonte", title: "Tonte Pelouse & Taille de Haies", minPrice: 80, maxPrice: 220, desc: "Entretien régulier ou remise en état de votre extérieur." },
      { id: "elagage_abattage", title: "Élagage & Abattage d'Arbre", minPrice: 250, maxPrice: 950, desc: "Sécurisation, taille de branches ou abattage d'arbre délicat." }
    ]
  }
];

const ESTIMATOR_SERVICES_NL: ServiceCategory[] = [
  {
    id: "plomberie",
    slug: "plomberie",
    title: "Loodgieterij",
    icon: Wrench,
    subServices: [
      { id: "fuite", title: "Reparatie & Opsporen van Waterlekken", minPrice: 90, maxPrice: 180, desc: "Akoestische of thermische detectie en snelle dichting." },
      { id: "sanitaire", title: "Kranen, WC & Sanitair", minPrice: 85, maxPrice: 160, desc: "Plaatsen of vervangen van mengkranen, vlotters, wastafels." },
      { id: "boiler", title: "Boiler & Warmwaterketel (Herstelling/Vervanging)", minPrice: 120, maxPrice: 350, desc: "Opstarten, ontkalken of herstellen van het verwarmingselement." }
    ]
  },
  {
    id: "debouchage",
    slug: "debouchage",
    title: "Ontstopping",
    icon: Droplets,
    subServices: [
      { id: "wc", title: "Ontstopping WC, Toilet & Gootsteen", minPrice: 90, maxPrice: 150, desc: "Ontstoppen met professionele veer of hogedrukpomp." },
      { id: "egout", title: "Ontstopping Riolering & Afvoeren", minPrice: 150, maxPrice: 280, desc: "Hydrodynamische reiniging onder hoge druk (ruimwagen)." },
      { id: "camera", title: "Camera-inspectie HD", minPrice: 120, maxPrice: 220, desc: "Visuele binnendiagnose van de staat van de leidingen." }
    ]
  },
  {
    id: "chauffage",
    slug: "chauffage",
    title: "Verwarming",
    icon: Flame,
    subServices: [
      { id: "entretien_gaz", title: "Jaarlijks Onderhoud Gasboiler (Wettelijk)", minPrice: 110, maxPrice: 150, desc: "Reiniging, afstelling en afgifte van het officieel attest." },
      { id: "entretien_mazout", title: "Jaarlijks Onderhoud Stookolieketel", minPrice: 180, maxPrice: 250, desc: "Schoorsteenvegen, reinigen van de brander en conformiteitscertificaat." },
      { id: "depannage_chaudiere", title: "Dringende Herstelling Verwarming", minPrice: 95, maxPrice: 190, desc: "Snelle diagnose en heropstart (exclusief wisselstukken)." }
    ]
  },
  {
    id: "electricite",
    slug: "electricite",
    title: "Elektriciteit",
    icon: Zap,
    subServices: [
      { id: "panne_elec", title: "Storing herstellen / Kortsluiting", minPrice: 90, maxPrice: 180, desc: "Opsporen van isolatiefouten, defecte zekering of stroomonderbreker." },
      { id: "mise_en_conformite", title: "AREI Gelijkvormigheidskeuring", minPrice: 400, maxPrice: 1200, desc: "Up-to-date brengen van elektriciteitskast en netwerk voor inspectie." },
      { id: "tableau", title: "Vervangen van de Elektriciteitskast", minPrice: 800, maxPrice: 1800, desc: "Plaatsen van een nieuwe verdeelkast met differentieelschakelaars." }
    ]
  },
  {
    id: "fosse",
    slug: "fosse",
    title: "Septische Put",
    icon: Truck,
    subServices: [
      { id: "fosse_standard", title: "Septische Put Ledigen Standaard", minPrice: 160, maxPrice: 280, desc: "Leegpompen van slib met een goedgekeurde tankwagen." },
      { id: "bac_graisse", title: "Vetput Leegpompen & Reinigen", minPrice: 180, maxPrice: 290, desc: "Reinigen en leegpompen van vetstoffen (restaurants & particulieren)." }
    ]
  },
  {
    id: "climatisation",
    slug: "climatisation",
    title: "Klimatisatie",
    icon: Wind,
    subServices: [
      { id: "clim_entretien", title: "Jaarlijks Onderhoud Airco (F-Gas)", minPrice: 120, maxPrice: 180, desc: "Desinfectie, reiniging van filters en drukcontrole." },
      { id: "clim_recharge", title: "Koelmiddel Bijvullen (Gas)", minPrice: 150, maxPrice: 260, desc: "Opsporen van micro-lekken en gereguleerd F-Gas bijvullen." }
    ]
  },
  {
    id: "toiture",
    slug: "toiture",
    title: "Dakwerken",
    icon: Home,
    subServices: [
      { id: "toit_fuite", title: "Dringende Reparatie Daklek", minPrice: 180, maxPrice: 450, desc: "Vervangen van pannen/leien, herstellen van loodslabbe-afdichting." },
      { id: "toit_demoussage", title: "Volledige Reiniging & Ontmossing", minPrice: 250, maxPrice: 650, desc: "Verwijderen van korstmossen en aanbrengen van hydrofobe behandeling." }
    ]
  },
  {
    id: "jardinage",
    slug: "jardinage",
    title: "Tuin & Snoei",
    icon: Trees,
    subServices: [
      { id: "jardin_tonte", title: "Gras Maaien & Hegen Knippen", minPrice: 80, maxPrice: 220, desc: "Regelmatig onderhoud of herinrichting van uw buitenruimte." },
      { id: "elagage_abattage", title: "Boomverzorging & Vellen", minPrice: 250, maxPrice: 950, desc: "Schoonmaken, snoeien van takken of vellen van delicate bomen." }
    ]
  }
];

interface UrgencyLevel {
  id: string;
  title: string;
  multiplier: number;
  extraFee: number;
  icon: any;
  color: string;
  desc: string;
}

const URGENCY_LEVELS: UrgencyLevel[] = [
  {
    id: "normal",
    title: "Planifié (sous 24h à 48h)",
    multiplier: 1.0,
    extraFee: 0,
    icon: Clock,
    color: "border-slate-500/30 text-slate-400 bg-slate-500/10",
    desc: "Intervention sur rendez-vous programmé en semaine."
  },
  {
    id: "urgent",
    title: "Urgent (Moins de 30 min)",
    multiplier: 1.15,
    extraFee: 40,
    icon: Sparkles,
    color: "border-amber-500/40 text-amber-400 bg-amber-500/10",
    desc: "En journée. Mobilisation immédiate du technicien le plus proche."
  },
  {
    id: "nuit_weekend",
    title: "Nuit, Week-end & Férié (24h/7)",
    multiplier: 1.30,
    extraFee: 75,
    icon: Clock,
    color: "border-red-500/40 text-red-400 bg-red-500/10",
    desc: "Intervention en dehors des heures de bureau (soir, week-end)."
  }
];

const URGENCY_LEVELS_NL: UrgencyLevel[] = [
  {
    id: "normal",
    title: "Gepland (binnen 24u tot 48u)",
    multiplier: 1.0,
    extraFee: 0,
    icon: Clock,
    color: "border-slate-500/30 text-slate-400 bg-slate-500/10",
    desc: "Intervention op afspraak gepland tijdens de week."
  },
  {
    id: "urgent",
    title: "Dringend (Minder dan 30 min)",
    multiplier: 1.15,
    extraFee: 40,
    icon: Sparkles,
    color: "border-amber-500/40 text-amber-400 bg-amber-500/10",
    desc: "Overdag. Onmiddellijke mobilisatie van de dichtstbijzijnde technicus."
  },
  {
    id: "nuit_weekend",
    title: "Nacht, Weekend & Feestdagen (24u/7)",
    multiplier: 1.30,
    extraFee: 75,
    icon: Clock,
    color: "border-red-500/40 text-red-400 bg-red-500/10",
    desc: "Interventie buiten kantooruren (avond, weekend, nacht)."
  }
];

export function CostEstimator() {
  const pathname = usePathname();
  const isNl = pathname ? pathname.startsWith("/nl") : false;

  const servicesList = isNl ? ESTIMATOR_SERVICES_NL : ESTIMATOR_SERVICES;
  const urgenciesList = isNl ? URGENCY_LEVELS_NL : URGENCY_LEVELS;

  const [selectedCategoryId, setSelectedCategoryId] = useState("plomberie");
  const [selectedSubServiceId, setSelectedSubServiceId] = useState("fuite");
  const [selectedUrgencyId, setSelectedUrgencyId] = useState("normal");
  const [estimatedRange, setEstimatedRange] = useState({ min: 0, max: 0 });
  const [isCopied, setIsCopied] = useState(false);

  const selectedCategory = servicesList.find((s) => s.id === selectedCategoryId) || servicesList[0];
  const selectedSubService = selectedCategory.subServices.find((s) => s.id === selectedSubServiceId) || selectedCategory.subServices[0];
  const selectedUrgency = urgenciesList.find((u) => u.id === selectedUrgencyId) || urgenciesList[0];

  // Auto-update sub-service when category changes
  const handleCategoryChange = (cat: ServiceCategory) => {
    setSelectedCategoryId(cat.id);
    setSelectedSubServiceId(cat.subServices[0].id);
  };

  // Live recalculate estimated price range
  useEffect(() => {
    if (selectedSubService && selectedUrgency) {
      const min = Math.round(selectedSubService.minPrice * selectedUrgency.multiplier + selectedUrgency.extraFee);
      const max = Math.round(selectedSubService.maxPrice * selectedUrgency.multiplier + selectedUrgency.extraFee);
      setEstimatedRange({ min, max });
    }
  }, [selectedSubService, selectedUrgency]);

  // Dispatch details to contact form and scroll down
  const handleApplyToForm = () => {
    if (typeof window !== "undefined") {
      const messageText = isNl
        ? `Beste, ik wil graag een definitieve offerte ontvangen voor een interventie van ${selectedCategory.title}: "${selectedSubService.title}".\n\nUrgentieniveau: ${selectedUrgency.title}.\nIndicatieve berekende schatting: van ${estimatedRange.min} € tot ${estimatedRange.max} €.\n\nGelieve contact met mij op te nemen om een afspraak in te plannen of dit voorstel te verfijnen.`
        : `Bonjour, je souhaite obtenir un devis définitif pour une intervention de ${selectedCategory.title} : "${selectedSubService.title}".\n\nNiveau d'urgence : ${selectedUrgency.title}.\nEstimation indicative calculée : de ${estimatedRange.min} € à ${estimatedRange.max} €.\n\nMerci de me recontacter pour fixer un rendez-vous ou affiner cette proposition.`;
      
      const event = new CustomEvent("cost-estimation-applied", {
        detail: {
          service: selectedCategory.slug,
          message: messageText
        }
      });
      
      window.dispatchEvent(event);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 3000);

      // Smooth scroll to contact form container
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const ServiceIcon = selectedCategory.icon;
  const UrgencyIcon = selectedUrgency.icon;

  const includedList = isNl ? [
    "Verplaatsing van de erkende technicus naar uw adres",
    "Volledige diagnose van het probleem",
    "Tienjarige aansprakelijkheidsverzekering / Beroeps-BA",
    "Eén jaar schriftelijke garantie op de prestatie",
    "Volledige transparantie en voorafgaande schriftelijke offerte"
  ] : [
    "Déplacement du technicien agréé chez vous",
    "Diagnostic complet de l'anomalie",
    "Assurance décennale / RC professionnelle",
    "Garantie écrite d'un an sur la prestation",
    "Transparence totale et devis écrit préalable"
  ];

  return (
    <div id="estimateur-tarif" className="max-w-6xl mx-auto px-4 sm:px-6 mb-20 relative z-20">
      <div className="bg-slate-900/60 backdrop-blur-2xl rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
        
        {/* Header */}
        <div className="p-8 border-b border-white/10 bg-gradient-to-r from-blue-900/10 via-slate-900 to-indigo-900/10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-500/10 rounded-2xl border border-blue-500/20 text-blue-400">
                <Calculator className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-2xl font-black text-white">
                  {isNl ? "Interactieve Tariefcalculator" : "Estimateur Tarifaire Interactif"}
                </h2>
                <p className="text-slate-400 text-sm mt-1">
                  {isNl 
                    ? "Schat in enkele seconden de indicatieve prijs voor uw interventie overal in België." 
                    : "Évaluez en quelques secondes le budget indicatif pour votre intervention partout en Belgique."}
                </p>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl flex items-center gap-2 text-xs font-semibold text-slate-300">
              <ShieldCheck className="w-4 h-4 text-green-400" /> {isNl ? "100% Transparante & Gecertificeerde Tarieven" : "Tarifs 100% Transparents & Agrées"}
            </div>
          </div>
        </div>

        {/* Content body Grid */}
        <div className="grid lg:grid-cols-12">
          
          {/* Column 1: Configurator (7 cols) */}
          <div className="lg:col-span-7 p-8 space-y-8 border-b lg:border-b-0 lg:border-r border-white/10">
            
            {/* Step 1: Category */}
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-3 uppercase tracking-wider flex items-center gap-2">
                <span className="w-5 h-5 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 text-[10px]">1</span>
                {isNl ? "Selecteer het vakgebied" : "Sélectionnez le métier"}
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {servicesList.map((cat) => {
                  const CatIcon = cat.icon;
                  const isSelected = selectedCategory.id === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => handleCategoryChange(cat)}
                      className={`flex flex-col items-center justify-center p-3 rounded-2xl border text-center transition-all ${
                        isSelected 
                          ? "border-blue-500/60 bg-blue-500/10 text-white shadow-lg shadow-blue-500/5" 
                          : "border-white/5 bg-white/5 text-slate-400 hover:border-white/10 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      <CatIcon className={`w-5 h-5 mb-2 ${isSelected ? "text-blue-400" : "text-slate-400"}`} />
                      <span className="text-xs font-bold tracking-tight">{cat.title}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Sub-services inside category */}
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-3 uppercase tracking-wider flex items-center gap-2">
                <span className="w-5 h-5 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 text-[10px]">2</span>
                {isNl ? "Type specifieke dienst" : "Type de prestation spécifique"}
              </label>
              <div className="space-y-2.5">
                {selectedCategory.subServices.map((sub) => {
                  const isSelected = selectedSubService.id === sub.id;
                  return (
                    <button
                      key={sub.id}
                      onClick={() => setSelectedSubServiceId(sub.id)}
                      className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-3.5 ${
                        isSelected
                          ? "border-blue-500/60 bg-blue-500/5 text-white"
                          : "border-white/5 bg-white/5 text-slate-400 hover:border-white/10 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      <div className={`mt-0.5 w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${
                        isSelected ? "border-blue-400 bg-blue-400" : "border-slate-600"
                      }`}>
                        {isSelected && <div className="w-1.5 h-1.5 bg-slate-900 rounded-full" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-bold text-slate-200">{sub.title}</h4>
                        <p className="text-xs text-slate-400 mt-1 leading-relaxed">{sub.desc}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Urgency Level */}
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-3 uppercase tracking-wider flex items-center gap-2">
                <span className="w-5 h-5 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 text-[10px]">3</span>
                {isNl ? "Urgentieniveau" : "Niveau d'Urgence"}
              </label>
              <div className="grid sm:grid-cols-3 gap-3">
                {urgenciesList.map((urg) => {
                  const isSelected = selectedUrgency.id === urg.id;
                  const UrgIcon = urg.icon;
                  return (
                    <button
                      key={urg.id}
                      onClick={() => setSelectedUrgencyId(urg.id)}
                      className={`p-3.5 rounded-xl border text-left transition-all ${
                        isSelected
                          ? "border-blue-500/60 bg-blue-500/10 text-white"
                          : "border-white/5 bg-white/5 text-slate-400 hover:border-white/10 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <UrgIcon className={`w-4.5 h-4.5 ${isSelected ? "text-blue-400" : "text-slate-400"}`} />
                        <span className="text-xs font-bold">{urg.title.split(" (")[0]}</span>
                      </div>
                      <p className="text-[11px] leading-relaxed text-slate-400">{urg.desc}</p>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Column 2: Live results visual output (5 cols) */}
          <div className="lg:col-span-5 p-8 flex flex-col justify-between bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950">
            
            {/* Visual Box */}
            <div className="space-y-6">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                <Coins className="w-4 h-4 text-amber-400" /> {isNl ? "Budgetschatting" : "Estimation budgétaire"}
              </div>

              {/* Price Display */}
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center relative overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-blue-500 via-indigo-500 to-red-500 animate-pulse" />
                
                <span className="text-xs text-slate-400 block mb-1">{isNl ? "Geschatte prijsvork" : "Fourchette tarifaire estimée"}</span>
                
                <div className="flex items-center justify-center gap-3 my-3">
                  <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">{estimatedRange.min}€</span>
                  <span className="text-slate-500 font-medium text-lg">—</span>
                  <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">{estimatedRange.max}€</span>
                </div>

                <div className="text-[11px] text-slate-400 flex items-center justify-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5 inline-flex mt-2">
                  <Info className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" /> {isNl ? "6% btw (woning > 10 jaar) of 21% btw van toepassing." : "TVA de 6% (habitation > 10 ans) ou 21% applicable."}
                </div>
              </div>

              {/* Included list */}
              <div className="space-y-3">
                <h4 className="text-xs font-extrabold text-slate-300 uppercase tracking-wider">{isNl ? "Wat is inbegrepen in het tarief:" : "Ce qui est inclus dans le tarif :"}</h4>
                <div className="space-y-2">
                  {includedList.map((text, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                      <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Informative Disclaimer */}
              <div className="p-4 rounded-xl bg-blue-500/5 border border-blue-500/10 text-[11px] leading-relaxed text-slate-400 flex gap-2.5">
                <Info className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <p>
                  {isNl 
                    ? "Deze schatting wordt louter ter informatie verstrekt volgens de standaardbarema's van het beroep in België. De definitieve offerte die ter plaatse door de vakman wordt overhandigd, is bindend."
                    : "Cette estimation est fournie à titre indicatif selon les barèmes standards de la profession en Belgique. Le devis définitif remis sur place par l'artisan fait foi."}
                </p>
              </div>
            </div>

            {/* CTA action to prefill the contact form */}
            <div className="mt-8">
              <button
                onClick={handleApplyToForm}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2 group text-sm uppercase tracking-wider"
              >
                {isCopied ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 animate-bounce" /> {isNl ? "Formulier Vooraf Ingevuld!" : "Formulaire Pré-rempli !"}
                  </>
                ) : (
                  <>
                    {isNl ? "Toepassen & Offerte Invullen" : "Appliquer & Remplir le Devis"} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
              <p className="text-[11px] text-slate-500 text-center mt-2">
                {isNl 
                  ? "Configureert automatisch de velden en scrolt naar het formulier." 
                  : "Configure automatiquement les champs et fait défiler jusqu'au formulaire."}
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

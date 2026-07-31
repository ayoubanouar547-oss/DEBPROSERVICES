"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquare,
  X,
  Send,
  Bot,
  User,
  Phone,
  Calendar,
  Sparkles,
  CheckCircle2,
  Clock,
  ShieldCheck,
  ChevronRight,
  Loader2,
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  Download,
} from "lucide-react";
import { generatePdfDocument } from "@/lib/generatePdf";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  appointment?: {
    nom: string;
    telephone: string;
    service: string;
    ville: string;
    date: string;
    email?: string;
    "Mot de passe"?: string;
    [key: string]: any;
  };
  formType?: "appointment" | "quote";
  timestamp: string;
}

const QUICK_QUESTIONS: { label: string; text: string }[] = [];

const SOFIA_AVATAR_URL = "https://deb-pro-service.odoo.com/web/image/615-d11d282d/Woman_assistant_looking_ahead_202607222344.jpeg";
const SOFIA_AVATAR_REMOTE_FALLBACK = "https://deb-pro-service.odoo.com/web/image/615-d11d282d/Woman_assistant_looking_ahead_202607222344.jpeg";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();
  const isNl = pathname ? pathname.startsWith("/nl") : false;

  // Show notification pop-up above Sofia when client enters the site
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setShowTooltip(false);
    }
  }, [isOpen]);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome-1",
      role: "assistant",
      content:
        pathname && pathname.startsWith("/nl")
          ? "Hallo! Ik ben Sofia, de assistente van PRO SERVICES. Waarmee kan ik u vandaag helpen?"
          : "Salut ! Je suis Sofia l'assistant de pro services, Comment puis-je vous aider aujourd'hui",
      timestamp: new Date().toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" }),
    },
  ]);

  useEffect(() => {
    if (messages.length === 1 && messages[0].id === "welcome-1") {
      setMessages([
        {
          id: "welcome-1",
          role: "assistant",
          content: isNl
            ? "Hallo! Ik ben Sofia, de assistente van PRO SERVICES. Waarmee kan ik u vandaag helpen?"
            : "Salut ! Je suis Sofia l'assistant de pro services, Comment puis-je vous aider aujourd'hui",
          timestamp: new Date().toLocaleTimeString(isNl ? "nl-NL" : "fr-FR", { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isNl]);

  const [rollingSummary, setRollingSummary] = useState<string>("");

  // Voice & Audio State
  const [isListening, setIsListening] = useState(false);
  const [autoSpeak, setAutoSpeak] = useState(false);
  const [speakingMsgId, setSpeakingMsgId] = useState<string | null>(null);
  const recognitionRef = useRef<any>(null);

  // Speech Recognition (Voice Input / Speech to Text)
  const toggleListening = () => {
    if (typeof window === "undefined") return;
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("La reconnaissance vocale n'est pas disponible sur votre navigateur. Veuillez utiliser Chrome, Edge ou Safari.");
      return;
    }

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

    try {
      const recognition = new SpeechRecognition();
      recognition.lang = isNl ? "nl-BE" : "fr-BE";
      recognition.continuous = false;
      recognition.interimResults = true;

      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onresult = (event: any) => {
        let transcript = "";
        for (let i = event.resultIndex; i < event.results.length; i++) {
          transcript += event.results[i][0].transcript;
        }
        if (transcript.trim()) {
          setInput(transcript);
        }
      };

      recognition.onerror = (event: any) => {
        console.warn("Speech recognition error:", event.error);
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = recognition;
      recognition.start();
    } catch (err) {
      console.error("Failed to start speech recognition:", err);
      setIsListening(false);
    }
  };

  // Text to Speech (Audio Voice Output)
  const speakMessage = (text: string, msgId: string) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;

    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
      if (speakingMsgId === msgId) {
        setSpeakingMsgId(null);
        return;
      }
    }

    if (!text || !text.trim()) return;

    const cleanText = text.replace(/[*#_`~]/g, "").trim();
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = isNl ? "nl-NL" : "fr-FR";
    utterance.rate = 1.0;

    utterance.onend = () => setSpeakingMsgId(null);
    utterance.onerror = () => setSpeakingMsgId(null);

    setSpeakingMsgId(msgId);
    window.speechSynthesis.speak(utterance);
  };

  // Quick Inline Booking Form State
  const [showDirectForm, setShowDirectForm] = useState(false);
  const [bookingForm, setBookingForm] = useState({
    nom: "",
    telephone: "",
    service: "Installation Caméras de Surveillance",
    ville: "",
    message: "",
  });
  const [isSubmittingForm, setIsSubmittingForm] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Helper to construct a rolling summary of interaction history
  const buildRollingSummary = (msgList: Message[], currentSummary: string) => {
    const userMsgs = msgList.filter((m) => m.role === "user").map((m) => m.content);
    if (userMsgs.length === 0) return "";
    
    // Take recent conversation turns and create a concise rolling memory trace
    const lastInteractionSnapshot = msgList
      .slice(-6)
      .map((m) => `${m.role === "user" ? "Client" : "Sofia"}: ${m.content.trim()}`)
      .join(" | ");

    return `Conversation en cours (${userMsgs.length} questions client). Résumé des derniers échanges: ${lastInteractionSnapshot}`;
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setShowTooltip(false);
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (textToSend?: string) => {
    const userText = textToSend || input;
    if (!userText.trim() || isLoading) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      role: "user",
      content: userText,
      timestamp: new Date().toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" }),
    };

    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    
    const updatedSummary = buildRollingSummary(newMessages, rollingSummary);
    setRollingSummary(updatedSummary);

    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: newMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
          rollingSummary: updatedSummary,
          locale: isNl ? "nl" : "fr",
        }),
      });

      if (!res.ok || !res.body) {
        throw new Error("Erreur serveur");
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      const assistantMessageId = `assistant-${Date.now()}`;
      const timestamp = new Date().toLocaleTimeString("fr-FR", {
        hour: "2-digit",
        minute: "2-digit",
      });

      // Add empty assistant placeholder message
      setMessages((prev) => [
        ...prev,
        {
          id: assistantMessageId,
          role: "assistant",
          content: "",
          timestamp,
        },
      ]);

      setIsLoading(false);

      let accumulatedText = "";
      let buffer = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() || "";

        for (const line of lines) {
          if (!line.trim()) continue;
          try {
            const parsed = JSON.parse(line.trim());
            if (parsed.type === "text" && parsed.content) {
              accumulatedText += parsed.content;
              setMessages((prev) =>
                prev.map((msg) =>
                  msg.id === assistantMessageId
                    ? { ...msg, content: accumulatedText }
                    : msg
                )
              );
              scrollToBottom();
            } else if (parsed.type === "meta") {
              setMessages((prev) =>
                prev.map((msg) =>
                  msg.id === assistantMessageId
                    ? {
                        ...msg,
                        formType: parsed.formType,
                        appointment: parsed.appointment,
                      }
                    : msg
                )
              );
            }
          } catch (e) {
            console.error("Error parsing stream line:", e);
          }
        }
      }

      if (autoSpeak && accumulatedText.trim()) {
        speakMessage(accumulatedText, assistantMessageId);
      }
    } catch (error) {
      console.error("Chat error:", error);
      setIsLoading(false);
      setMessages((prev) => [
        ...prev,
        {
          id: `err-${Date.now()}`,
          role: "assistant",
          content:
            "Désolé, le service de chat est momentanément indisponible. Vous pouvez cliquer sur 'Formulaire RDV' ci-dessus ou nous appeler 24/7 au 0465 99 60 76.",
          timestamp: new Date().toLocaleTimeString("fr-FR", {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
    }
  };

  const handleInlineSuccess = (payload: any) => {
    const confirmMsg: Message = {
      id: `booking-success-${Date.now()}`,
      role: "assistant",
      content: `✅ **Demande enregistrée avec succès !**\n\nMerci **${payload.nom}**, votre demande de **${payload.service}** pour **${payload.ville}** a bien été transmise à notre équipe.\n\nUn technicien vous recontactera très rapidement au **${payload.telephone}**.`,
      appointment: {
        nom: payload.nom,
        telephone: payload.telephone,
        service: payload.service,
        ville: payload.ville,
        date: payload.date || new Date().toLocaleString("fr-BE"),
      },
      timestamp: new Date().toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" }),
    };
    setMessages((prev) => [...prev, confirmMsg]);
  };

  const handleDirectBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingForm.nom || !bookingForm.telephone || !bookingForm.ville) return;

    setIsSubmittingForm(true);
    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingForm),
      });

      if (res.ok) {
        setBookingSuccess(true);
        const confirmMsg: Message = {
          id: `booking-success-${Date.now()}`,
          role: "assistant",
          content: `✅ **Rendez-vous confirmé !**\n\nMerci **${bookingForm.nom}**, votre demande pour **${bookingForm.service}** à **${bookingForm.ville}** a été enregistrée avec succès.\n\nUn technicien vous rappellera rapidement au **${bookingForm.telephone}**.`,
          appointment: {
            nom: bookingForm.nom,
            telephone: bookingForm.telephone,
            service: bookingForm.service,
            ville: bookingForm.ville,
            date: new Date().toLocaleString("fr-BE"),
          },
          timestamp: new Date().toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" }),
        };
        setMessages((prev) => [...prev, confirmMsg]);
        setTimeout(() => {
          setShowDirectForm(false);
          setBookingSuccess(false);
          setBookingForm({ nom: "", telephone: "", service: "Débouchage Canalisation", ville: "", message: "" });
        }, 1200);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmittingForm(false);
    }
  };

  return (
    <div className="fixed bottom-20 md:bottom-6 right-3 sm:right-6 z-[9999] flex flex-col items-end pointer-events-none">
      {/* Floating Tooltip Callout / Notification above Sofia */}
      <AnimatePresence>
        {!isOpen && showTooltip && (
          <>
            {/* Desktop Full Tooltip */}
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
              transition={{ duration: 0.3, type: "spring" }}
              onClick={() => {
                setIsOpen(true);
                setShowTooltip(false);
              }}
              className="pointer-events-auto cursor-pointer mb-2.5 bg-[#000d26]/95 backdrop-blur-md border border-cyan-400/70 text-white p-4 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] w-80 relative hidden sm:flex items-start gap-3 hover:border-cyan-300 transition-all group"
            >
              <div className="relative flex-shrink-0">
                <div className="w-12 h-12 rounded-full p-0.5 bg-gradient-to-tr from-cyan-500 to-blue-600 shadow-md relative overflow-hidden">
                  <Image
                    src={SOFIA_AVATAR_URL}
                    alt="Assistant Sofia"
                    fill
                    sizes="48px"
                    className="rounded-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-[#000d26] rounded-full animate-pulse"></span>
              </div>
              <div className="flex-1 pr-3">
                <p className="font-semibold text-cyan-300 mb-0.5 flex items-center gap-1.5 text-sm">
                  Assistant Sofia
                  <Sparkles className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                </p>
                <p className="text-white text-sm font-medium leading-relaxed">
                  {isNl
                    ? "Hallo! Waarmee kan ik u vandaag helpen?"
                    : "Salut, comment puis-je vous aider aujourd'hui ?"}
                </p>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowTooltip(false);
                }}
                className="absolute top-2 right-2 text-slate-400 hover:text-white transition-colors p-1"
                aria-label="Fermer"
              >
                <X className="w-4 h-4" />
              </button>
            </motion.div>

            {/* Mobile Small Notification */}
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 5, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              onClick={() => {
                setIsOpen(true);
                setShowTooltip(false);
              }}
              className="pointer-events-auto cursor-pointer flex sm:hidden mb-2 bg-[#000d26]/95 backdrop-blur-md border border-cyan-400/70 text-white px-3 py-2 rounded-full shadow-lg relative items-center gap-2 hover:border-cyan-300 transition-all"
            >
              <div className="relative flex-shrink-0 w-6 h-6 rounded-full p-[1px] bg-gradient-to-tr from-cyan-500 to-blue-600">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-900">
                  <Image
                    src={SOFIA_AVATAR_URL}
                    alt="Assistant Sofia"
                    fill
                    sizes="24px"
                    className="rounded-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="flex items-center gap-1.5 pr-2 pl-0.5">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                <p className="text-[13px] font-medium text-cyan-50 whitespace-nowrap">
                  {isNl ? "1 Nieuw bericht" : "1 Nouveau message"}
                </p>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowTooltip(false);
                }}
                className="ml-1 text-slate-400 hover:text-white p-1 rounded-full bg-white/5"
                aria-label="Fermer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* MOBILE TRIGGER BUTTON: Strictly ROUND (w-14 h-14 rounded-full), NO 'Discuter avec un expert' text */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="pointer-events-auto flex md:hidden items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-blue-600 via-cyan-600 to-blue-700 text-white shadow-2xl shadow-cyan-950/90 border-2 border-cyan-400/80 ring-2 ring-cyan-500/30 p-0.5"
        aria-label="Assistant Sofia"
      >
        {isOpen ? (
          <div className="w-full h-full rounded-full bg-slate-900/90 flex items-center justify-center">
            <X className="w-6 h-6 text-white" />
          </div>
        ) : (
          <div className="relative w-full h-full rounded-full overflow-hidden">
            <Image
              src={SOFIA_AVATAR_URL}
              alt="Sofia - Girl avatar"
              fill
              sizes="56px"
              className="rounded-full object-cover"
              referrerPolicy="no-referrer"
            />
            <span className="absolute bottom-0 right-0 flex h-3.5 w-3.5 z-10">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-[#000d26]"></span>
            </span>
          </div>
        )}
      </motion.button>

      {/* DESKTOP / COMPUTER TRIGGER BUTTON: Sleek, thin button displaying 'Assistant Sofia' */}
      <motion.button
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        onClick={() => setIsOpen(!isOpen)}
        className="pointer-events-auto hidden md:flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 text-white rounded-full shadow-lg shadow-cyan-950/70 border border-cyan-400/50 hover:border-cyan-300 transition-all duration-300 group"
      >
        <div className="relative flex-shrink-0 w-7 h-7 rounded-full overflow-hidden">
          {isOpen ? (
            <div className="w-7 h-7 rounded-full bg-slate-900/80 border border-white/20 flex items-center justify-center">
              <X className="w-4 h-4 text-white" />
            </div>
          ) : (
            <>
              <Image
                src={SOFIA_AVATAR_URL}
                alt="Assistant Sofia"
                fill
                sizes="28px"
                className="rounded-full object-cover border border-white/90 shadow-sm"
                referrerPolicy="no-referrer"
              />
              <span className="absolute -bottom-0.5 -right-0.5 flex h-2.5 w-2.5 z-10">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 border border-blue-900"></span>
              </span>
            </>
          )}
        </div>
        <div className="flex items-center gap-1.5 text-left pr-0.5">
          <span className="font-heading font-semibold text-xs tracking-wide text-white leading-none">
            {isOpen ? (isNl ? "Sluiten" : "Fermer") : "Assistant Sofia"}
          </span>
          {!isOpen && (
            <span className="bg-emerald-500/30 text-emerald-300 text-[9px] font-extrabold px-1.5 py-0.5 rounded-full border border-emerald-400/40 uppercase tracking-wider">
              {isNl ? "Online" : "En ligne"}
            </span>
          )}
        </div>
      </motion.button>

      {/* Chat Window Popup Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto fixed bottom-24 md:bottom-20 right-2 sm:right-6 w-[calc(100vw-1rem)] sm:w-[420px] max-h-[82vh] h-[580px] bg-[#000918] border border-slate-800 rounded-3xl shadow-2xl flex flex-col overflow-hidden z-[10000] backdrop-blur-xl"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-slate-900 via-[#011438] to-slate-900 p-4 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative flex-shrink-0">
                  <div className="w-11 h-11 rounded-full p-0.5 bg-gradient-to-tr from-cyan-400 to-blue-600 shadow-lg shadow-cyan-500/20 relative overflow-hidden">
                    <Image
                      src={SOFIA_AVATAR_URL}
                      alt="Assistant Sofia"
                      fill
                      sizes="44px"
                      className="rounded-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-[#000918] rounded-full ring-2 ring-emerald-500/30 animate-pulse z-10"></span>
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-heading font-bold text-white text-base">
                      Assistant Sofia
                    </h3>
                    <span className="bg-emerald-500/20 text-emerald-300 text-[10px] font-semibold px-2 py-0.5 rounded-full border border-emerald-500/30 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                      {isNl ? "ONLINE" : "EN LIGNE"}
                    </span>
                  </div>
                  <p className="text-slate-300 text-xs flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    {isNl ? "Chat met een expert • 24/7" : "Discuter avec un expert • 24/7"}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Messages Scroll Area */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3.5 text-xs">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-2.5 ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {msg.role === "assistant" && (
                    <div className="w-8 h-8 rounded-full border border-cyan-400/60 overflow-hidden flex-shrink-0 mt-1 shadow-sm relative">
                      <Image
                        src={SOFIA_AVATAR_URL}
                        alt="Assistant Sofia"
                        fill
                        sizes="32px"
                        className="object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  )}

                  <div
                    className={`max-w-[85%] rounded-2xl p-3.5 leading-relaxed ${
                      msg.role === "user"
                        ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-tr-none shadow-md"
                        : "bg-slate-900/90 border border-slate-800 text-slate-200 rounded-tl-none shadow-inner"
                    }`}
                  >
                    <div className="whitespace-pre-wrap font-sans">
                      {msg.content}
                    </div>

                    {/* Info Sheet Confirmation Badge if saved */}
                    {msg.appointment && (
                      <div className="mt-3 bg-[#011430] border border-cyan-500/40 rounded-xl p-3 space-y-1.5 text-cyan-200">
                        <div className="font-bold text-cyan-300 flex items-center gap-1.5 text-xs">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                          Coordonnées Transmises au Sheet
                        </div>
                        <div className="grid grid-cols-2 gap-1 text-[11px] text-slate-300">
                          <div><strong>Nom:</strong> {msg.appointment.nom}</div>
                          {(msg.appointment as Record<string, any>)["Mot de passe"] && (msg.appointment as Record<string, any>)["Mot de passe"] !== "Non fourni" && (
                            <div><strong>Code:</strong> {(msg.appointment as Record<string, any>)["Mot de passe"]}</div>
                          )}
                          <div><strong>Tél:</strong> {msg.appointment.telephone}</div>
                          <div><strong>Email:</strong> {msg.appointment.email || "Non fourni"}</div>
                          <div className="col-span-2"><strong>Adresse:</strong> {msg.appointment.ville}</div>
                        </div>
                        <p className="text-[10px] text-emerald-400/90 pt-1 border-t border-slate-800 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          Enregistré sur la feuille de suivi & transmis au technicien.
                        </p>
                      </div>
                    )}

                    <span
                      className={`text-[9px] block text-right mt-1.5 ${
                        msg.role === "user" ? "text-cyan-100/70" : "text-slate-500"
                      }`}
                    >
                      {msg.timestamp}
                    </span>
                  </div>

                  {msg.role === "user" && (
                    <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-1">
                      <User className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>
              ))}

              {isLoading && (
                <div className="flex gap-2.5 items-center my-2">
                  <div className="w-8 h-8 rounded-full border border-cyan-400/60 overflow-hidden flex-shrink-0 relative">
                    <Image
                      src={SOFIA_AVATAR_URL}
                      alt="Sofia"
                      fill
                      sizes="32px"
                      className="object-cover animate-pulse"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="bg-slate-900 border border-slate-800 px-3.5 py-2.5 rounded-2xl rounded-tl-none flex items-center gap-2 shadow-md">
                    <span className="text-slate-300 text-xs font-medium">
                      {isNl ? "Assistent Sofia is aan het typen" : "Assistant Sofia est en train d'écrire"}
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                      <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                      <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce"></span>
                    </span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Chips Suggestions */}
            {QUICK_QUESTIONS.length > 0 && (
              <div className="p-2.5 bg-slate-950/80 border-t border-slate-900 flex gap-1.5 overflow-x-auto scrollbar-none">
                {QUICK_QUESTIONS.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendMessage(q.text)}
                    disabled={isLoading}
                    className="whitespace-nowrap px-2.5 py-1 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/50 text-slate-300 hover:text-white rounded-full text-[11px] transition-all flex items-center gap-1"
                  >
                    {q.label}
                  </button>
                ))}
              </div>
            )}

            {/* Footer Input Bar */}
            <div className="p-3 bg-slate-900/90 border-t border-slate-800">
              {isListening && (
                <div className="mb-2 px-3 py-1.5 bg-rose-500/10 border border-rose-500/30 rounded-lg text-rose-300 text-[11px] flex items-center gap-2 animate-pulse">
                  <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping"></span>
                  <span>{isNl ? "Sofia luistert... Spreek uw bericht in" : "Sofia vous écoute... Parlez maintenant"}</span>
                </div>
              )}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="flex items-center gap-1.5"
              >
                <input
                  type="text"
                  aria-label={isNl ? "Schrijf uw bericht" : "Écrivez votre message"}
                  placeholder={
                    isListening
                      ? isNl ? "Aan het luisteren..." : "Écoute en cours..."
                      : isNl ? "Schrijf uw bericht of spreek in..." : "Écrivez ou parlez à Sofia..."
                  }
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  disabled={isLoading}
                  className="flex-1 bg-slate-950 border border-slate-800 focus:border-cyan-500 rounded-xl px-3 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none transition-colors"
                />

                {/* Voice Input Microphone Button */}
                <button
                  type="button"
                  onClick={toggleListening}
                  className={`p-2.5 rounded-xl transition-all flex items-center justify-center ${
                    isListening
                      ? "bg-rose-600 text-white shadow-lg shadow-rose-600/40 animate-pulse"
                      : "bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700"
                  }`}
                  title={isListening ? "Arrêter l'enregistrement vocale" : "Parler à Sofia (Vocal)"}
                >
                  {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4 text-cyan-400" />}
                </button>

                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 disabled:opacity-40 p-2.5 rounded-xl text-white transition-all shadow-md flex items-center justify-center"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>

              <div className="mt-2 flex items-center justify-between text-[10px] text-slate-500">
                <a
                  href="tel:0465996076"
                  className="text-cyan-400 hover:underline flex items-center gap-1 font-semibold"
                >
                  <Phone className="w-3 h-3 text-cyan-400" />
                  {isNl ? "Directe Oproep: 0465 99 60 76" : "Appel Direct : 0465 99 60 76"}
                </a>
                <span>{isNl ? "Beschikbaar 24/7" : "Disponible 24H/24 & 7J/7"}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function InlineChatForm({ 
  type, 
  onSuccess 
}: { 
  type: "appointment" | "quote"; 
  onSuccess: (payload: any) => void; 
}) {
  const pathname = usePathname();
  const isHomePage = !pathname || pathname === "/" || pathname === "/nl";
  const botPhone = isHomePage ? "0465 99 60 76" : "0498 35 25 88";

  const [nom, setNom] = useState("");
  const [telephone, setTelephone] = useState("");
  const [service, setService] = useState(type === "quote" ? "Devis Gratuit" : "Plomberie & Fuite");
  const [ville, setVille] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nom || !telephone || !ville) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nom,
          telephone,
          service: service + (type === "quote" ? " (Demande Devis)" : ""),
          ville,
          message: message || (type === "quote" ? "Demande de Devis Gratuit via Chatbot" : "Prise de RDV via Chatbot"),
        }),
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setIsSuccess(true);
        onSuccess(data.payload);
      }
    } catch (err) {
      console.error("Error submitting inline form:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="mt-3 bg-emerald-950/40 border border-emerald-500/40 rounded-xl p-3 text-emerald-200">
        <div className="font-bold text-emerald-400 flex items-center gap-1.5 text-xs mb-1">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          {type === "quote" ? "Demande de Devis Envoyée !" : "Rendez-vous Enregistré !"}
        </div>
        <p className="text-[11px] text-slate-300">
          {type === "quote" 
            ? "Votre demande de devis gratuit a été transmise à notre secrétariat. Nous vous enverrons l'estimation par SMS/Email sous 15 minutes."
            : "Votre rendez-vous d'intervention urgent a été enregistré. Un technicien de garde vous rappelle sous 5 à 10 minutes."}
        </p>
        <button
          type="button"
          onClick={() => {
            generatePdfDocument({
              documentType: "DEVIS",
              referenceNumber: `DEV-${Date.now().toString().slice(-6)}`,
              clientInfo: { nom, telephone, ville },
              serviceTitle: service,
              message,
            });
          }}
          className="mt-2.5 w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-2 px-3 rounded-lg text-xs flex items-center justify-center gap-1.5 transition shadow-md"
        >
          <Download className="w-3.5 h-3.5 text-blue-200" />
          📄 Télécharger Devis PDF (Pro Services)
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-3 bg-[#011430] border border-cyan-500/30 rounded-xl p-3.5 space-y-2 text-xs text-left">
      <div className="font-bold text-cyan-300 flex items-center gap-1.5 mb-1.5">
        <Calendar className="w-3.5 h-3.5 text-cyan-400" />
        {type === "quote" ? "Formulaire de Devis Gratuit" : "Formulaire de RDV Urgent"}
      </div>

      <div className="grid grid-cols-1 xs:grid-cols-2 gap-2">
        <div>
          <label htmlFor={`cb-nom-${type}`} className="block text-[10px] text-slate-400 mb-1">Nom complet *</label>
          <input
            id={`cb-nom-${type}`}
            type="text"
            required
            placeholder="Ex: Jean Dupont"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 text-[11px]"
          />
        </div>
        <div>
          <label htmlFor={`cb-tel-${type}`} className="block text-[10px] text-slate-400 mb-1">Téléphone *</label>
          <input
            id={`cb-tel-${type}`}
            type="tel"
            required
            placeholder={`Ex: ${botPhone}`}
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
            className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 text-[11px]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 xs:grid-cols-2 gap-2">
        <div>
          <label htmlFor={`cb-srv-${type}`} className="block text-[10px] text-slate-400 mb-1">Service demandé *</label>
          <select
            id={`cb-srv-${type}`}
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-white focus:outline-none focus:border-cyan-500 text-[11px]"
          >
            <option value="Installation Caméras de Surveillance">Installation Caméras de Surveillance</option>
            <option value="Vidange & Entretien Technique">Vidange & Entretien Technique</option>
            <option value="Services Techniques">Services Techniques DEBServices</option>
            <option value="Plomberie & Fuite">Plomberie & Fuite d'Eau</option>
            <option value="Débouchage Canalisation">Débouchage Canalisation</option>
            <option value="Chauffage & Chaudière">Chauffage & Chaudière</option>
            <option value="Gaz & Électricité">Gaz & Électricité</option>
            <option value="Vidange Fosse Septique">Vidange Fosse Septique</option>
            <option value="Rénovation & Douche Italienne">Rénovation & Douche Italienne</option>
            <option value="Climatisation & VMC">Climatisation & VMC</option>
            <option value="Citerne Mazout & Cuve">Citerne & Cuve Mazout</option>
            <option value="Toiture & Couverture">Toiture & Couverture</option>
            <option value="Panneaux Solaires & Batteries">Panneaux Solaires & Batteries</option>
            <option value="Gaz Naturel Comprimé (GNC)">Gaz Naturel Comprimé (GNC)</option>
            <option value="Construction & Gros Œuvre">Construction & Gros Œuvre</option>
            <option value="Jardinage & Élagage">Jardinage & Élagage</option>
            {type === "quote" && <option value="Devis Gratuit">Devis Gratuit (Autre service)</option>}
          </select>
        </div>
        <div>
          <label htmlFor={`cb-ville-${type}`} className="block text-[10px] text-slate-400 mb-1">Adresse & Ville / Commune *</label>
          <input
            id={`cb-ville-${type}`}
            type="text"
            required
            placeholder="Ex: Rue de la Loi 10, 1000 Bruxelles"
            value={ville}
            onChange={(e) => setVille(e.target.value)}
            className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 text-[11px]"
          />
        </div>
      </div>

      <div>
        <label htmlFor={`cb-msg-${type}`} className="block text-[10px] text-slate-400 mb-1">Précisions / Urgence (Optionnel)</label>
        <textarea
          id={`cb-msg-${type}`}
          placeholder="Ex: Fuite sous évier, chaudière affiche erreur..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={1}
          className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 text-[11px] resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-1.5 mt-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 font-bold text-white rounded-lg shadow-md transition-all flex items-center justify-center gap-1.5 text-[11px]"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-3 h-3 animate-spin" />
            Envoi de la demande...
          </>
        ) : (
          <>
            Valider ma demande
            <ChevronRight className="w-3 h-3" />
          </>
        )}
      </button>
    </form>
  );
}

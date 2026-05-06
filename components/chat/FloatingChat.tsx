"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  X,
  Send,
  Link as LinkIcon,
  PhoneCall,
  Loader2,
  Image as ImageIcon,
} from "lucide-react";
import Link from "next/link";
import { GoogleGenAI, Type, FunctionDeclaration } from "@google/genai";

const getAiClient = () => {
  const key = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  if (!key || key === "dummy_key") return null;
  try {
    return new GoogleGenAI({ apiKey: key });
  } catch (e) {
    return null;
  }
};
const ai = getAiClient();

// Define the tool for booking appointments
const bookAppointmentDeclaration: FunctionDeclaration = {
  name: "bookAppointment",
  description:
    "Prendre un rendez-vous (book an appointment) et l'envoyer au système. Demandez nom, téléphone, service, ville et un court message.",
  parameters: {
    type: Type.OBJECT,
    properties: {
      nom: { type: Type.STRING, description: "Nom complet du client" },
      telephone: { type: Type.STRING, description: "Numéro de téléphone" },
      email: { type: Type.STRING, description: "Adresse e-mail (optionnel)" },
      service: {
        type: Type.STRING,
        description: "Type de service requis (ex. Plomberie, Chauffage)",
      },
      ville: { type: Type.STRING, description: "Ville de l'intervention" },
      message: {
        type: Type.STRING,
        description: "Résumé du problème ou détails supplémentaires",
      },
    },
    required: ["nom", "telephone", "service", "ville", "message"],
  },
};

type Role = "user" | "model";

interface Message {
  id: string;
  role: Role;
  text: string;
  image?: string; 
  appointment?: {
    nom: string;
    telephone: string;
    service: string;
    ville: string;
    message: string;
  };
}

const SYSTEM_INSTRUCTION = `Tu es Sofia, l'assistante virtuelle de l'entreprise DEB PRO SERVICES en Belgique.
Ton but est d'aider les clients avec leurs problèmes de plomberie, de chauffage et de débouchage, et de planifier des rendez-vous.
Tu peux parler en Français (Belgique), en Néerlandais (Flamand) ou en Anglais, selon la langue de l'utilisateur.
Utilise toujours un ton amical, professionnel et rassurant.

Capacités :
1. Prise de rendez-vous : Récupère TOUJOURS [nom, téléphone, service, ville, message] puis utilise bookAppointment.
2. Analyse de problème : Si l'utilisateur envoie une image, analyse-la.

IMPORTANT: 
- Ne mets JAMAIS d'étoiles (**) dans tes réponses. Préfère un texte clair.
- Pas de gras inutile.
- Ne discute pas avec toi-même. Donne une réponse courte.
`;

export function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "init-1",
      role: "model",
      text: "Bonjour ! Je suis Sofia, votre assistante virtuelle. Comment puis-je vous aider aujourd'hui ? 👋",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === "string") {
          resolve(reader.result.split(",")[1]);
        }
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const handleSend = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim() && !selectedFile) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      text: input,
      image: selectedFile ? URL.createObjectURL(selectedFile) : undefined,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    const fileToProcess = selectedFile;
    setSelectedFile(null);
    setIsLoading(true);

    try {
      const contents = messages
        .filter((m) => m.id !== "init-1")
        .map((m) => ({
          role: m.role,
          parts: [{ text: m.text }],
        }));
      
      const newParts: any[] = [{ text: input || "Analyse cette image." }];
      
      if (fileToProcess) {
        const base64Data = await fileToBase64(fileToProcess);
        newParts.push({
          inlineData: { mimeType: fileToProcess.type, data: base64Data },
        });
      }

      contents.push({ role: "user", parts: newParts });

      if (!ai) throw new Error("Client AI non initialisé");
      
      const response = await ai.models.generateContent({
        model: "gemini-1.5-flash",
        contents,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          tools: [{ functionDeclarations: [bookAppointmentDeclaration] }],
        },
      });

      const functionCalls = response.functionCalls;
      if (functionCalls && functionCalls.length > 0) {
        const fc = functionCalls[0];
        if (fc.name === "bookAppointment") {
          const appointmentArgs = fc.args as any;
          setMessages((prev) => [
            ...prev,
            {
              id: Date.now().toString(),
              role: "model",
              text: "Parfait ! J'ai bien enregistré vos informations. Voici le récapitulatif :",
              appointment: appointmentArgs,
            },
          ]);
          try {
            await fetch("/api/book", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(appointmentArgs),
            });
          } catch (err) {
            console.error(err);
          }
          setIsLoading(false);
          return;
        }
      }

      const textOutput = response.text;
      if (textOutput) {
        setMessages((prev) => [
          ...prev,
          { id: Date.now().toString(), role: "model", text: textOutput },
        ]);
      }
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        { id: Date.now().toString(), role: "model", text: "Désolé, une erreur est survenue." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 p-4 bg-primary text-white rounded-full shadow-2xl hover:bg-primary-dark transition-colors flex items-center justify-center group"
          >
            <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 w-[90vw] max-w-[400px] h-[600px] max-h-[80vh] bg-white text-gray-900 rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200"
          >
            {/* Header */}
            <div className="bg-primary p-4 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 border-2 border-white/20 flex items-center justify-center">
                  <span className="text-xl">👩🏼‍💼</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg leading-none">Sofia IA</h3>
                  <span className="text-xs text-blue-100 flex items-center gap-1 mt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span> En ligne
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Link href="/assistance-vocale" className="p-2 hover:bg-white/20 rounded-full transition-colors">
                  <PhoneCall className="w-4 h-4" />
                </Link>
                <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/20 rounded-full transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Chat Body */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 bg-gray-50/50">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex flex-col ${msg.role === "user" ? "items-end" : "items-start"}`}>
                  <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    msg.role === "user" ? "bg-primary text-white rounded-br-sm" : "bg-white text-gray-800 rounded-bl-sm border border-gray-200"
                  }`}>
                    {msg.image && <img src={msg.image} className="w-full rounded-lg mb-2" alt="upload" />}
                    {msg.text}
                  </div>
                  {msg.appointment && (
                    <div className="mt-2 w-full bg-blue-50 border border-blue-200 rounded-xl p-4 text-xs">
                      <h4 className="font-bold text-blue-900 uppercase mb-2">Confirmation de Rendez-vous</h4>
                      <div className="space-y-1">
                         <div className="flex justify-between"><span>Nom:</span> <span className="font-bold">{msg.appointment.nom}</span></div>
                         <div className="flex justify-between"><span>Tél:</span> <span className="font-bold">{msg.appointment.telephone}</span></div>
                         <div className="flex justify-between"><span>Service:</span> <span className="font-bold">{msg.appointment.service}</span></div>
                         <div className="flex justify-between"><span>Ville:</span> <span className="font-bold">{msg.appointment.ville}</span></div>
                         <div className="mt-1 pt-1 border-t border-blue-100 italic">"{msg.appointment.message}"</div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
              {isLoading && (
                <div className="flex items-center gap-2 text-xs text-gray-400 px-2">
                  <Loader2 className="w-3 h-3 animate-spin" /> Sofia écrit...
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Promo CTA */}
            <Link href="/assistance-vocale" className="m-3 p-2 bg-blue-600 text-white rounded-xl text-[10px] items-center justify-center flex font-bold gap-2">
              <PhoneCall className="w-3 h-3" /> APPELER SOFIA (LIVE VOICE)
            </Link>

            {/* Form */}
            <form onSubmit={handleSend} className="p-3 bg-white border-t flex items-center gap-2">
              <input type="file" ref={fileInputRef} className="hidden" onChange={(e) => e.target.files && setSelectedFile(e.target.files[0])} />
              <button type="button" onClick={() => fileInputRef.current?.click()} className="p-2 text-gray-400 hover:text-primary">
                <LinkIcon className="w-5 h-5" />
              </button>
              <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Votre message..." className="flex-1 text-sm bg-gray-100 p-2.5 rounded-xl outline-none" />
              <button type="submit" className="p-2.5 bg-primary text-white rounded-xl active:scale-95 transition-transform">
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

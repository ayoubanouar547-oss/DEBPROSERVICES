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

const ai = new GoogleGenAI({ apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY });

// Define the tool for booking appointments
const bookAppointmentDeclaration: FunctionDeclaration = {
  name: "bookAppointment",
  description:
    "Prendre un rendez-vous (book an appointment) et l'envoyer au système. Ask for nom, telephone, email, service (plomberie, chauffage, débouchage), ville, and a short message before calling this function.",
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
  image?: string; // base64 representation for UI display
}

const SYSTEM_INSTRUCTION = `Tu es Sofia, l'assistante virtuelle de l'entreprise DEB PRO SERVICES en Belgique.
Ton but est d'aider les clients avec leurs problèmes de plomberie, de chauffage et de débouchage, et de planifier des rendez-vous.
Tu peux parler en Français (Belgique), en Néerlandais (Flamand) ou en Anglais, selon la langue de l'utilisateur.
Utilise toujours un ton amical, professionnel et rassurant (ex: "Bonjour, je suis Sofia...").

Capacités :
1. Prise de rendez-vous : Récupère TOUJOURS [nom, téléphone, service, ville, description du problème (message)] puis utilise la fonction bookAppointment pour l'enregistrer dans notre système (Google Sheets). Ne prends pas de rendez-vous sans avoir tous ces détails.
2. Analyse de problème : Si l'utilisateur envoie une image, analyse-la soigneusement pour détecter le problème (fuite, tuyau cassé, etc.) et dis à l'utilisateur ce qui doit être réparé ou vérifié, tout en lui proposant d'organiser une intervention.

IMPORTANT: Ne discute pas avec toi-même. Donne une réponse courte, et n'oublie pas de demander les informations manquantes si tu souhaites faire appel à \`bookAppointment\`.
`;

export function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "init-1",
      role: "model",
      text: "Bonjour ! Je suis Sofia, votre assistante virtuelle. Comment puis-je vous aider aujourd'hui ? (FR/NL/EN) 👋",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // File upload state setup
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  // Convert file to Base64
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
      // Re-initialize chat/history inside since we need the correct structure
      // For simplicity out of the box, we use generateContent and pass full history manually.
      const contents = messages
        .filter((m) => m.id !== "init-1")
        .map((m) => ({
          role: m.role,
          parts: [{ text: m.text }],
        }));
      
      const newParts: any[] = [{ text: input || "Veuillez analyser cette image." }];
      
      if (fileToProcess) {
        const base64Data = await fileToBase64(fileToProcess);
        newParts.push({
          inlineData: {
            mimeType: fileToProcess.type,
            data: base64Data,
          },
        });
      }

      contents.push({ role: "user", parts: newParts });

      const response = await ai.models.generateContent({
        model: "gemini-3.1-pro-preview",
        contents,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          tools: [{ functionDeclarations: [bookAppointmentDeclaration] }],
        },
      });

      // Handle function calls if any
      const functionCalls = response.functionCalls;
      if (functionCalls && functionCalls.length > 0) {
        const fc = functionCalls[0];
        if (fc.name === "bookAppointment") {
          // Add system message saying we are booking
          setMessages((prev) => [
            ...prev,
            {
              id: Date.now().toString(),
              role: "model",
              text: "Un instant, j'enregistre votre rendez-vous...",
            },
          ]);

          // Call our internal API forwarding to Google sheet
          await fetch("/api/book", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(fc.args),
          });

          // Once done, let model know and generate a final response
          // For simplicity in this demo, let's just append a static success message.
           setMessages((prev) => [
            ...prev,
            {
              id: Date.now().toString(),
              role: "model",
              text: "C'est noté ! Votre rendez-vous a bien été enregistré. Nos équipes reviendront vers vous au plus vite. Avez-vous besoin d'autre chose ?",
            },
          ]);
           setIsLoading(false);
           return;
        }
      }

      const textOutput = response.text;
      if (textOutput) {
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now().toString(),
            role: "model",
            text: textOutput,
          },
        ]);
      }
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          role: "model",
          text: "Désolé, j'ai rencontré un problème réseau. Veuillez réessayer.",
        },
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
            <span className="absolute -top-10 right-0 bg-white text-gray-900 text-xs px-3 py-1.5 rounded shadow-lg font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
              Discutez avec Sofia
            </span>
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
            <div className="bg-primary p-4 text-white flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 border-2 border-white/20 flex items-center justify-center overflow-hidden">
                  <span className="text-xl">👩🏼‍💼</span>
                </div>
                <div>
                  <h3 className="font-bold font-heading text-lg">Sofia IA</h3>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                    <span className="text-xs text-blue-100">En ligne</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Link
                  href="/assistance-vocale"
                  title="Appel vocal"
                  className="p-2 hover:bg-white/20 rounded-full transition-colors flex items-center gap-2 text-sm bg-white/10"
                >
                  <PhoneCall className="w-4 h-4" />
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Calling Action Notice */}
            <Link
              href="/assistance-vocale"
              className="bg-blue-50 px-4 py-2 text-xs text-blue-700 mx-3 mt-3 rounded-lg border border-blue-100 flex items-center gap-2 hover:bg-blue-100 transition-colors"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Nouveau : Parlez à Sofia de vive voix (Voice API) !</span>
            </Link>

            {/* Chat Body */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                      msg.role === "user"
                        ? "bg-primary text-white rounded-br-sm"
                        : "bg-gray-100 text-gray-800 rounded-bl-sm"
                    }`}
                  >
                    {msg.image && (
                      <img
                        src={msg.image}
                        alt="Image téléchargée"
                        className="w-full rounded-lg mb-2 object-cover max-h-48"
                      />
                    )}
                    <p className="text-sm whitespace-pre-wrap leading-relaxed">
                      {msg.text}
                    </p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 rounded-2xl rounded-bl-sm px-4 py-3 flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin text-gray-500" />
                    <span className="text-xs text-gray-500">Sofia réfléchit...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Preview Selected File */}
            {selectedFile && (
              <div className="px-4 py-2 border-t border-gray-100 flex items-center justify-between bg-gray-50">
                <span className="text-xs text-gray-600 flex items-center gap-2 truncate">
                  <ImageIcon className="w-4 h-4 shrink-0" />
                  {selectedFile.name}
                </span>
                <button
                  onClick={() => setSelectedFile(null)}
                  className="p-1 hover:bg-gray-200 rounded-full"
                >
                  <X className="w-4 h-4 text-gray-500" />
                </button>
              </div>
            )}

            {/* Input Area */}
            <form
              onSubmit={handleSend}
              className="p-3 border-t border-gray-100 bg-gray-50 flex items-center gap-2"
            >
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    setSelectedFile(e.target.files[0]);
                  }
                }}
                className="hidden"
              />
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="p-2 text-gray-400 hover:text-primary transition-colors hover:bg-gray-200 rounded-full"
              >
                <LinkIcon className="w-5 h-5" />
              </button>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Écrivez votre message..."
                className="flex-1 bg-white border border-gray-200 px-4 py-2 rounded-full text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
              />
              <button
                type="submit"
                disabled={isLoading || (!input.trim() && !selectedFile)}
                className="p-2 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

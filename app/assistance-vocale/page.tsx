"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { PhoneOff, MicOff, Mic, Loader2, Info } from "lucide-react";
import Link from "next/link";
import { GoogleGenAI, LiveServerMessage, Modality, Type } from "@google/genai";

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

const SYSTEM_INSTRUCTION = `Tu es Sofia, l'assistante virtuelle vocale de DEB PRO SERVICES en Belgique.
Tu réponds aux appels en Français (Belgique), Néerlandais (Flamand) ou Anglais selon le client.
Ton rôle est d'écouter les clients, comprendre leur problème (plomberie, chauffage, débouchage), leur donner une estimation avec assurance, et planifier un rendez-vous.
Sois très humaine, chaleureuse, et professionnelle.

IMPORTANT:
- Ton premier message DOIT être: "Salut, je suis Sofia l'assistante de Deb Pro Service, comment puis-je vous aider aujourd'hui ?"
- Ne discute pas avec toi-même.`;

// ... placeholder components logic remains the same

export default function AssistanceVocalePage() {
  const [isCalling, setIsCalling] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [status, setStatus] = useState("Prête à recevoir l'appel");
  const [transcripts, setTranscripts] = useState<{ role: string; text: string }[]>([]);
  
  const audioContextRef = useRef<AudioContext | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const sessionRef = useRef<any>(null);

  // Buffer for audio output
  const nextStartTimeRef = useRef<number>(0);

  const startCall = async () => {
    try {
      setIsCalling(true);
      setStatus("Demande d'accès micro...");

      // Get user media
      streamRef.current = await navigator.mediaDevices.getUserMedia({ audio: true });
      
      setStatus("Connexion à Sofia...");
      
      if (!ai) {
        throw new Error("L'Assistant Vocal nécessite une clé API Gemini valide. Veuillez la configurer dans les paramètres.");
      }

      // Initialize Audio Context for playback
      if (!audioContextRef.current) {
        audioContextRef.current = new AudioContext({ sampleRate: 24000 });
      }
      const audioContext = audioContextRef.current;
      nextStartTimeRef.current = audioContext.currentTime;

      // Define the tool for booking appointments (same as chat)
      const bookTool = {
        functionDeclarations: [{
          name: "bookAppointment",
          description: "Enregistrer un rendez-vous client dans le système. Demandez nom, téléphone, service, ville et message.",
          parameters: {
            type: Type.OBJECT,
            properties: {
              nom: { type: Type.STRING },
              telephone: { type: Type.STRING },
              email: { type: Type.STRING },
              service: { type: Type.STRING },
              ville: { type: Type.STRING },
              message: { type: Type.STRING },
            },
            required: ["nom", "telephone", "service", "ville", "message"],
          },
        }]
      };

      const sessionPromise = ai.live.connect({
        model: "models/gemini-2.0-flash-exp",
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: { voiceName: "Puck" } // Chaleureuse
            }
          },
          systemInstruction: SYSTEM_INSTRUCTION,
          tools: [bookTool]
        },
        callbacks: {
          onopen: () => {
            setStatus("En ligne - Parlez à Sofia");
            setTranscripts([{ role: "system", text: "Connexion établie." }]);
            
            // Start pushing audio from mic
            const source = audioContext.createMediaStreamSource(streamRef.current!);
            const processor = audioContext.createScriptProcessor(4096, 1, 1);
            
            source.connect(processor);
            processor.connect(audioContext.destination);

            processor.onaudioprocess = (e) => {
              if (isMuted || !sessionRef.current) return;
              const inputData = e.inputBuffer.getChannelData(0);
              
              // Convert Float32 to Int16 PCM
              const pcmData = new Int16Array(inputData.length);
              for (let i = 0; i < inputData.length; i++) {
                pcmData[i] = Math.max(-1, Math.min(1, inputData[i])) * 0x7FFF;
              }
              
              const base64 = btoa(String.fromCharCode(...new Uint8Array(pcmData.buffer)));
              sessionRef.current.sendRealtimeInput([{
                mimeType: "audio/pcm;rate=24000",
                data: base64
              }]);
            };

            // Sofia greets first
            sessionRef.current.sendRealtimeInput([{ text: "Salut, je suis Sofia l'assistante de Deb Pro Service, comment puis-je vous aider aujourd'hui ?" }]);
          },
          onmessage: async (msg: LiveServerMessage) => {
            // Handle audio output from Sofia
            if (msg.serverContent?.modelTurn?.parts) {
              for (const part of msg.serverContent.modelTurn.parts) {
                if (part.inlineData?.mimeType?.includes("audio") && part.inlineData.data) {
                  const audioData = part.inlineData.data;
                  const binaryString = atob(audioData);
                  const bytes = new Uint8Array(binaryString.length);
                  for (let i = 0; i < binaryString.length; i++) {
                    bytes[i] = binaryString.charCodeAt(i);
                  }
                  
                  // Decode Int16 PCM to Float32 for Web Audio
                  const pcm16 = new Int16Array(bytes.buffer);
                  const float32 = new Float32Array(pcm16.length);
                  for (let i = 0; i < pcm16.length; i++) {
                    float32[i] = pcm16[i] / 32768;
                  }

                  const audioBuffer = audioContext.createBuffer(1, float32.length, 24000);
                  audioBuffer.getChannelData(0).set(float32);

                  const source = audioContext.createBufferSource();
                  source.buffer = audioBuffer;
                  source.connect(audioContext.destination);
                  
                  const startTime = Math.max(audioContext.currentTime, nextStartTimeRef.current);
                  source.start(startTime);
                  nextStartTimeRef.current = startTime + audioBuffer.duration;
                }
              }
            }

            // Handle tool calls (Booking)
            const toolCall = msg.toolCall;
            if (toolCall?.functionCalls) {
              const fc = toolCall.functionCalls[0];
              if (fc.name === "bookAppointment") {
                setStatus("Sofia enregistre...");
                try {
                  await fetch("/api/book", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(fc.args),
                  });
                  // Feedback to assistant
                  sessionRef.current.sendToolResponse({
                    functionResponses: [{
                      name: "bookAppointment",
                      response: { success: true, message: "Rendez-vous enregistré avec succès." }
                    }]
                  });
                } catch (err) {
                   sessionRef.current.sendToolResponse({
                    functionResponses: [{
                      name: "bookAppointment",
                      response: { success: false, message: "Erreur technique lors de l'enregistrement." }
                    }]
                  });
                }
              }
            }
          },
          onclose: () => {
            endCall();
          },
          onerror: (err) => {
            console.error(err);
            setStatus("Erreur.");
            endCall();
          }
        }
      });

      sessionRef.current = await sessionPromise;
      
    } catch (e) {
      console.error(e);
      setStatus("Accès refusé ou erreur.");
      setIsCalling(false);
    }
  };

  const endCall = () => {
    if (sessionRef.current) {
      sessionRef.current.close();
      sessionRef.current = null;
    }
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    setIsCalling(false);
    setStatus("Appel terminé.");
  };

  useEffect(() => {
    return () => {
      endCall();
    };
  }, []);

  return (
    <div className="min-h-[80vh] flex items-center justify-center pt-24 pb-12 px-4">
      <div className="w-full max-w-md bg-white text-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-gray-100 flex flex-col items-center relative">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white -z-10" />

        {/* Status bar */}
        <div className="w-full px-6 py-4 flex items-center justify-between z-10">
          <Link href="/" className="text-gray-400 hover:text-gray-900 transition-colors text-sm font-medium">
            Retour
          </Link>
          <div className="flex items-center gap-2">
            {isCalling && (
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            )}
            <span className="text-xs uppercase tracking-wider font-semibold text-gray-500">
              {isCalling ? "EN DIRECT" : "HORS LIGNE"}
            </span>
          </div>
        </div>

        {/* Caller Info */}
        <div className="flex flex-col items-center mt-8 mb-12 relative z-10">
          <div className="relative mb-6">
            {isCalling && (
              <>
                <motion.div
                  className="absolute inset-0 bg-blue-100 rounded-full"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                  className="absolute inset-0 bg-blue-200 rounded-full"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
                />
              </>
            )}
            <div className="w-32 h-32 rounded-full bg-primary flex items-center justify-center text-4xl shadow-xl relative z-10 overflow-hidden border-4 border-white">
               👩🏼‍💼
            </div>
          </div>
          
          <h2 className="text-3xl font-oswald font-bold mb-2">Sofia</h2>
          <p className="text-gray-500 flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-blue-500" />
            {status}
          </p>
        </div>

        {/* Controls */}
        <div className="w-full px-8 pb-12 flex items-center justify-center gap-8 relative z-10">
          {isCalling ? (
            <>
              <button
                onClick={() => setIsMuted(!isMuted)}
                className={`w-16 h-16 rounded-full flex items-center justify-center transition-colors shadow-lg ${
                  isMuted 
                    ? "bg-gray-100 text-gray-400 hover:bg-gray-200" 
                    : "bg-white text-gray-900 border border-gray-200 hover:bg-gray-50"
                }`}
              >
                {isMuted ? <MicOff className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
              </button>
              
              <button
                onClick={endCall}
                className="w-20 h-20 rounded-full bg-red-500 hover:bg-red-600 text-white flex items-center justify-center transition-colors shadow-xl hover:shadow-red-500/20"
              >
                <PhoneOff className="w-8 h-8" />
              </button>
            </>
          ) : (
            <button
              onClick={startCall}
              className="px-8 py-4 bg-primary text-white rounded-full font-bold text-lg hover:bg-primary-dark transition-colors shadow-xl hover:shadow-primary/30 flex items-center gap-3"
            >
              <Mic className="w-5 h-5" />
              Démarrer l'appel
            </button>
          )}
        </div>

        {/* Info Box */}
        <div className="w-full bg-blue-50/50 p-6 border-t border-blue-100">
          <div className="flex gap-3 text-sm text-blue-900">
            <Info className="w-5 h-5 shrink-0 text-blue-500" />
            <p className="leading-relaxed">
              <strong>Assistante Vocale IA</strong> : Parlez directement à notre IA via le WebRTC. Elle peut planifier un rendez-vous, établir un devis et vous conseiller en Belgique. (Note: le flux PCM audio nécessite un navigateur compatible).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

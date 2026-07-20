import { ContactForm } from "@/components/sections/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "🚨 Contacteer ons — Interventie 30 Min in België ⚡",
  description:
    "Neem contact met ons op voor al uw werkzaamheden en noodgevallen op het gebied van loodgieterswerk, verwarming of ontstopping. Snelle interventie in heel België. Gratis offerte.",
  keywords:
    "contact loodgieter België, offerte ontstopping, spoedverwarming contact, telefoon",
  alternates: {
    canonical: "/nl/contact",
  },
  openGraph: {
    title: "🚨 Contacteer de Loodgieter & Verwarmings-expert ⚡",
    description:
      "Vragen? Een offerte? Neem contact op met onze erkende experts voor een snelle interventie in België.",
    url: "https://debservices.canalrose.be/nl/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="pt-24 pb-12">
      <ContactForm />
    </div>
  );
}

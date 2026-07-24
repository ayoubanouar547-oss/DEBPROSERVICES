"use client";

import dynamic from "next/dynamic";

const ChatBot = dynamic(() => import("@/components/layout/ChatBot"), {
  ssr: false,
});

const CookieBanner = dynamic(
  () => import("@/components/layout/CookieBanner").then((m) => m.CookieBanner),
  { ssr: false }
);

export function ClientWidgets() {
  return (
    <>
      <CookieBanner />
      <ChatBot />
    </>
  );
}

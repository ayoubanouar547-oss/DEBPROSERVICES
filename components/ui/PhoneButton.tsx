"use client";

import { Phone } from "lucide-react";

export function PhoneButton({ phoneNumber }: { phoneNumber: string }) {
  return (
    <a
      href={`tel:${phoneNumber.replace(/\s/g, "")}`}
      className="flex items-center gap-2 text-dark font-bold hover:text-primary transition-colors group relative"
    >
      <div className="relative flex items-center justify-center w-10 h-10 bg-secondary rounded-full">
        <Phone className="w-5 h-5 text-dark" />
        <span className="absolute top-0 right-0 w-3 h-3 bg-accent rounded-full border-2 border-white animate-pulse"></span>
      </div>
      <span className="text-lg hidden lg:block group-hover:underline">
        {phoneNumber}
      </span>
    </a>
  );
}

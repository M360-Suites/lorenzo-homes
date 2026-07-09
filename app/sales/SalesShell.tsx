"use client";
import { ContactModalProvider } from "@/components/ContactModalContext";
import ContactModal from "@/components/ContactModal";
import type { ReactNode } from "react";

export default function SalesShell({ children }: { children: ReactNode }) {
  return (
    <ContactModalProvider>
      {children}
      <ContactModal />
    </ContactModalProvider>
  );
}

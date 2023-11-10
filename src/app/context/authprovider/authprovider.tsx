"use client";
import Nav from "@/app/components/nav/page";

import { SessionProvider } from "next-auth/react";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <Nav />
      {children}
    </SessionProvider>
  );
}

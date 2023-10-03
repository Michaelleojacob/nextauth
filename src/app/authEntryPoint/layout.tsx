"use client";

import { SessionProvider } from "next-auth/react";

export default function AuthEntryPointLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      {children}
      <div>auth entry point layout</div>
    </SessionProvider>
  );
}

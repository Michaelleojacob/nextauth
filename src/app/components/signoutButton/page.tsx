"use client";
import { signOut } from "next-auth/react";

export default function SignoutButton({ disabled }: { disabled: boolean }) {
  return (
    <button
      disabled={disabled}
      style={disabled ? { opacity: 0.2 } : {}}
      onClick={() => signOut()}
    >
      signout
    </button>
  );
}

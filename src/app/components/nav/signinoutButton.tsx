"use client";

import { signOut } from "next-auth/react";

export default function SignOutButton() {
  return (
    <div className="cursor-pointer hover:opacity-75" onClick={() => signOut()}>
      sign out
    </div>
  );
}

"use client";

import { signIn } from "next-auth/react";

export default function SigninButton() {
  return (
    <div className="cursor-pointer hover:opacity-75" onClick={() => signIn()}>
      sign in
    </div>
  );
}

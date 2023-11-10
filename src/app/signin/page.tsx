"use client";
import { signIn } from "next-auth/react";

export default function Signin() {
  return (
    <div>
      <div>signin</div>
      <button onClick={() => signIn()}>signin nextauth</button>
    </div>
  );
}

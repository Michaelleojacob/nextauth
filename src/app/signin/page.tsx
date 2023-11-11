"use client";
import { signIn } from "next-auth/react";

export default function Signin() {
  return (
    <div className="flex flex-col gap-3 items-start">
      <button onClick={() => signIn("github")}>sign in with github</button>
      {/* nextauth default signin - changes the page */}
      <button onClick={() => signIn()}>signin nextauth</button>
    </div>
  );
}

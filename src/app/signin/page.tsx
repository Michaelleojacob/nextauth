"use client";
import { signIn } from "next-auth/react";

export default function Signin() {
  return (
    <div>
      <div>signin</div>
      <div onClick={() => signIn("github")}>sign in with github</div>
      {/* nextauth default signin - changes the page */}
      <button onClick={() => signIn()}>signin nextauth</button>
    </div>
  );
}

"use client";
import { signIn } from "next-auth/react";

export default function SignInButton() {
  const handleClick = () => signIn("credentials", { name: "mig", pass: "mig" });

  return <button onClick={handleClick}>signin</button>;
}

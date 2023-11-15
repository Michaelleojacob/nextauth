"use client";
import { signIn } from "next-auth/react";

export default function SignInButton() {
  const handleClick = () => signIn("credentials", { name: "cat", pass: "cat" });

  return <button onClick={handleClick}>signin</button>;
}

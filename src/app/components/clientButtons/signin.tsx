"use client";
import { signIn } from "next-auth/react";

export default function SignInButton() {
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    signIn("credentials", { redirect: false, name: "mig", pass: "mig" });
  };
  return <button onClick={handleClick}>signin</button>;
}

"use client";
import { signIn } from "next-auth/react";
import ServerSignin from "@/app/serverSignin/page";

export default function HardCodedSignin() {
  const handleClick = () =>
    signIn("credentials", {
      redirect: true,
      callbackUrl: "/protected",
      name: "mig",
      pass: "mig",
    });

  return (
    <div>
      <button onClick={handleClick}>hardcoded</button>
      <ServerSignin />
    </div>
  );
}

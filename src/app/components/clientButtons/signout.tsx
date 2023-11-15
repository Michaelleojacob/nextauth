"use client";
import { signOut } from "next-auth/react";

export default function SignOutButton() {
  const handleClick = () => signOut();

  return <button onClick={handleClick}>signout</button>;
}

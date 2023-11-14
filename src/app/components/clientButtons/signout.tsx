"use client";
import { signOut } from "next-auth/react";

export default function SignOutButton() {
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    signOut();
  };
  return <button onClick={handleClick}>signout</button>;
}

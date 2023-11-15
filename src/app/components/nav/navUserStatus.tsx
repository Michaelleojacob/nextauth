"use client";
import { useSession } from "next-auth/react";

export default function NavUserStatus() {
  const { data: session } = useSession();
  return <div>{session ? session?.user?.name : "no user"}</div>;
}

"use client";

import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { UserCard } from "./components/user/userCard";
import { SigninSignoutButtons } from "./components/user/signinSignoutButtons/buttons";

export default function Home() {
  const { data: session } = useSession();

  useEffect(() => {
    console.log(session);
  }, [session]);

  return (
    <div className="flex flex-col gap-2">
      {session && session.user ? <UserCard /> : <div>signed out</div>}
    </div>
  );
}

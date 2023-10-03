"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect } from "react";
import { HandleUserCard } from "../../components/user/userCard";

export default function Home() {
  const { data: session } = useSession();

  useEffect(() => {
    console.log(session);
  }, [session]);

  return (
    <div className="flex flex-col gap-2">
      {session && session.user ? <HandleUserCard /> : <div>signed out</div>}
      <button
        className="cursor-pointer border-solid border-2 border-gray-500 text-center hover:opacity-75"
        onClick={() => signOut()}
      >
        sign out
      </button>
      <button
        className="cursor-pointer border-solid border-2 border-gray-500 text-center hover:opacity-75"
        onClick={() => signIn()}
      >
        sign in
      </button>
    </div>
  );
}

"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect } from "react";
import { UserCard } from "../../components/user/userCard";
import { SigninSignoutButtons } from "../../components/user/signinSignoutButtons/buttons";

export default function Home() {
  const { data: session } = useSession();

  useEffect(() => {
    console.log(session);
  }, [session]);

  return (
    <div className="flex flex-col gap-2">
      {session && session.user ? <UserCard /> : <div>signed out</div>}
      <SigninSignoutButtons />
      {session ? null : (
        <button className="cursor-pointer border-solid border-2 border-gray-500 text-center hover:opacity-75">
          create user
        </button>
      )}
    </div>
  );
}

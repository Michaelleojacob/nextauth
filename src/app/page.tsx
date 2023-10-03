"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect } from "react";
import UserCard from "../../components/user/userCard";

export default function Home() {
  const { data: session } = useSession();

  useEffect(() => {
    console.log(session);
  }, [session]);

  return (
    <div>
      {session && session.user ? (
        <UserCard user={session.user} />
      ) : (
        <div>signed out</div>
      )}
      <div>home page</div>
      <div className="cursor-pointer" onClick={() => signOut()}>
        sign out
      </div>
      <div className="cursor-pointer" onClick={() => signIn()}>
        sign in
      </div>
    </div>
  );
}

"use client";
import { useSession, signOut } from "next-auth/react";

export default function Signout() {
  const { data: session } = useSession();
  return (
    <div>
      {session ? (
        <button onClick={() => signOut()}>signout</button>
      ) : (
        <button disabled={true} className="opacity-20">
          signout
        </button>
      )}
    </div>
  );
}

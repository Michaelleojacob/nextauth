"use client";

import Link from "next/link";
import { signIn, signOut } from "next-auth/react";

export function Nav() {
  return (
    <div className="flex gap-2 bg-blue-900 text-2xl justify-around">
      <Link href="/" className="cursor-pointer hover:opacity-75">
        home
      </Link>
      <div className="cursor-pointer hover:opacity-75" onClick={() => signIn()}>
        sign in
      </div>
      <div
        className="cursor-pointer hover:opacity-75"
        onClick={() => signOut()}
      >
        sign out
      </div>
      <Link href="/server" className="cursor-pointer hover:opacity-75">
        server
      </Link>
      <Link href="/client" className="cursor-pointer hover:opacity-75">
        client
      </Link>
      <Link href="/extra" className="cursor-pointer hover:opacity-75">
        extra
      </Link>
      <Link href="/protected" className="cursor-pointer hover:opacity-75">
        protected
      </Link>
    </div>
  );
}

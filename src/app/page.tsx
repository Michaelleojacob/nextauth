"use client";

import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { UserCard } from "./components/user/userCard";

export default function Home() {
  const { data: session } = useSession();

  useEffect(() => {
    console.log(session);
  }, [session]);

  return (
    <div>
      <div>this is the home page</div>
      <div>
        it is a client component to make use of useEffect as to log the current
        session
      </div>
      <UserCard />
    </div>
  );
}

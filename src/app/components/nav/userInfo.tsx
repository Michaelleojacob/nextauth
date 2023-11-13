"use client";

import { useSession } from "next-auth/react";

export default function UserInfo() {
  const { data: session } = useSession();
  return <div>{session ? session.user?.name : "not signed in"}</div>;
}
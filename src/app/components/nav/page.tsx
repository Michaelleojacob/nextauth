import Link from "next/link";
import { getSession } from "next-auth/react";

export default async function Nav() {
  const session = await getSession();
  console.log(session);
  return (
    <div className="flex flex-row bg-blue-950 content-between justify-between">
      <div className="flex flex-row gap-3">
        <Link href="/">home</Link>
        <Link href="/server">server</Link>
        <Link href="/client">client</Link>
        <Link href="/signin">signin</Link>
        <Link href="/signout">signout</Link>
      </div>
      {session ? <div>{session.user?.name}</div> : <div>no user</div>}
    </div>
  );
}

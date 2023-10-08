import Link from "next/link";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import SigninButton from "./signinButton";
import SignOutButton from "./signinoutButton";

export default async function Nav() {
  const session = await getServerSession(options);
  return (
    <div className="flex gap-2 bg-blue-900 text-2xl justify-around">
      <Link href="/" className="cursor-pointer hover:opacity-75">
        home
      </Link>
      {session ? <Link href="/account">account</Link> : <SigninButton />}
      {session ? <SignOutButton /> : <p className="opacity-25">sign out</p>}
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

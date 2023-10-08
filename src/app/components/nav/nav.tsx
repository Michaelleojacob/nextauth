import Link from "next/link";
import SigninButton from "./signinButton";
import SignOutButton from "./signinoutButton";

export function Nav() {
  return (
    <div className="flex gap-2 bg-blue-900 text-2xl justify-around">
      <Link href="/" className="cursor-pointer hover:opacity-75">
        home
      </Link>
      <SigninButton />
      <SignOutButton />
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

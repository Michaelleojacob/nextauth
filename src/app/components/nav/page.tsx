import SignInButton from "../clientButtons/signin";
import SignOutButton from "../clientButtons/signout";
import NavUserStatus from "./navUserStatus";
import Link from "next/link";

export default function Nav() {
  return (
    <pre>
      <div className="flex flex-row bg-blue-900 justify-between">
        <div className="flex flex-row gap-3">
          <Link href="/">home</Link>
          <SignInButton />
          <SignOutButton />
          <Link href="protected">protected</Link>
        </div>
        <NavUserStatus />
      </div>
    </pre>
  );
}

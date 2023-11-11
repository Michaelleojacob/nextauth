import Link from "next/link";
import UserInfo from "./userInfo";
import Signout from "./signout";

export default function Nav() {
  return (
    <div className="flex flex-row bg-blue-950 content-between justify-between">
      <div className="flex flex-row gap-3">
        <Link href="/">home</Link>
        <Link href="/server">server</Link>
        <Link href="/client">client</Link>
        <Link href="/create">create</Link>
        <Link href="/signin">signin</Link>
        <Signout />
      </div>
      <UserInfo />
    </div>
  );
}

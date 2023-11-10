import Link from "next/link";

export default function Nav() {
  return (
    <div className="flex flex-row bg-blue-950 gap-3">
      <Link href="/">home</Link>
      <Link href="/server">server</Link>
      <Link href="/client">client</Link>
      <Link href="/signin">signin</Link>
      <Link href="/signout">signout</Link>
    </div>
  );
}

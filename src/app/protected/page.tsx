import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Protected() {
  const session = await getServerSession();
  if (!session) return redirect("/");
  return (
    <pre>
      <div>protected</div>
      <div>you will only be able to see this page if logged in</div>
      <div>{session ? <p>hello, {session.user?.name} </p> : null}</div>
    </pre>
  );
}

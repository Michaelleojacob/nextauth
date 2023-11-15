import { getServerSession } from "next-auth";

export default async function Protected() {
  const session = await getServerSession();
  return (
    <pre>
      <div>protected</div>
      <div>you will only be able to see this page if logged in</div>
      <div>{session ? <p>hello, {session.user?.name} </p> : null}</div>
    </pre>
  );
}

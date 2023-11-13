import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";

interface User {
  user: {
    name: string;
    email?: string; // Optional
    image?: string; // Optional
  };
}

export default async function SmartServer() {
  const session: User | null = await getServerSession(options);
  console.log(session);
  return (
    <pre>
      <div>this server-side component should be able to get the session</div>
      <div>{session ? session.user.name : null}</div>
    </pre>
  );
}

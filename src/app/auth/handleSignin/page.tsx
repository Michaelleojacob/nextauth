import { redirect } from "next/navigation";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";

export default async function HandleSignin() {
  const session = await getServerSession(options);
  return <div>{session ? "account" : "signin"}</div>;
}

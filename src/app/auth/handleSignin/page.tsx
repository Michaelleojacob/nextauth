// import { redirect } from "next/navigation";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";

/**
 * child element for account and signin ?
 * or
 * redirect to the correct page ?
 *
 * session ? <Account /> : <Signin />;
 * or session ? redirect('/user/account/') : redirect('/auth/signin');
 */

export default async function HandleSignin() {
  const session = await getServerSession(options);
  return <div>{session ? "account" : "signin"}</div>;
}

import { redirect } from "next/navigation";
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

/**
 * redirect account as it should be /user/account or /user -> /user/page.tsx or /account -> /account/page.tsx
 * signin should be under auth, which we are already under
 * /auth/signin/page.tsx
 */

export default async function HandleSignin() {
  const session = await getServerSession(options);
  return <div>{session ? redirect("/account") : redirect("/auth/signin")}</div>;
}

import { NextResponse } from "next/server";
import { redirect } from "next/navigation";
import { signIn } from "next-auth/react";

export async function POST(request: Request) {
  const formdata = await request.formData();
  const username = formdata.get("username");
  const password = formdata.get("password");
  const csrfToken = formdata.get("csrfToken");
  console.log(username, password, csrfToken);

  const lol = await signIn("credentials", { username, password });
  console.log(lol);
  return redirect("http://localhost:3000/auth/signin");
}

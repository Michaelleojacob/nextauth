import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import { getCsrfToken } from "next-auth/react";

export default function SignIn({
  csrfToken,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <form
      method="post"
      // action="/api/auth/callback/credentials"
      action="/api/auth/signin"
      className="flex flex-col gap-2 items-start"
      autoComplete="off"
    >
      <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
      <label>
        Username
        <input name="username" type="text" className="text-black" />
      </label>
      <label>
        Password
        <input name="password" type="password" className="text-black" />
      </label>
      <button type="submit">Sign in with Credentials</button>
    </form>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
}

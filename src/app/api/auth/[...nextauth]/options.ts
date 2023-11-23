import type {
  GetServerSidePropsContext,
  NextApiRequest,
  NextApiResponse,
} from "next";
import type { NextAuthOptions } from "next-auth";
import { getServerSession } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import handleSignin from "../../user/signin/handleSignin";

export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        name: { label: "Username", type: "text", placeholder: "jsmith" },
        pass: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials) return null;
        const user = { name: credentials.name, pass: credentials.pass };
        const thing = await handleSignin({ user });
        console.log(thing);
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/signin",
  },
} satisfies NextAuthOptions;

// Use it in server contexts
export function auth(
  ...args:
    | [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]]
    | [NextApiRequest, NextApiResponse]
    | []
) {
  return getServerSession(...args, authOptions);
}

// CredentialsProvider({
//     name: "Credentials",
//     credentials: {
//       name: { label: "Username", type: "text", placeholder: "jsmith" },
//       pass: { label: "Password", type: "password" },
//     },
//     async authorize(credentials, req) {
//       const user = {
//         id: "1",
//         name: "mig",
//         pass: "mig",
//       };
//       if (user.name === credentials?.name && user.pass === credentials?.pass)
//         return user;
//       return null;
//     },
//   }),

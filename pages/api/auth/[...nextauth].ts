import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

// Check if the environment variables are defined
if (!process.env.GITHUB_ID || !process.env.GITHUB_SECRET) {
  throw new Error("GitHub environment variables are not defined.");
}

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
};

export default NextAuth(authOptions);

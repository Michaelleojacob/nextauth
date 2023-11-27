import prisma from "../../../../../prisma/db";
import bcrypt from "bcrypt";

interface User {
  name: string;
  pass: string;
}

export default async function handleSignin({ user }: { user: User }) {
  const dbuser = await prisma.user.findUnique({
    where: { name: user.name },
  });
  if (!dbuser) return null;

  return (await bcrypt.compare(user.pass, dbuser?.password)) ? dbuser : null;
}

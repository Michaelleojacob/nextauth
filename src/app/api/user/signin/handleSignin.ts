import prisma from "../../../../../prisma/db";
import bcrypt from "bcrypt";

interface User {
  name: string;
  pass: string;
}

export default async function handleSignin({ user }: { user: User }) {
  console.log(user);
  const checkIfUserExists = await prisma.user.findUnique({
    where: { name: user.name },
  });
  if (!checkIfUserExists) return false;
  return await bcrypt.compare(user.pass, checkIfUserExists?.password);
}

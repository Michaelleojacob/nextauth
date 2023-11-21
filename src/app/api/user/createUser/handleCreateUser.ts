import prisma from "../../../../../prisma/db";
import bcrypt from "bcrypt";

interface User {
  username: string;
  password: string;
  confirmpassword: string;
}

/**
 * check password and confirm match
 *
 * check username is not taken
 * probably with a GET
 *
 * IF username is not taken,
 * salt password
 * create user with salted password
 */

const saltRounds = 10;

async function isNameTaken(name: string) {
  const res = await prisma.user.findUnique({ where: { name } });
  return res ? true : false;
}

export default async function handleCreateUser({ user }: { user: User }) {
  const { username, password, confirmpassword } = user;

  //check password and confirm password match
  if (password !== confirmpassword)
    return { status: false, msg: "passwords do not match" };

  // check if user name is taken
  const nametaken = await isNameTaken(username);
  if (nametaken) return { status: false, msg: "user name is taken" };

  // if username is NOT taken, encrypt password
  const salt = await bcrypt.genSalt(saltRounds);
  const hash = await bcrypt.hash(password, salt);

  // create user with hash password;
  const newUser = await prisma.user.create({
    data: { name: username, password: hash },
  });
  return { status: true, msg: "new user created" };
}

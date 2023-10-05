import { v4 as uuidv4 } from "uuid";
import prisma from "../../../../prisma/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

// get all users
export async function GET(req: NextApiRequest, res: NextApiResponse) {
  try {
    const users = await prisma.fakeUser.findMany({});
    return NextResponse.json({ succ: true, msg: "got all users", users });
  } catch (e) {
    console.log(e);
    return NextResponse.json({
      succ: false,
      msg: "error getting all users",
      e,
    });
  }
}

// create single user (manual entry)
export async function POST(req: NextApiRequest, res: NextApiResponse) {
  try {
    const newUser = await prisma.fakeUser.create({
      data: {
        uuid: uuidv4(),
        email: "a@gmail.com",
        name: "a",
        password: "a",
      },
    });
    console.log(newUser);
    return NextResponse.json({
      succ: true,
      msg: `user ${newUser.email} created`,
      newUser,
    });
  } catch (e) {
    console.log(e);
    return NextResponse.json({ succ: false, msg: "error creating user" });
  }
}

// update user
export async function UPDATE(req: NextApiRequest, res: NextApiResponse) {
  try {
    const updateUser = await prisma.fakeUser.update({
      where: {
        email: "n@gmail.com",
      },
      data: {
        name: "migs",
        password: "m",
      },
    });
    return NextResponse.json({
      succ: true,
      msg: `user ${updateUser.email} updated`,
      updateUser,
    });
  } catch (e) {
    console.log(e);
    return NextResponse.json({ succ: false, msg: "error updating a user" });
  }
}

// delete user
export async function DELETE(req: NextApiRequest, res: NextApiResponse) {
  try {
    const delUser = await prisma.fakeUser.delete({
      where: {
        // email: 'n@gmail.com',
        id: 6,
        // uuid:'use get() to find this info'
      },
    });
    return NextResponse.json({
      succ: true,
      msg: `${delUser.email} was deleted`,
      delUser,
    });
  } catch (e) {
    console.log(e);
    return NextResponse.json({ succ: false, msg: "error deleting a user" });
  }
}

// delete all users;
export async function PATCH(req: NextApiRequest, res: NextApiResponse) {
  try {
    const deleteAll = await prisma.fakeUser.deleteMany({});
    return NextResponse.json({
      succ: true,
      msg: "delete all users",
      deleteAll,
    });
  } catch (e) {
    console.log(e);
    return NextResponse.json({ succ: false, msg: "error deleting all users" });
  }
}

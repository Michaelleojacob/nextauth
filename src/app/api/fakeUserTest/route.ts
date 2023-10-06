import { v4 as uuidv4 } from "uuid";
import prisma from "../../../../prisma/prisma";
import { NextRequest, NextResponse } from "next/server";

// get all users
export async function GET(req: NextRequest, res: NextResponse) {
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
export async function POST(req: NextRequest, res: NextResponse) {
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

// delete user
export async function DELETE(req: NextRequest, res: NextResponse) {
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
export async function PATCH(req: NextRequest, res: NextResponse) {
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

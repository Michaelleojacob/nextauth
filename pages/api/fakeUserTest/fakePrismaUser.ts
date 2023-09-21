import { v4 as uuidv4 } from "uuid";
import prisma from "../../../prisma/prisma";
import { NextApiRequest, NextApiResponse } from "next";

// handle all CRUD operations
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") return await get(req, res);
  if (req.method === "POST") return await post(req, res);
  if (req.method === "PUT") return await update(req, res);
  if (req.method === "DELETE") return await del(req, res);
  if (req.method === "PATCH") return await deleteAll(req, res);
}

// get all users
const get = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const users = await prisma.fakeUser.findMany({});
    return res.status(200).send({ succ: true, msg: "got all users", users });
  } catch (e) {
    console.log(e);
    return res
      .status(400)
      .send({ succ: false, msg: "error in getting all users" });
  }
};

// create single user (manual entry)
const post = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const newUser = await prisma.fakeUser.create({
      data: {
        uuid: uuidv4(),
        email: "n@gmail.com",
        name: "n",
        password: "n",
      },
    });
    console.log(newUser);
    return res
      .status(200)
      .send({ succ: true, msg: `user ${newUser.email} created`, newUser });
  } catch (e) {
    console.log(e);
    return res.status(400).send({ succ: false, msg: "error creating user" });
  }
};

// update user
const update = async (req: NextApiRequest, res: NextApiResponse) => {
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
    return res.status(200).send({
      succ: true,
      msg: `user ${updateUser.email} updated`,
      updateUser,
    });
  } catch (e) {
    console.log(e);
    return res.status(400).send({ succ: false, msg: "error updating a user" });
  }
};

// delete user
const del = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const delUser = await prisma.fakeUser.delete({
      where: {
        // email: 'n@gmail.com',
        id: 1,
        // uuid:'use get() to find this info'
      },
    });
    return res
      .status(200)
      .send({ succ: true, msg: `${delUser.email} was deleted`, delUser });
  } catch (e) {
    console.log(e);
    return res.status(400).send({ succ: false, msg: "error deleting a user" });
  }
};

// delete all users;
const deleteAll = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const deleteAll = await prisma.fakeUser.deleteMany({});
    return res
      .status(200)
      .send({ succ: true, msg: "delete all users", deleteAll });
  } catch (e) {
    console.log(e);
    return res
      .status(400)
      .send({ succ: false, msg: "error deleting all users" });
  }
};

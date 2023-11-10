import { NextApiRequest, NextApiResponse } from "next";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  console.log("hi");
  return res.json({ msg: "hi", succ: true });
}

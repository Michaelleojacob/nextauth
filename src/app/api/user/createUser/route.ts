import prisma from "../../../../../prisma/db";

export async function GET(req: Request, res: Response) {
  console.log(req);
  return Response.json({ msg: "create user route.ts GET" });
}

export async function POST(req: Request, res: Response) {
  const body = await req.json();
  console.log(body);
  const { user } = body;
  if (user.password === user.confirmpassword) {
    const test = await prisma.user.create({
      data: { name: user.username, password: user.password },
    });
    console.log(test);
  }
  return Response.json({ msg: "create user route.ts POST" });
}

import handleCreateUser from "./handleCreateUser";

export async function GET(req: Request, res: Response) {
  console.log(req);
  return Response.json({ msg: "create user route.ts GET" });
}

export async function POST(req: Request, res: Response) {
  const body = await req.json();
  const { user } = body;
  const newUserData = await handleCreateUser({ user });
  return Response.json({ newUserData });
}

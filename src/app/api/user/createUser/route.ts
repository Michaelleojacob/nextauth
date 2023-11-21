export async function GET(req: Request, res: Response) {
  console.log(req);
  return Response.json({ msg: "create user route.ts GET" });
}

export async function POST(req: Request, res: Response) {
  const body = await req.json();
  console.log(body);
  return Response.json({ msg: "create user route.ts POST" });
}

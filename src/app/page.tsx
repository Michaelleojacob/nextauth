import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession();
  return (
    <div>
      <div>hi</div>
    </div>
  );
}

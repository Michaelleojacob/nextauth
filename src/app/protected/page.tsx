import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Protected() {
  const session = await getServerSession();
  if (!session) return redirect("/");
  return (
    <div>
      <div>protected</div>
    </div>
  );
}

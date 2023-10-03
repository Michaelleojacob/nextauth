import Image from "next/image";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

export function HandleUserCard() {
  const { data: session } = useSession();
  return (
    <div>
      {session && session.user ? <UserCard /> : <div>not logged in</div>}
    </div>
  );
}

export function UserCard() {
  const { data: session } = useSession();

  useEffect(() => {
    if (!session?.user) return;
  }, [session]);

  return (
    <div>
      {session?.user?.name ? <div>{session.user.name}</div> : null}
      {session?.user?.email ? <div>{session.user.email}</div> : null}
      {session?.user?.image ? (
        <Image
          src={session?.user?.image}
          alt="user-image"
          width={50}
          height={50}
          style={{ borderRadius: "100%" }}
        ></Image>
      ) : null}
    </div>
  );
}

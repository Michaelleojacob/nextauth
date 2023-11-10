import Image from "next/image";
import { useSession } from "next-auth/react";

export function UserCard() {
  const { data: session } = useSession();

  // if no user, return not logged in
  if (!session?.user) return <div>Not logged in</div>;

  const { name, email, image } = session.user;

  return (
    <div>
      {name ? <div>{name}</div> : null}
      {email ? <div>{email}</div> : null}
      {image ? (
        <Image
          src={image}
          alt="user-image"
          width={50}
          height={50}
          style={{ borderRadius: "100%" }}
        ></Image>
      ) : null}
    </div>
  );
}

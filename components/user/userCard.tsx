import Image from "next/image";

interface UserData {
  name?: string | null | undefined;
  email?: string | null | undefined;
  image?: string | null | undefined;
}

export default function UserCard({ user }: { user: UserData }) {
  return (
    <div>
      {user.name ? <div>{user.name}</div> : null}
      {user.email ? <div>{user.email}</div> : null}
      {user.image ? (
        <Image
          src={user.image}
          alt="user-image"
          width={50}
          height={50}
          style={{ borderRadius: "100%" }}
        ></Image>
      ) : null}
    </div>
  );
}

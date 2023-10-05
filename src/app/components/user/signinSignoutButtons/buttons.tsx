import { useSession, signIn, signOut } from "next-auth/react";

export function SigninSignoutButtons() {
  const { data: session } = useSession();
  return (
    <div>
      {session ? (
        <button
          className="cursor-pointer border-solid border-2 border-gray-500 text-center hover:opacity-75"
          onClick={() => signOut()}
        >
          sign out
        </button>
      ) : (
        <button
          className="cursor-pointer border-solid border-2 border-gray-500 text-center hover:opacity-75"
          onClick={() => signIn()}
        >
          sign in
        </button>
      )}
    </div>
  );
}

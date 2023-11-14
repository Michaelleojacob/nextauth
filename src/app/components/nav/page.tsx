import SignInButton from "../clientButtons/signin";
import SignOutButton from "../clientButtons/signout";
import NavUserStatus from "./navUserStatus";

export default function Nav() {
  return (
    <pre>
      <div className="flex flex-row bg-blue-900 justify-between">
        <div className="flex flex-row gap-3">
          <SignInButton />
          <SignOutButton />
        </div>
        <NavUserStatus />
      </div>
    </pre>
  );
}

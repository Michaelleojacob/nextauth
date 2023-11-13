"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function CredentialsForm() {
  const router = useRouter();
  const [showError, setShowError] = useState(false);
  const [user, setUser] = useState({ name: "", pass: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      redirect: false,
      username: user.name,
      password: user.pass,
    });
    if (res?.ok) return router.push("/");
    if (!res?.ok) setShowError(true);
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-start">
      <label>
        username
        <input
          className="text-black"
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
        />
      </label>
      <label>
        password
        <input
          className="text-black"
          type="password"
          name="pass"
          value={user.pass}
          onChange={handleChange}
        />
      </label>
      <button>log in</button>
      {showError ? <div>wrong username or password</div> : null}
    </form>
  );
}

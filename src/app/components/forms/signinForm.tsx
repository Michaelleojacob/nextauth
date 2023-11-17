"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function SigninForm() {
  const [user, setUser] = useState({ name: "", pass: "" });
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      redirect: false,
      name: user.name,
      pass: user.pass,
    });
    if (res?.ok) router.push("/protected");
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-start">
      <label>
        name
        <input
          type="text"
          name="name"
          onChange={handleChange}
          className="text-black"
        />
      </label>
      <label>
        password
        <input
          type="password"
          name="pass"
          onChange={handleChange}
          className="text-black"
        />
      </label>
      <button type="submit">submit</button>
    </form>
  );
}

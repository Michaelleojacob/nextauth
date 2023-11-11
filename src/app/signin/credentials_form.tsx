"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";

export default function CredentialsForm() {
  const [user, setUser] = useState({ name: "", pass: "" });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signIn("credentials", { username: user.name, password: user.pass });
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
    </form>
  );
}

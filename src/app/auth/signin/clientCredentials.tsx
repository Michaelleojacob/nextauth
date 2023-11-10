"use client";

import { FormEvent, ChangeEvent } from "react";
import { ClientSafeProvider } from "next-auth/react";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function ClientCredentials({
  provider,
}: {
  provider: ClientSafeProvider;
}) {
  const [user, setUser] = useState({ username: "", password: "" });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signIn("credentials", { username: user.username, password: user.password });
  };

  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="off"
      className="flex flex-col items-start gap-2"
    >
      <label>
        username
        <input
          name="username"
          type="text"
          className="text-black"
          autoComplete="off"
          value={user.username}
          onChange={handleChange}
        />
      </label>
      <label>
        password
        <input
          name="password"
          type="password"
          className="text-black"
          autoComplete="off"
          value={user.password}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Sign in with {provider.name}</button>
    </form>
  );
}

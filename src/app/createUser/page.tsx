"use client";
import { useState } from "react";

export default function CreateUserForm() {
  const [user, setUser] = useState({
    username: "",
    password: "",
    confirmpassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const raw = await fetch("/api/user/createUser", {
      method: "POST",
      mode: "same-origin",
      cache: "no-cache",
      credentials: "same-origin",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user, time: Date.now() }),
    });
    const data = await raw.json();
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-start gap-3">
      <label>
        username
        <input
          type="text"
          name="username"
          value={user.username}
          className="text-black"
          onChange={handleChange}
        />
      </label>
      <label>
        password
        <input
          type="password"
          name="password"
          value={user.password}
          className="text-black"
          onChange={handleChange}
        />
      </label>
      <label className="block">
        confirm password
        <input
          type="password"
          name="confirmpassword"
          value={user.confirmpassword}
          className="text-black"
          onChange={handleChange}
        />
      </label>
      <button type="submit">submit</button>
    </form>
  );
}

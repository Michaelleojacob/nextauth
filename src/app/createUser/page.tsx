"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateUserForm() {
  const router = useRouter();
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
    if (user.password !== user.confirmpassword)
      return console.log("password and confirm password does not match");
    const raw = await fetch("/api/user/createUser", {
      method: "POST",
      mode: "same-origin",
      cache: "no-cache",
      credentials: "same-origin",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user, time: Date.now() }),
    });
    const { newUserData } = await raw.json();
    if (newUserData.status) {
      router.push("/signin");
    }
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
          required
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
          required
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
          required
        />
      </label>
      <button type="submit">submit</button>
    </form>
  );
}

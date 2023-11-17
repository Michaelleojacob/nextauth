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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-start gap-3">
      <label>
        {" "}
        username
        <input
          type="text"
          name="username"
          value={user.username}
          className="text-black"
        />
      </label>
      <label>
        <input
          type="text"
          name="username"
          value={user.username}
          className="text-black"
        />
      </label>
      <label>
        <input />
      </label>
      <button type="submit"></button>
    </form>
  );
}

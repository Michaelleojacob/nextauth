import { FormEvent } from "react";

export default function ServerSignin() {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const response = await fetch("/api/serverSignin", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    console.log(data);
  }
  return (
    <form onSubmit={onSubmit}>
      <label>
        <input type="text" name="name" className="text-black" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

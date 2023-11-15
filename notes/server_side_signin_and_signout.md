decided trying to get and post nextauth signin and signout from server components is not worth it.

based on this article: https://github.com/nextauthjs/next-auth/issues/45

Doesn't seem worth it to do signin or signout from the server. Feels like too much work for not enough payoff.

Need to get out of the mindset that everything should be a server component.

```tsx
// in src/app/serverSignin/page.tsx
import { FormEvent } from "react";

export default function ServerSignin() {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const response = await fetch(" /api/auth/signin/credentials", {
      method: "POST",
      body: formData,
    });
  }
  return (
    <form onSubmit={onSubmit}>
      <label>
        <input type="text" name="name" className="text-black" />
      </label>
      <label>
        <input type="password" name="pass" className="text-black" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
```

```ts
// in src/app/api/serverSignin/route.ts
export async function POST() {
  return Response.json({ succ: true });
}
```

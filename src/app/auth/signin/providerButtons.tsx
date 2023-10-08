"use client";

import { signIn } from "next-auth/react";
import { ClientSafeProvider } from "next-auth/react";

export default function ProviderButtons({
  provider,
}: {
  provider: ClientSafeProvider;
}) {
  return (
    <div>
      <button onClick={() => signIn(provider.id)}>
        Sign in with {provider.name}
      </button>
    </div>
  );
}

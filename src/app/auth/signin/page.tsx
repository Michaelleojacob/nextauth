import { getProviders } from "next-auth/react";
import { redirect } from "next/navigation";
import ProviderButtons from "./providerButtons";

export default async function Signin() {
  const providers = await getProviders();
  if (!providers) return redirect("/");
  return (
    <>
      {Object.values(providers).map((provider) => (
        <div key={provider.id}>
          {provider.id === "credentials" ? (
            "thing"
          ) : (
            <ProviderButtons provider={provider} key={provider.name} />
          )}
        </div>
      ))}
    </>
  );
}

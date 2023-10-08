import { getProviders } from "next-auth/react";
import { redirect } from "next/navigation";
import ProviderButtons from "./providerButtons";

export default async function Signin() {
  const providers = await getProviders();
  if (!providers) return redirect("/");
  return (
    <>
      {Object.values(providers).map((provider) => (
        <ProviderButtons provider={provider} key={provider.name} />
      ))}
    </>
  );
}

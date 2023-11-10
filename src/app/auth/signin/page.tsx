import { getProviders, getCsrfToken } from "next-auth/react";
import { redirect } from "next/navigation";
import ProviderButtons from "./providerButtons";
// import ServerCredentials from "./serverCredentials";
import ClientCredentials from "./clientCredentials";

export default async function Signin() {
  const providers = await getProviders();
  const csrfToken = await getCsrfToken();
  if (!providers) return redirect("/");
  return (
    <>
      {Object.values(providers).map((provider) => (
        <div key={provider.id}>
          {provider.id === "credentials" ? (
            <div>
              <ClientCredentials provider={provider} />
              {/* <ServerCredentials csrfToken={csrfToken} /> */}
            </div>
          ) : (
            <ProviderButtons provider={provider} />
          )}
        </div>
      ))}
    </>
  );
}

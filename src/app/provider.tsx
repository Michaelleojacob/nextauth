"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import Nav from "./components/nav/page";

const Provider = ({
  children,
  session,
}: {
  children: ReactNode;
  session: any;
}) => {
  return (
    <SessionProvider session={session}>
      <Nav />
      {children}
    </SessionProvider>
  );
};

export default Provider;

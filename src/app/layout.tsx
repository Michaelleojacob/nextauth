import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AuthEntryPointLayout from "./authEntryPoint/layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "lol",
  description: "lol",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col items-start gap-2">
          <AuthEntryPointLayout>{children}</AuthEntryPointLayout>
        </div>
      </body>
    </html>
  );
}

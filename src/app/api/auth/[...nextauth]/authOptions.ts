/**
 * this file is specifically for server side routes and components
 * options and route.ts are for client side components
 */

import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import { options } from "./options";

export const authOptions: NextAuthOptions = options;

export default NextAuth(authOptions);

import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

import bcrypt from "bcrypt";
import prisma from "../../../prisma";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Username",

      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials?.password || !credentials?.email) return null;
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });
        if (!user) return null;
        const matchPassword = bcrypt.compare(
          credentials.password,
          user.password
        );
        if (!matchPassword) return null;

        return user;
      },
    }),
  ],

  callbacks: {
    async session({ session, token, user }) {
      console.log("Session", session);
      console.log("user", user);
      return session;
    },
  },

  session: {
    strategy: "jwt",
  },
};

export default NextAuth(authOptions);

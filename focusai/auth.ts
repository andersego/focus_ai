import { PrismaAdapter } from "@auth/prisma-adapter"
import { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import prisma from "@/lib/prisma"
import bcrypt from "bcryptjs"

export const authOptions: NextAuthOptions = {
  // ... other config remains the same ...

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
      }
      return session;
    },
    async redirect({ url, baseUrl }) {
      // Always redirect to the main page after sign in
      if (url.startsWith('/auth/signin')) {
        return baseUrl;
      }
      // Allow internal navigation
      if (url.startsWith(baseUrl) || url.startsWith('/')) {
        return url;
      }
      return baseUrl;
    }
  },
  // ... rest of the config remains the same ...
} 
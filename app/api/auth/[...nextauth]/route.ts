import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import type { NextAuthOptions } from "next-auth";

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      // @ts-ignore
      async authorize(credentials) {
        
        if (!credentials?.username || !credentials?.password) {
          throw new Error("Missing credentials");
        }

        const user = await prisma.user.findUnique({
          where: { username: credentials.username },
        });

        if (!user) throw new Error("User not found");

        const isValid = await bcrypt.compare(credentials.password, user.password);
        if (!isValid) throw new Error("Invalid password");

       if (user){
        return {
          id: user.id.toString(),
          email: user.email,
          username: user.username,
          user
        };
        
       }
       return null

       
      },
      
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      console.log("JWT callback →", { user, token });
      if (user) {
        
        token.id = typeof user.id === 'string' ? parseInt(user.id, 10) : user.id;
        token.email = user.email;
        token.username = user.username; // 👈 Fix here
        console.log(user)
      }
      return token;
    },
    async session({ session, token }) {
      console.log("Session callback →", { token, session });
      if (session.user && token) {
        session.user.id = typeof token.sub === 'string' ? parseInt(token.sub, 10) : token.sub;
        session.user.email = token.email;
        session.user.username = token.username// 👈 Fix here
      }
      return session;
    }
  }
  
};

// 👇 Make sure to export authOptions separately for getServerSession()
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

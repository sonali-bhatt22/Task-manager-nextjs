// lib/auth.ts
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function getSessionUser() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user || !session.user.username) {
    throw new Error("Unauthorized or incomplete session");
  }
  return session.user;
}



import prisma from "../db";
import { redirect } from "next/navigation";
import { getSessionUser } from "../auth";


export async function createTodo(data: FormData) {
  "use server";
  const title = data.get("title")?.valueOf();
  if (typeof title !== "string" || title.length === 0) {
    throw new Error("Invalid Title");
  }
  const userSession = await getSessionUser();
  const user = await prisma.user.findUnique({
    where: { username: userSession.username },
  });
  if (!user) {
    throw new Error("No user found");
  }

  await prisma.todos.create({
    data: { title, complete: false, userId: user.id },
  });
  redirect("/todo");
}
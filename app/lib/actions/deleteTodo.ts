// app/lib/actions.ts
"use server"

import prisma from "../db"
import { getSessionUser } from "../auth"
import { redirect } from "next/navigation"

export async function deleteTodo(id: string) {
  const userSession = await getSessionUser()

  const todo = await prisma.todos.findUnique({ where: { id } })
  if (!todo || todo.userId !== userSession.id) {
    throw new Error("Unauthorized or todo not found")
  }

  await prisma.todos.delete({ where: { id } })

  redirect("/todo")
}

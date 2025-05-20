import Link from "next/link";
import prisma from "../lib/db";
import { TodoItem } from "../components/TodoItem";
import { title } from "process";
import { getSessionUser } from "../lib/auth";
import { redirect } from "next/navigation";

// const getTodos = () =>{
//     return prisma.todo.findMany()
// }


export default async function Todo() {
  "use server";
  const userSession = await getSessionUser();
  if (!userSession) {
    null;
  }
  const todos = await prisma.todos.findMany({
    where: {
      userId: userSession?.id,
    },
  });

  //     const user = await prisma.user.findFirst();
  //    if (!user) throw new Error("No user found");
  //     await prisma.todos.create({data: {title: "test", complete: false, userId: user.id}})

  // const todos = await getTodos()
  return (
    <>
      <header className="flex justify-between m-10 items-center">
        <h1 className="text-2xl">{userSession?.username}'s Todos</h1>
        <Link href="/new" className="border-2 border-white px-2 py-1 rounded">
          Create Todo
        </Link>
      </header>
      {todos?.length > 0 && (
        <ul className="m-10 text-lg bg-green-700 gap-2 rounded flex flex-col p-2 w-[50%]">
          {todos.map((todo) => (
            <TodoItem key={todo.id} {...todo} />
          ))}
        </ul>
      )}
    </>
  );
}

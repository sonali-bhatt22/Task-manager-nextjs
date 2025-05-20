import Link from "next/link";
import { createTodo } from "../lib/actions/createTodo";
export default function New() {
  return (
    <>
      <header className="flex justify-between items-center p-10">
        <h1 className="text-2xl">Create Todo</h1>
      </header>
      <form className="flex gap-2 flex-col px-10" action={createTodo}>
        <input
          type="text"
          name="title"
          className="border border-slate-100 rounded px-2 py-1 outline-none focus-wihtin:border-slate-100"
        />
        <div className="flex gap-3 justify-end">
          <Link
            href=".."
            className="border border-slate-100 rounded px-2 py-1 outline-none focus-wihtin:border-slate-100"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="border border-slate-100 rounded px-2 outline-none focus-wihtin:border-slate-100"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

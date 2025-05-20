
"use client"
import { deleteTodo } from "../lib/actions/deleteTodo"
import { useState } from "react";
import axios from "axios";
type TodoItemProp ={
    id: string
    title: string
    complete: boolean
    deleteTodo:  (id: string) => void;
}

export function TodoItem({id, title, complete}: TodoItemProp){
    const [isCompleted, setIsCompleted] = useState(complete);

    const handleCheck = async () => {
    const newCompleted = !isCompleted;
    setIsCompleted(newCompleted);

    try {
      await axios.patch(`/api/todo/${id}`, { complete: newCompleted });
    } catch (error) {
      console.error('Failed to update todo', error);
      setIsCompleted(!newCompleted); // revert on error
    }
  };
    return <li className="flex gap-2 items-center rounded bg-white text-black p-2 justify-between">
        <div className="flex gap-3">
            <input id={id} checked={isCompleted}
        onChange={handleCheck} type="checkbox" className="cursor-pointer peer w-5 h-5"/>
        <label htmlFor={id} className="peer-checked:line-through peer-checked:text-zinc-600">{title}</label>
        </div>
        <form action={deleteTodo.bind(null, id)}>
        <button type="submit" className="text-red-500 hover:scale-120">🚮</button>
      </form>
    </li>
}

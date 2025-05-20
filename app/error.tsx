"use client"
import Link from "next/link"
export default function Error(){
    return (
        <div className="justify-center flex items-center mt-[10%] flex-col">
            <h1>You are not signed up yet plz signup to see your todos</h1>
            <Link
          className="bg-green-400 mt-5 text-black py-2 text-sm px-2 rounded-md"
          href="/signup"
        >
          Get started{" "}
        </Link>{" "}
        </div>

    )
}
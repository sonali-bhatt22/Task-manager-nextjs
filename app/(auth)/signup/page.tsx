"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import Link from "next/link";
export default function Signup(){
    const username = useRef<HTMLInputElement>(null)
    const password = useRef<HTMLInputElement>(null)
    const email = useRef<HTMLInputElement>(null)
    const router = useRouter();
    return <div className="flex flex-col gap-5 justify-center items-center w-screen mt-40">
        
        <div className="border p-5 flex flex-col gap-3 bg-white text-black w-74 rounded-2xl">
            <h1 className="text-2xl font-bold mb-3">Create Your Account</h1>
            <input className="bg-zinc-300 p-2  rounded-full outline-green-400" type="email" placeholder="email" ref={email}/>
            <input className="bg-zinc-300 p-2  rounded-full outline-green-400" type="text" placeholder="username" ref={username}/>
            <input className="bg-zinc-300 p-2   rounded-full outline-green-400" type="password" placeholder="password" ref={password}/>
            
            <button className="mt-4 bg-black text-white p-3 rounded-2xl" onClick={async()=>{
                try {
                    await axios.post("http://localhost:3000/api/auth/signup", {
                        email: email.current?.value,
                        username: username.current?.value,
                        password: password.current?.value
                    })
                   router.push("/signin")
                } catch (error) {
                    console.log(error)
                }
            }}>Sign up</button>
            <span>Have an acoount? <Link className="bg-white text-green-500 py-1 text-sm px-2 rounded-full" href="/signin">Sign in </Link> <br /></span>
            
        </div>
       
    </div>
}

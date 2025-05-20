// "use client"
// import axios from "axios"

// export default function Signin(){
//     return <div className="flex justify-center items-center w-screen h-screen">
//         <div className="border p-5 flex flex-col gap-3 bg-white text-black h-1/3 rounded-2xl">
//             <input className="bg-zinc-400 p-2 rounded-full outline-cyan-400" type="text" placeholder="username"/>
//             <input className="bg-zinc-400 p-2 rounded-full outline-cyan-400" type="text" placeholder="password"/>
//             <button  className="mt-4 bg-black text-white p-3 rounded-2xl" onClick={()=>{
//                 axios.post("http://localhost:3000/api/v1/signin")
//             }}>Sign in</button>
//         </div>
//     </div>
// }
"use client";
import Link from "next/link";

import { useRef, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUserName] = useState("")
  const [password, setPassword] = useState("")

  async function handleLogin(e: React.FormEvent) {
    
    e.preventDefault();
    const result = await signIn("credentials", {
      username,
      password,
      redirect: false,
      //callbackUrl: "/api/v1/[...nextauth]/route.ts"
    });

    if (result?.ok) {
        router.push("/todo");
      } else {
        console.log("Login Error:", result?.error);
        alert(result?.error || "Login failed!");
      }
      

  }

  return (
    <div className="flex gap-4  flex-col justify-center items-center w-screen mt-40">
     
        <form onSubmit={handleLogin} className="border p-5 flex flex-col gap-3 bg-white text-black rounded-2xl">
           <h1 className="text-2xl flex justify-center font-bold">Sign In</h1>

          <input className="bg-zinc-300  p-2 rounded-full outline-green-400" type="text" placeholder="username" onChange={e => setUserName(e.target.value)} required/>
          <input className="bg-zinc-300 p-2 rounded-full outline-green-400" type="password" placeholder="password"  onChange={e => setPassword(e.target.value)} required/>
          <button type="submit" className="bg-black text-white p-3 rounded-2xl mt-4">Sign in</button>
           <span>Don't have an acoount? <Link className="bg-white text-green-500 py-1 text-sm px-2 rounded-full" href="/signup">Sign up </Link> <br /></span>
        </form>
    </div>
  );
}



import Link from "next/link"
import ClientLogout from "./ClientLogout"
import NetworkStatus from "./NetworkStatus"
export default function Nav(){
    return (
        <div>
            <nav className="border-b-1 border-green-400 h-12 flex items-center justify-between px-6">
        <ul className="flex gap-10">
          <Link href="/">Home</Link>
          <Link href="/todo">Tasks</Link>
          <Link href="/about">About</Link>
          <NetworkStatus/>
          
        </ul>

        <div className="flex items-center justify-end gap-3">
          <ClientLogout />
        </div>
      </nav>
        </div>
    )
}
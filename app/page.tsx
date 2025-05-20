import Link from "next/link";
import ClientLogout from "./components/ClientLogout";
import Nav from "./components/Nav"
export default function Home() {
  return (
    <div className="text-lg w-full h overflow-x-hidden  ">
      
      <div className="flex flex-col justify-center items-center mt-50">
        <h1 className="text-4xl font-bold">Organize Your Life with ToDo+</h1>
        <p className="text-lg mt-2 text-gray-400">
          A secure and simple way to manage your daily tasks — personalized just
          for you.
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <li>✅ Add and complete tasks easily</li>
          <li>🔒 Secure login with NextAuth</li>
          <li>🗃️ Your data is saved with Prisma</li>
          
        </ul>
        <Link
          className="bg-green-400 mt-5 text-black py-2 text-sm px-2 rounded-md"
          href="/signup"
        >
          Get started{" "}
        </Link>{" "}
        <br />
      </div>
    </div>
  );
}

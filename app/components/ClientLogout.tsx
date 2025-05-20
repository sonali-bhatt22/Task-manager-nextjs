"use client";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
export default function ClientLogout() {
  const router = useRouter();

  async function handleLogout() {
    await signOut({ redirect: false });
    router.push("/signin");
  }
  return (
    <button onClick={handleLogout} className="py-1 px-2 bg-red-500 text-sm text-white rounded-full">
      Logout
    </button>
  );
}


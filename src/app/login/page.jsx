"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
    } else {
      router.push("/tracker");
    }
  };
  console.log(process.env.NEXT_PUBLIC_SUPABASE_URL);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-black to-purple-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 text-white border border-white/20">

        <h1 className="text-3xl font-bold text-center mb-6">
          🔐 Login
        </h1>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-lg bg-white/20"
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-lg bg-white/20"
          />

          <button
            type="submit"
            className="w-full p-3 rounded-lg bg-indigo-500 hover:bg-indigo-600"
          >
            Login
          </button>
          <a href="/" className="block text-center mt-2 text-gray-300 hover:text-white">Back</a>
        </form>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import GlassCard from "../../components/liquidGlass";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("https://apisolidaria.onrender.com/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // permite cookies
        body: JSON.stringify({
          email,
          senha: password,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Erro ao fazer login");
      }

      const data = await response.json();
      console.log("Usuário logado:", data.user);

      router.push("/me"); // redireciona após login

    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || "Erro ao fazer login");
      } else {
        setError("Erro ao fazer login");
      }
    }
  };

  return (
    <div className="flex h-screen no-scrollbar">
      <div className="w-1/2 bg-[url('/imageHands.png')] bg-[length:700px_700px] bg-no-repeat bg-center flex items-center justify-start p-0">
        <GlassCard />
      </div>

      <div className="w-1/2 bg-gray-100 p-4 text-white flex items-center justify-center">
        <div className="flex flex-col items-center w-full max-w-md gap-y-4">
          <Image src="/user.png" width={36} height={36} alt="user" />

          <form
            onSubmit={handleLogin}
            className="bg-[#557a6a] p-8 rounded shadow-md w-full max-w-md"
          >
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border rounded mb-4"
              required
            />
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border rounded mb-4"
              required
            />
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <button
              type="submit"
              className="w-full bg-[#2f4e41] text-white p-3 rounded hover:bg-[#b6ebc3] transition"
            >
              Entrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
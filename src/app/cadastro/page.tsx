"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function RegisterPage() {
  const router = useRouter();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [tipo, setTipo] = useState(""); 
  const [error, setError] = useState("");
  const [sucesso, setSucesso] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSucesso("");

    try {
      const response = await fetch("https://apisolidaria.onrender.com/users/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome,
          email,
          senha,
          tipo,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Erro ao cadastrar usuário");
      }

      setSucesso("Usuário cadastrado com sucesso!");
      setTimeout(() => router.push("/login"), 1500);

    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || "Erro ao cadastrar");
      } else {
        setError("Erro ao cadastrar");
      }
    }
  };

  return (
    <div className="flex h-screen bg-gray-100 text-white items-center justify-center">
      <div className="bg-[#557a6a] p-8 rounded shadow-md w-full max-w-md">
        <div className="flex flex-col items-center gap-4 mb-4">
          <Image src="/user.png" width={36} height={36} alt="user" />
          <h1 className="text-xl font-bold">Cadastro</h1>
        </div>

        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="w-full bg-amber-50 p-3 border rounded mb-4 text-black"
            required
          />
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-amber-50 p-3 border rounded mb-4 text-black"
            required
          />
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="w-full bg-amber-50 p-3 border rounded mb-4 text-black"
            required
          />
          <select
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
            className="w-full bg-amber-50 p-3 border rounded mb-4 text-black"
            required
          >
            <option value="">Selecione o tipo de conta</option>
            <option value="ADMIN">Administrador</option>
            <option value="DOADOR">Doador</option>
            <option value="DONATARIO">Donatário</option>
          </select>

          {error && <p className="text-red-500 mb-4">{error}</p>}
          {sucesso && <p className="text-green-500 mb-4">{sucesso}</p>}

          <button
            type="submit"
            className="w-full bg-[#2f4e41] text-white p-3 rounded hover:bg-[#b6ebc3] transition"
          >
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}

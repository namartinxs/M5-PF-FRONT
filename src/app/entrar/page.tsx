"use client";

import { useRouter } from "next/navigation";

export default function AuthChoicePage() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col gap-6 w-full max-w-sm text-center">
        <h1 className="text-2xl font-bold text-gray-800">Bem-vindo!</h1>
        <p className="text-gray-600">Escolha uma opção para continuar:</p>

        <button
          onClick={() => router.push("/login")}
          className="bg-[#2f4e41] text-white py-2 px-4 rounded hover:bg-[#244134] transition"
        >
          Já tenho uma conta
        </button>

        <button
          onClick={() => router.push("/cadastro")}
          className="bg-[#b6ebc3] text-[#2f4e41] py-2 px-4 rounded hover:bg-[#a0d8ae] transition"
        >
          Criar nova conta
        </button>
      </div>
    </div>
  );
}

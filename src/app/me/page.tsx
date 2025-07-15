"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type User = {
  id: string;
  nome: string;
  email: string;
  tipo: string;
};

export default function MePage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("https://apisolidaria.onrender.com/users/me", {
          credentials: "include",
        });

        if (!res.ok) {
          throw new Error("Não autenticado");
        }

        const data = await res.json();
        setUser(data);
      } catch (err) {
        console.error("Não autenticado:", err);
        router.push("/login"); // redireciona se não estiver logado
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [router]);

  if (loading) return <p className="text-center mt-10">Carregando...</p>;

  if (!user) return null; // já redirecionou

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900">
      <div className="bg-white p-6 rounded shadow-md max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4">Informações do Usuário</h1>
        <p><strong>ID:</strong> {user.id}</p>
        <p><strong>Nome:</strong> {user.nome}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Tipo:</strong> {user.tipo}</p>
      </div>
    </div>
  );
}

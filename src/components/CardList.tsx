"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface Campanha {
  id: string;
  titulo: string;
  descricao: string;
  meta: number;
}

interface CampanhasListProps {
  imagemCard: string; // caminho da imagem que será exibida no card
}

export default function CampanhasList({ imagemCard }: CampanhasListProps) {
  const [campanhas, setCampanhas] = useState<Campanha[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCampanhas = async () => {
      try {
        const response = await fetch("https://apisolidaria.onrender.com/campanhas");
        if (!response.ok) throw new Error("Erro ao buscar campanhas");

        const data = await response.json();
        setCampanhas(data);
      } catch (err: any) {
        setError(err.message || "Erro ao carregar campanhas");
      }
    };

    fetchCampanhas();
  }, []);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-center text-[#2f4e41]">Campanhas Solidárias</h1>

      {error && <p className="text-red-500 text-center">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {campanhas.map((campanha) => (
          <div
            key={campanha.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <Image
              src={imagemCard}
              alt="Imagem da campanha"
              width={400}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-[#2f4e41]">{campanha.titulo}</h2>
              <p className="text-sm text-gray-600 mt-2">{campanha.descricao}</p>
              <p className="text-[#557a6a] mt-3 font-medium">
                Meta: R${campanha.meta.toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

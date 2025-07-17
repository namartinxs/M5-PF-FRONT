"use client";
import CampanhasList from "@/components/campanhaCardList";
import { useEffect, useState } from "react";

interface Campanha {
  id: string;
  titulo: string;
  descricao: string;
  meta: number;
}

export default function CampanhaPage() {
  const [campanhas, setCampanhas] = useState<Campanha[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCampanhas = async () => {
      try {
        const response = await fetch(
          "https://apisolidaria.onrender.com/campanhas"
        );
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
  

  <div className="p-8 bg-background min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-center text-dark-green">Campanhas Solidárias</h1>
      {error && <p className="text-red-500 text-center">{error}</p>}
    <CampanhasList campanhas={campanhas} imagemCard="/defaultcampanhaimage" />
  </div>
  );
}

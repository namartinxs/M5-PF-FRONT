"use client";
import CampanhasList from "@/components/campanhaCardList";
import Oops from "@/components/oopsComponent";
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
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Erro ao carregar campanhas");
        }
      }
    };

    fetchCampanhas();
  }, []);
  return (
    <div className="p-8 bg-background min-h-screen">
      
      {error && <p className="text-red-500 text-center">{error}</p>}

      {campanhas.length === 0 ? (
        <Oops problem="Parece que não temos campanhas ativas no momento" />
      ) : (
        <CampanhasList
          campanhas={campanhas}
          imagemCard="/defaultcampanhaimage"
        />
      )}
    </div>
  );
}

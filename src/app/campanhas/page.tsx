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

// 👇 Array de campanhas para teste local
const campanhasFake: Campanha[] = [
  {
    id: "1",
    titulo: "Doe Alimentos para Comunidades",
    descricao: "Campanha para arrecadação de alimentos não perecíveis.",
    meta: 5000,
  },
  {
    id: "2",
    titulo: "Apoie a Educação Infantil",
    descricao: "Ajude a fornecer materiais escolares para crianças carentes.",
    meta: 3000,
  },
  {
    id: "3",
    titulo: "Campanha de Agasalhos",
    descricao: "Distribuição de roupas de frio para famílias em situação de rua.",
    meta: 2000,
  },
  {
    id: "4",
    titulo: "Ajude no Tratamento do João",
    descricao: "Campanha para custear o tratamento médico do João.",
    meta: 10000,
  },
];

export default function CampanhaPage() {
  const [campanhas, setCampanhas] = useState<Campanha[]>([]);
  const [error, setError] = useState("");

  const usarApi = false; // troque para true se quiser usar a API real

if (!usarApi) {
  setCampanhas(campanhasFake);
  return;
}

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

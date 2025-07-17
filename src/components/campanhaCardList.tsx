import Image from "next/image";

interface Campanha {
  id: number; // normalmente IDs numéricos, mas pode ser string se preferir
  titulo: string;
  descricao: string;
  meta: number;
}

interface CampanhasListProps {
  imagemCard: string; // caminho da imagem padrão do card
  campanhas: Campanha[];
}

export default function CampanhasList({ campanhas, imagemCard }: CampanhasListProps) {
  return (
    <div className="px-4 py-6">
      <h1 className="text-2xl font-bold mb-6 text-center text-[#2f4e41]">
        Campanhas Solidárias
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {campanhas.map((campanha) => (
          <div
            key={campanha.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <Image
              src={imagemCard}
              alt={`Imagem da campanha: ${campanha.titulo}`}
              width={400}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-[#2f4e41]">
                {campanha.titulo}
              </h2>
              <p className="text-sm text-gray-600 mt-2">
                {campanha.descricao}
              </p>
              <p className="text-[#557a6a] mt-3 font-medium">
                Meta: R$ {campanha.meta.toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

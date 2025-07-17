import Image from "next/image";

interface Campanha {
  id: string;
  titulo: string;
  descricao: string;
  meta: number;
}

interface CampanhasListProps {
  imagemCard: string; // caminho da imagem que será exibida no card
  campanhas: Campanha[];
}

export default function CampanhasList({
  campanhas,
  imagemCard,
}: CampanhasListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <h1 className="text-2xl font-bold mb-6 text-center text-dark-green">
        Campanhas Solidárias
      </h1>
      {campanhas.map((campanhas) => (
        <div
          key={campanhas.id}
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
            <h2 className="text-xl font-semibold text-[#2f4e41]">
              {campanhas.titulo}
            </h2>
            <p className="text-sm text-gray-600 mt-2">{campanhas.descricao}</p>
            <p className="text-[#557a6a] mt-3 font-medium">
              Meta: R${campanhas.meta.toFixed(2)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

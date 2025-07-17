"use client";

import Image from "next/image";
import Button from "./routeOutlineButton";

export default function MakeDonation() {
  return (
    <section className="bg-dark-green text-background py-12 px-4 md:px-12">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-4">
          <p className="font-roboto leading-relaxed text-justify">
            Doar vai além de oferecer algo material — é um ato de empatia, amor
            e conexão. Cada doação, por menor que pareça, tem o poder de mudar
            realidades, acender esperanças e construir futuros melhores.
          </p>
          <p className="leading-relaxed text-justify">
            Quando você doa, você não entrega apenas um objeto: você compartilha
            cuidado, oportunidade e dignidade. E o mais bonito é que, ao ajudar
            alguém, você também se transforma.
          </p>
          <p className="leading-relaxed text-justify">
            Doe com o coração. Porque juntos, somos mais fortes.
          </p>
          <Button route= '/campanhas'variant='darkOutline' type="button">Faça uma doação!</Button>
        </div>
        <div className="flex-shrink-0">
          <Image
            src="/roupasBox.png"
            alt="roupas para doação"
            width={300}
            height={300}
          />
        </div>
        
      </div>
      
    </section>
  );
}

"use client";

import Image from "next/image";

export default function AboutWe() {
  return (
    <section className="bg-background text-grayish-green py-12 px-4 md:px-12">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-shrink-0">
          <Image
            src="/roupas.png"
            alt="Pilha de roupas para doação"
            width={300}
            height={300}
            className=""
          />
        </div>

        <div className="flex-1 space-y-4">
          <h2 className="font-specialElite text-3xl font-bold text-dark-green">
  O que somos?
</h2>
          <p className="font-roboto leading-relaxed text-justify">
            Nossa plataforma foi criada para facilitar a organização e gestão de
            campanhas de doação promovidas por ONGs, projetos sociais, igrejas e
            comunidades locais.
          </p>
          <p className="leading-relaxed text-justify">
            A ferramenta permite cadastrar, acompanhar e administrar campanhas,
            categorias de doação e locais de arrecadação. Também conta com
            autenticação de usuários, registro de feedbacks e controle de ações.
          </p>
          <p className="leading-relaxed text-justify">
            O objetivo é tornar as campanhas mais eficientes, transparentes e
            visíveis, promovendo uma comunicação clara com os doadores e um
            controle mais eficaz das arrecadações.
          </p>
          <p className="leading-relaxed text-justify">
            Assim, fortalecemos o impacto social de cada iniciativa e aproximamos
            quem precisa de quem quer ajudar.
          </p>
        </div>
      </div>
    </section>
  );
}

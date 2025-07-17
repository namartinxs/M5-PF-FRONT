"use client";

import Link from "next/link";

export default function Sobre() {
  return (
    <section className="w-full bg-white py-16 px-4 text-center text-[#2f4e41]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Corrente do Bem</h2>
        <p className="text-lg mb-4">
          A <strong>Corrente do Bem</strong> é uma plataforma criada para aproximar quem quer ajudar de quem realmente precisa. Aqui, doadores encontram campanhas sociais promovidas por ONGs, projetos comunitários, igrejas e outras iniciativas que lutam diariamente por um mundo mais justo e solidário.
        </p>
        <p className="text-lg mb-4">
          Com uma navegação simples e intuitiva, nossa plataforma permite visualizar metas, acompanhar o impacto das doações e fazer parte de histórias reais de transformação. Cada contribuição conta. Cada gesto importa.
        </p>
        <p className="text-lg font-semibold text-[#557a6a] mb-8">
          💚 Junte-se a essa corrente e ajude a espalhar o bem.
        </p>

        <Link href="/campanhas">
          <button className="bg-[#2f4e41] text-white px-6 py-3 rounded-2xl text-lg font-semibold hover:bg-[#557a6a] transition-all duration-300">
            Ver campanhas
          </button>
        </Link>
      </div>
    </section>
  );
}

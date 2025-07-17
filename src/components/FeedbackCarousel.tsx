"use client";

import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

type Feedback = {
  id: string;
  nome: string;
  mensagem: string;
};

export default function FeedbackCarousel() {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Dados fake para testar layout
    const dadosFake = [
      {
        id: "1",
        nome: "Brenda",
        mensagem:
          "Essa campanha transformou vidas! Ver as crianças recebendo os livros foi emocionante!",
      },
      {
        id: "2",
        nome: "Lucas",
        mensagem:
          "Fiquei muito feliz em poder contribuir. Que venham mais iniciativas como essa!",
      },
      {
        id: "3",
        nome: "Carla",
        mensagem:
          "Meu filho recebeu um livro dessa campanha. Ele não largou mais. Obrigada!",
      },
    ];

    setFeedbacks(dadosFake);
  }, []);

  const prev = () => setIndex((prev) => (prev === 0 ? feedbacks.length - 1 : prev - 1));
  const next = () => setIndex((prev) => (prev === feedbacks.length - 1 ? 0 : prev + 1));

  if (feedbacks.length === 0) {
    return <p className="text-center text-gray-500">Carregando feedbacks...</p>;
  }

  const feedback = feedbacks[index];

  return (
    <div className="bg-white rounded-xl shadow-lg max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-green-800 mb-6 text-center">
        FeedBacks das campanhas
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-6 relative">
        {/* Imagem fixa à esquerda */}
        <img
          src="/criançalendo.jpg" 
          alt="Crianças lendo"
          className="w-60 h-60 object-cover rounded-xl border-4 border-green-700"
        />

        {/* Bloco do feedback */}
        <div className="flex-1 bg-green-800 text-white p-6 rounded-xl relative">
          <h3 className="text-xl font-bold mb-2">{feedback.nome}</h3>
          <p className="text-justify">{feedback.mensagem}</p>

          {/* Setas de navegação */}
          <button
            onClick={prev}
            className="absolute top-1/2 left-[-2rem] transform -translate-y-1/2 bg-white text-green-800 p-2 rounded-full shadow-lg hidden md:block"
          >
            <FaChevronLeft />
          </button>

          <button
            onClick={next}
            className="absolute top-1/2 right-[-2rem] transform -translate-y-1/2 bg-white text-green-800 p-2 rounded-full shadow-lg hidden md:block"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      <footer className="mt-6 text-center text-green-900">
        <p className="font-medium mb-2">Nos acompanhe nas redes</p>
        <div className="flex justify-center gap-4 text-2xl">
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
        </div>
      </footer>
    </div>
  );
}

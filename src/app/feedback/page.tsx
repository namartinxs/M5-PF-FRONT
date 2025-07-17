"use client";

import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

type Feedback = {
  id: string;
  nome: string;
  mensagem: string;
};

export default function FeedbackPage() {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [index, setIndex] = useState(0);
  const [nome, setNome] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [loading, setLoading] = useState(true);

  // Buscar feedbacks
  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const fetchFeedbacks = () => {
    setLoading(true);
    fetch("https://m4-projeto-final-qvw6.onrender.com/feedbacks")
      .then((res) => res.json())
      .then((data) => {
        setFeedbacks(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao buscar feedbacks:", err);
        setLoading(false);
      });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const novoFeedback = { nome, mensagem };

    const response = await fetch("https://m4-projeto-final-qvw6.onrender.com/feedbacks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(novoFeedback),
    });

    if (response.ok) {
      setNome("");
      setMensagem("");
      fetchFeedbacks(); // Atualiza carrossel
    } else {
      alert("Erro ao enviar feedback.");
    }
  };

  const prev = () =>
    setIndex((prev) => (prev === 0 ? feedbacks.length - 1 : prev - 1));
  const next = () =>
    setIndex((prev) => (prev === feedbacks.length - 1 ? 0 : prev + 1));

  const feedback = feedbacks[index];

  return (
    <main className="min-h-screen bg-gray-100 py-8 px-4 flex flex-col gap-12 items-center">
      <h1 className="text-3xl font-bold text-center">Feedbacks em Destaque</h1>

      {/* 📝 Formulário */}
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow p-6 max-w-md w-full space-y-4"
      >
        <h2 className="text-xl font-bold text-green-800">Deixe seu Feedback</h2>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Seu nome"
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
        <textarea
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          placeholder="Mensagem"
          required
          className="w-full p-2 border border-gray-300 rounded"
        ></textarea>
        <button
          type="submit"
          className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800"
        >
          Enviar
        </button>
      </form>

      {/* 🎠 Carrossel */}
      {loading ? (
        <p className="text-gray-500">Carregando feedbacks...</p>
      ) : feedbacks.length === 0 ? (
        <p className="text-red-500">Nenhum feedback encontrado.</p>
      ) : (
        <div className="bg-white rounded-xl shadow-lg max-w-4xl mx-auto p-6 w-full">
          <h2 className="text-2xl font-bold text-green-800 mb-6 text-center">
            FeedBacks das campanhas
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-6 relative">
            <img
              src="/img/criancas-lendo.jpg"
              alt="Crianças lendo"
              className="w-60 h-60 object-cover rounded-xl border-4 border-green-700"
            />

            <div className="flex-1 bg-green-800 text-white p-6 rounded-xl relative">
              <h3 className="text-xl font-bold mb-2">{feedback.nome}</h3>
              <p className="text-justify">{feedback.mensagem}</p>

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
      )}
    </main>
  );
}

import Image from "next/image";

export default function SuportPage() {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-4 py-8">
      <Image src="/telefone.png" alt="sapo" width={200} height={200} />
      <h1 className="text-dark-green font-bold text-2xl">Encontrou alguma dificuldade em nosso site?</h1>
      <p>Fale com nosso atendimento ao cliente 0800 4002-8922</p>
    </div>
  );
}

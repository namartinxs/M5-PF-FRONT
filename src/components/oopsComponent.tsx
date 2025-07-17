import Image from "next/image";

interface OopsProps {
  problem: string;
}

export default function Oops({ problem }: OopsProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-4 py-8">
      <Image src="/oopsImage.png" alt="sapo" width={200} height={200} />
      <h1 className="text-dark-green font-bold text-2xl">Oops</h1>
      <p className="text-gray-700">{problem}</p>
    </div>
  );
}

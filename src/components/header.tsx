"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function Header() {
  return (
    <header className="w-full bg-background text-grayish-green">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/home">
          <Image
            src="/Logo.png"
            alt="logo"
            width={36}
            height={20}
            className="cursor-pointer"
          ></Image>
        </Link>
        <nav className="flex space-x-6 items-center">
          <Link href="/suporte" className="hover:underline">
            Suporte
          </Link>
          <Link href="/sobre" className="hover:underline">
            Sobre
          </Link>
          <Link href="/campanhas" className="hover:underline">
            Campanhas
          </Link>
        </nav>

        <Link href="/login" className="hover:underline">
          Login/Cadastro
        </Link>
      </div>
    </header>
  );
}

'use client'

import React from 'react'

export default function Footer() {
  return (
    <footer className="w-full bg-background text-grayish-green text-center py-4 mt-10">
      <p className="text-sm">&copy; {new Date().getFullYear()} Corrente do Bem. Todos os direitos reservados.</p>
    </footer>
  )
}

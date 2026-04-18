"use client"

import { useEffect, useState } from "react"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#070f1e]/98 backdrop-blur-xl border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="text-white font-bold text-xl tracking-tight">
          PEM<span className="text-[#1DAB87]">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: "Funcionalidades", href: "#funcionalidades" },
            { label: "Planos", href: "#planos" },
            { label: "Depoimentos", href: "#depoimentos" },
            { label: "FAQ", href: "#faq" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-white/40 hover:text-white text-sm transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <a
            href="https://app.usepem.com.br"
            className="text-white/40 hover:text-white text-sm transition-colors hidden md:block"
          >
            Entrar
          </a>
          <a
            href="https://app.usepem.com.br/cadastro"
            className="bg-[#1DAB87] hover:bg-[#158a6d] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
          >
            14 dias grátis
          </a>
        </div>
      </div>
    </header>
  )
}

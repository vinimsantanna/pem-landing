"use client"

import Image from "next/image"

export function Navbar() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 h-20"
      style={{
        background: "rgba(255, 255, 255, 0.85)",
        backdropFilter: "blur(20px) saturate(180%)",
        WebkitBackdropFilter: "blur(20px) saturate(180%)",
        borderBottom: "1px solid rgba(11, 31, 58, 0.06)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <a href="/" className="flex items-center">
          <Image
            src="/images/logo-pem-icon.webp"
            alt="PEM — Protocolo de Escala Médica"
            width={120}
            height={80}
            className="h-16 w-auto"
            priority
          />
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
              className="text-[#0B1F3A]/50 hover:text-[#0B1F3A] text-sm transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <a
            href="https://app.usepem.com.br"
            className="text-[#0B1F3A]/50 hover:text-[#0B1F3A] text-sm transition-colors hidden md:block"
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

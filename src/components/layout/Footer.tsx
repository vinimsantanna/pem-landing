import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-[#070f1e] py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <Image
          src="/images/logo-pem-full.webp"
          alt="PEM — Protocolo de Escala Médica"
          width={240}
          height={160}
          style={{ height: 80, width: "auto" }}
        />
        <p className="text-white/30 text-sm text-center">
          © {new Date().getFullYear()} Protocolo de Escala Médica. Todos os direitos reservados.
        </p>
        <div className="flex gap-6 text-sm text-white/30">
          <a href="/privacidade" className="hover:text-white/60 transition-colors">Privacidade</a>
          <a href="/termos" className="hover:text-white/60 transition-colors">Termos</a>
          <a href="mailto:suporte@usepem.com.br" className="hover:text-white/60 transition-colors">Contato</a>
        </div>
      </div>
    </footer>
  )
}

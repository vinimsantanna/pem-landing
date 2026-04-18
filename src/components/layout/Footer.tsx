export function Footer() {
  return (
    <footer className="bg-[#070f1e] py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-white font-bold text-lg">
          PEM<span className="text-[#1DAB87]">.</span>
        </span>
        <p className="text-white/30 text-sm text-center">
          © {new Date().getFullYear()} Protocolo de Escala Médica. Todos os direitos reservados.
        </p>
        <div className="flex gap-6 text-sm text-white/30">
          <a href="#" className="hover:text-white/60 transition-colors">Privacidade</a>
          <a href="#" className="hover:text-white/60 transition-colors">Termos</a>
          <a href="#" className="hover:text-white/60 transition-colors">Contato</a>
        </div>
      </div>
    </footer>
  )
}

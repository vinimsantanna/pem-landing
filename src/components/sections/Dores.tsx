"use client"

import { motion } from "framer-motion"

const problemas = [
  {
    n: "01",
    titulo: "Confirmação manual de consultas",
    custo: "R$ 890/mês em tempo operacional",
    descricao:
      "Secretária no WhatsApp, no telefone e no e-mail ao mesmo tempo. Cada confirmação manual custa em média R$ 12 em tempo produtivo. Multiplicado por 74 consultas mensais, são quase mil reais que não retornam em nada.",
  },
  {
    n: "02",
    titulo: "Paciente faltou. Sem aviso.",
    custo: "R$ 400 a R$ 2.000 por no-show",
    descricao:
      "Sem lembrete automático, 1 em cada 4 pacientes não comparece. Sua agenda premium vira espaço vazio. Sem lista de espera ativa, sem remarcação automática, sem recuperação.",
  },
  {
    n: "03",
    titulo: "Receituário às 23h. De caneta.",
    custo: "Risco jurídico e erosão de marca",
    descricao:
      "Paciente pede receita, você assina em papel, fotografa e envia pelo WhatsApp. Com sua imagem e localização nos metadados, sem rastreabilidade, sem validade jurídica garantida. Para um profissional de alto padrão, isso é o oposto do que sua marca comunica.",
  },
  {
    n: "04",
    titulo: "Lead entra, lead some.",
    custo: "60% do investimento em marketing perdido",
    descricao:
      "Anúncio no Instagram gera mensagem no WhatsApp, vai pra caixa postal da secretária, some entre 800 conversas. Sem pipeline, sem scoring, sem follow-up automatizado — cada lead perdido é um paciente que outro médico vai atender.",
  },
  {
    n: "05",
    titulo: "Você não sabe quanto ganhou. Até amanhã.",
    custo: "Decisão no escuro",
    descricao:
      "Receita no Pix, convênio no sistema da operadora, particular no caixa. Para fechar o dia, 40 minutos juntando extratos. Quando o padrão do problema aparece, já passou o mês em que era possível corrigir.",
  },
]

export function Dores() {
  return (
    <section
      className="py-16 md:py-28 relative overflow-hidden"
      style={{ background: "#0B1F3A" }}
    >
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(26,58,92,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(26,58,92,0.15) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 md:mb-20"
        >
          <p className="text-[#1DAB87] text-xs font-mono uppercase tracking-[0.2em] mb-5">
            O custo invisível
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight max-w-2xl">
            Toda clínica sem PEM perde,
            em média,{" "}
            <span className="text-white/25">duas horas por dia.</span>
          </h2>
          <p className="text-white/45 text-lg mt-5 max-w-xl leading-relaxed">
            Cinco problemas que consomem receita, tempo e tranquilidade — todos com o mesmo diagnóstico: processos manuais e ferramentas desconectadas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {problemas.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`group rounded-xl p-6 cursor-default transition-all duration-300 ${
                i === 4 ? "md:col-span-2 md:max-w-lg md:mx-auto" : ""
              }`}
              style={{ background: "#112849" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#204670"; e.currentTarget.style.transform = "translateY(-4px)" }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "#112849"; e.currentTarget.style.transform = "translateY(0)" }}
            >
              <span className="block text-5xl font-bold font-mono mb-4 leading-none" style={{ color: "#1DAB87", opacity: 0.3 }}>
                {p.n}
              </span>
              <div className="mb-3">
                <span
                  className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3"
                  style={{ background: "rgba(192,57,43,0.18)", color: "#f87171" }}
                >
                  {p.custo}
                </span>
                <h3 className="text-white text-base font-bold">{p.titulo}</h3>
              </div>
              <p className="text-white/45 text-sm leading-relaxed">{p.descricao}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 pt-10 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
        >
          <p className="text-2xl font-bold text-white">
            Tem solução.{" "}
            <span className="text-[#1DAB87]">E não precisa ser complicada.</span>
          </p>
          <a
            href="#funcionalidades"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#1DAB87] hover:text-white transition-colors shrink-0"
          >
            Ver como o PEM resolve →
          </a>
        </motion.div>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"

const problemas = [
  {
    n: "01",
    titulo: "Confirmação manual de consultas",
    custo: "R$ 890/mês",
    descricao:
      "Secretária no WhatsApp, no telefone, no e-mail — ao mesmo tempo. Cada confirmação manual custa em média R$ 12 do seu tempo operacional. Multiplicado por 74 consultas mensais, isso é dinheiro real jogado fora.",
  },
  {
    n: "02",
    titulo: "Paciente faltou. Sem aviso.",
    custo: "R$ 300 perdidos",
    descricao:
      "Sem lembrete automático, 1 em cada 4 pacientes não comparece. Uma hora bloqueada na sua agenda, zerada. Nenhum sistema de lista de espera para preencher o espaço.",
  },
  {
    n: "03",
    titulo: "Receituário às 23h. De caneta.",
    custo: "Risco jurídico",
    descricao:
      "Paciente precisa de receita. Você está em casa. Assina no papel, fotografa, manda pelo WhatsApp — com sua imagem e localização nos metadados. Sem rastreabilidade. Sem validade legal garantida.",
  },
  {
    n: "04",
    titulo: "Você não sabe quanto ganhou até amanhã.",
    custo: "Visibilidade zero",
    descricao:
      "Receita no Pix, convênio no sistema da operadora, particular no caixa. Para saber o que entrou, você passa 40 minutos juntando extratos. Quando descobre o problema, já é tarde para corrigir.",
  },
]

export function Dores() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-5xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <p className="text-[#1DAB87] text-xs font-mono uppercase tracking-[0.2em] mb-5">
            O diagnóstico
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3A] leading-tight max-w-2xl">
            Toda clínica sem PEM perde,
            em média,{" "}
            <span className="text-slate-300">2 horas por dia.</span>
          </h2>
        </motion.div>

        <div className="space-y-0 divide-y divide-slate-100">
          {problemas.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group grid md:grid-cols-[80px_1fr_auto] gap-6 py-8 items-start cursor-default"
            >
              <span className="text-slate-200 group-hover:text-[#1DAB87] text-5xl font-bold leading-none transition-colors duration-300 font-mono">
                {p.n}
              </span>
              <div>
                <h3 className="text-[#0B1F3A] text-lg font-bold mb-2">{p.titulo}</h3>
                <p className="text-slate-400 text-sm leading-relaxed max-w-lg">{p.descricao}</p>
              </div>
              <div className="text-right shrink-0">
                <span className="inline-block bg-red-50 text-red-400 text-xs font-semibold px-3 py-1.5 rounded-full">
                  {p.custo}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 pt-10 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
        >
          <p className="text-2xl font-bold text-[#0B1F3A]">
            Tem solução.<br />
            <span className="text-[#1DAB87]">E é mais simples do que você imagina.</span>
          </p>
          <a
            href="https://app.usepem.com.br/cadastro"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#1DAB87] hover:text-[#158a6d] transition-colors shrink-0"
          >
            Ver como funciona →
          </a>
        </motion.div>
      </div>
    </section>
  )
}

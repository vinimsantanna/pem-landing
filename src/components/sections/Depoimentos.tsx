"use client"

import { motion } from "framer-motion"

const depoimentos = [
  {
    antes: "Perdia 2h por dia só organizando confirmações. WhatsApp, telefone, e-mail — tudo manual.",
    depois: "Hoje minha secretária faz isso em 15 minutos. O restante é automático. Não sei como trabalhava antes.",
    nome: "Dr. Rodrigo Almeida",
    cargo: "Cirurgião Plástico · São Paulo, SP",
    resultado: "−90% do tempo em confirmações",
    initials: "RA",
  },
  {
    antes: "Assinava receita de madrugada quando paciente precisava. No papel. Fotografava e mandava no WhatsApp.",
    depois: "Agora assino digitalmente pelo celular em 40 segundos. Com validade jurídica. Qualquer hora.",
    nome: "Dra. Camila Fontes",
    cargo: "Dermatologista · Belo Horizonte, MG",
    resultado: "Receituário 100% digital",
    initials: "CF",
  },
  {
    antes: "Três médicos na clínica e eu não sabia quanto estava lucrando de verdade. Abria o extrato no fim do mês.",
    depois: "Identifiquei onde estava perdendo dinheiro em 3 meses. Aumentei a margem sem atender mais pacientes.",
    nome: "Roberto Menezes",
    cargo: "Administrador de Clínica · Curitiba, PR",
    resultado: "+34% de margem em 3 meses",
    initials: "RM",
  },
]

export function Depoimentos() {
  return (
    <section id="depoimentos" className="py-28 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-[#1DAB87] text-xs font-mono uppercase tracking-[0.2em] mb-5">
            Histórias reais
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3A] leading-tight">
            Antes e depois do PEM.
          </h2>
        </motion.div>

        <div className="space-y-5">
          {depoimentos.map((d, i) => (
            <motion.div
              key={d.nome}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden border border-slate-100"
            >
              <div className="grid md:grid-cols-2">
                {/* Antes */}
                <div className="p-8 border-b md:border-b-0 md:border-r border-slate-100">
                  <p className="text-xs font-semibold text-red-400 uppercase tracking-widest mb-4">Antes</p>
                  <p className="text-slate-500 text-lg leading-relaxed italic">
                    "{d.antes}"
                  </p>
                </div>

                {/* Depois */}
                <div className="p-8">
                  <p className="text-xs font-semibold text-[#1DAB87] uppercase tracking-widest mb-4">Depois do PEM</p>
                  <p className="text-slate-700 text-lg leading-relaxed">
                    "{d.depois}"
                  </p>
                </div>
              </div>

              {/* Footer */}
              <div className="px-8 py-5 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#0B1F3A] flex items-center justify-center shrink-0">
                    <span className="text-white text-xs font-bold">{d.initials}</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#0B1F3A]">{d.nome}</p>
                    <p className="text-xs text-slate-400">{d.cargo}</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-[#1DAB87] bg-[#1DAB87]/10 px-4 py-1.5 rounded-full shrink-0">
                  {d.resultado}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

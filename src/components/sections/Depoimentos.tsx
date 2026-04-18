"use client"

import { motion } from "framer-motion"

const depoimentos = [
  {
    antes: "Perdia 2 horas por dia só organizando confirmações. WhatsApp, telefone, e-mail — tudo manual, tudo urgente.",
    depois: "Hoje minha secretária faz isso em 15 minutos. O resto é automático. Honestamente, não sei como eu trabalhava antes.",
    nome: "Dr. Rodrigo Almeida",
    cargo: "Cirurgião Plástico",
    local: "São Paulo, SP",
    resultado: "−90% tempo em confirmações",
    initials: "RA",
  },
  {
    antes: "Os leads do Instagram viravam conversa no WhatsApp da recepção e sumiam. Eu investia em anúncio sem saber se retornava.",
    depois: "Com o CRM e o inbox unificado, triplicou minha conversão. Eu vejo o caminho do lead da primeira mensagem até o retorno pós-consulta.",
    nome: "Dra. Camila Fontes",
    cargo: "Dermatologista",
    local: "Belo Horizonte, MG",
    resultado: "3× conversão de leads",
    initials: "CF",
  },
  {
    antes: "Três médicos na clínica e eu não sabia quanto estava lucrando de verdade. Abria o extrato no fim do mês e fazia a conta no susto.",
    depois: "Identifiquei onde estava perdendo dinheiro em 3 meses. Aumentei a margem sem atender um paciente a mais.",
    nome: "Roberto Menezes",
    cargo: "Administrador de clínica com 3 médicos",
    local: "Curitiba, PR",
    resultado: "+34% de margem em 3 meses",
    initials: "RM",
  },
]

export function Depoimentos() {
  return (
    <section id="depoimentos" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-[#1DAB87] text-xs font-mono uppercase tracking-[0.2em] mb-5">
            Quem já vive o PEM
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3A] leading-tight">
            Antes e depois do Protocolo de Escala Médica.
          </h2>
          <p className="text-slate-500 text-lg mt-4 max-w-xl">
            Três histórias reais de médicos que recuperaram o próprio tempo — e o controle da própria clínica.
          </p>
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
              style={{ boxShadow: "0 2px 8px rgba(11,31,58,0.06)" }}
            >
              <div className="grid md:grid-cols-2">
                {/* Antes */}
                <div className="p-8 border-b md:border-b-0 md:border-r border-slate-100">
                  <div className="bg-slate-50 rounded-xl p-4">
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">Antes</p>
                    <p className="text-slate-600 text-base leading-relaxed italic">
                      "{d.antes}"
                    </p>
                  </div>
                </div>

                {/* Depois */}
                <div className="p-8">
                  <div className="bg-[#E8F8F4] rounded-xl p-4">
                    <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#0d6e56" }}>Depois do PEM</p>
                    <p className="text-[#0B1F3A] text-base leading-relaxed font-medium">
                      "{d.depois}"
                    </p>
                  </div>
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
                    <p className="text-xs text-slate-400">{d.cargo} · {d.local}</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-white bg-[#1DAB87] px-4 py-1.5 rounded-full shrink-0">
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

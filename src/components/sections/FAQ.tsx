"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    q: "Funciona para a minha especialidade médica?",
    a: "Sim. O PEM funciona para clínica geral, cirurgia plástica, dermatologia, ginecologia, pediatria, ortopedia, estética e qualquer outra especialidade. O prontuário é flexível e a agenda se adapta ao seu fluxo de atendimento.",
  },
  {
    q: "Como funciona a migração? Vou perder meu histórico?",
    a: "Nenhum dado é perdido. Nossa equipe faz a migração guiada dos seus dados do iClinic, Feegow ou planilhas. O processo leva em média 2 a 5 dias úteis e acontece em paralelo — você continua atendendo normalmente.",
  },
  {
    q: "O receituário digital é realmente válido juridicamente?",
    a: "Sim. O PEM usa assinatura digital com certificado ICP-Brasil padrão A1, homologado pelo ITI (Instituto Nacional de Tecnologia da Informação). As receitas geradas têm validade jurídica plena no Brasil e podem ser verificadas publicamente.",
  },
  {
    q: "É difícil de aprender? Minha equipe vai conseguir usar?",
    a: "O PEM foi desenhado para ser intuitivo. A maioria dos usuários opera sem treinamento em menos de 30 minutos. Disponibilizamos vídeos curtos, central de ajuda e suporte por WhatsApp para qualquer dúvida.",
  },
  {
    q: "Posso cancelar a qualquer momento?",
    a: "Sim, sem multa e sem burocracia. Você pode cancelar diretamente no painel com um clique. Seus dados ficam disponíveis para exportação por 30 dias após o cancelamento.",
  },
  {
    q: "Os dados dos meus pacientes estão seguros?",
    a: "Sim. O PEM segue rigorosamente a LGPD. Os dados são armazenados em servidores no Brasil com criptografia em repouso e em trânsito. Backups automáticos diários e isolamento total entre clínicas.",
  },
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-[#1DAB87] text-sm font-semibold uppercase tracking-widest mb-4">
            Perguntas frequentes
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A]">
            Tudo que você quer saber antes de começar.
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.06 }}
              className="border border-slate-200 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-slate-50 transition-colors"
              >
                <span className="font-semibold text-[#0B1F3A] pr-4 text-sm md:text-base">{faq.q}</span>
                {open === i
                  ? <Minus className="w-4 h-4 text-[#1DAB87] flex-shrink-0" />
                  : <Plus className="w-4 h-4 text-slate-400 flex-shrink-0" />
                }
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-slate-500 text-sm leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

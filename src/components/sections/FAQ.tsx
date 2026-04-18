"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight } from "lucide-react"

const faqs = [
  {
    q: "Funciona para a minha especialidade?",
    a: "Sim. O PEM funciona para clínica geral, cirurgia plástica, dermatologia, ginecologia, pediatria, ortopedia, estética, urologia, cardiologia, endocrinologia e qualquer outra especialidade clínica. O prontuário é flexível e a agenda se adapta ao seu fluxo de atendimento.",
  },
  {
    q: "Como funciona a migração? Vou perder meu histórico?",
    a: "Nenhum dado é perdido. Nossa equipe faz a migração guiada dos seus dados de sistemas anteriores ou planilhas. O processo leva em média 2 a 5 dias úteis e acontece em paralelo — você continua atendendo normalmente durante toda a migração.",
  },
  {
    q: "O receituário digital é realmente válido juridicamente?",
    a: "Sim. O PEM usa assinatura digital com certificado ICP-Brasil padrão A1, homologado pelo ITI (Instituto Nacional de Tecnologia da Informação). As receitas geradas têm validade jurídica plena no Brasil e podem ser verificadas publicamente pelo paciente ou por qualquer farmácia.",
  },
  {
    q: "Como funciona a integração com Instagram, Facebook e WhatsApp?",
    a: "Você conecta as contas da clínica uma vez, no onboarding. A partir daí, toda mensagem que chega por qualquer um dos três canais aparece no inbox unificado do PEM, vinculada automaticamente ao cadastro do paciente ou do lead. A equipe responde direto do PEM — sem trocar de sistema, sem perder contexto.",
  },
  {
    q: "É difícil de aprender? Minha equipe vai conseguir usar?",
    a: "O PEM foi desenhado para ser intuitivo. A maioria dos usuários opera sem treinamento em menos de 30 minutos. Disponibilizamos vídeos curtos, central de ajuda e suporte por WhatsApp direto para qualquer dúvida — em português, com resposta em até 2 horas úteis.",
  },
  {
    q: "Posso cancelar a qualquer momento?",
    a: "Sim, sem multa e sem burocracia. Você pode cancelar diretamente no painel com um clique. Seus dados ficam disponíveis para exportação por 30 dias após o cancelamento, em formato padrão (CSV, PDF).",
  },
  {
    q: "Os dados dos meus pacientes estão seguros?",
    a: "Sim. O PEM segue rigorosamente a LGPD. Os dados são armazenados em servidores no Brasil com criptografia em repouso (AES-256) e em trânsito (TLS 1.3). Backups automáticos diários, isolamento total entre clínicas e auditoria completa de acessos.",
  },
  {
    q: "Posso testar com a minha equipe antes de contratar?",
    a: "Sim. Os 14 dias grátis dão acesso completo a todas as funcionalidades, para quantos usuários da sua equipe quiser. Sem cartão de crédito, sem limite artificial.",
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
          <p className="text-[#1DAB87] text-xs font-mono uppercase tracking-[0.2em] mb-5">
            Antes de começar
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A]">
            Tudo que você quer saber antes de testar.
          </h2>
        </motion.div>

        <div className="divide-y divide-slate-100 border-t border-slate-100">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between py-5 text-left hover:text-[#0B1F3A] transition-colors"
              >
                <span className={`font-semibold pr-4 text-sm md:text-base transition-colors ${open === i ? "text-[#0B1F3A]" : "text-[#0B1F3A]/70"}`}>{faq.q}</span>
                <ChevronRight
                  className="w-5 h-5 flex-shrink-0 text-[#1DAB87] transition-transform duration-200"
                  style={{ transform: open === i ? "rotate(90deg)" : "rotate(0deg)" }}
                  strokeWidth={2.5}
                />
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-5 text-slate-500 text-sm leading-relaxed">{faq.a}</p>
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

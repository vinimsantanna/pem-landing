"use client"

import { motion } from "framer-motion"
import { Check, Zap } from "lucide-react"

const planos = [
  {
    id: "solo",
    name: "Solo",
    price: 297,
    description: "Para médico autônomo ou consultório individual",
    highlight: false,
    features: [
      "1 médico",
      "Agendamentos ilimitados",
      "Confirmação e cancelamento via WhatsApp e e-mail",
      "Prontuário eletrônico",
      "Receituário com assinatura ICP-Brasil",
      "Planejamentos cirúrgicos em PDF",
      "Financeiro básico",
      "Google Calendar",
    ],
    cta: "Começar grátis",
    ctaUrl: "https://app.usepem.com.br/cadastro?plano=solo",
  },
  {
    id: "clinica",
    name: "Clínica",
    price: 497,
    description: "Para clínicas com múltiplos médicos",
    highlight: true,
    badge: "Mais popular",
    features: [
      "Até 5 médicos",
      "Agendamentos ilimitados",
      "Tudo do Solo",
      "Lembretes 24h, 1h e aniversário via WhatsApp",
      "Financeiro completo + importação OFX",
      "Controle de estoque",
      "Relatórios avançados",
      "10 GB de armazenamento",
    ],
    cta: "Começar grátis",
    ctaUrl: "https://app.usepem.com.br/cadastro?plano=clinica",
  },
  {
    id: "rede",
    name: "Rede",
    price: 997,
    description: "Para redes de clínicas e hospitais",
    highlight: false,
    features: [
      "Médicos ilimitados",
      "Agendamentos ilimitados",
      "Tudo do Clínica",
      "Follow-up pós-consulta e novo lead",
      "Suporte prioritário",
      "Onboarding assistido",
      "50 GB de armazenamento",
    ],
    cta: "Falar com especialista",
    ctaUrl: "https://wa.me/5511999999999",
  },
]

export function Planos() {
  return (
    <section id="planos" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <p className="text-[#1DAB87] text-sm font-semibold uppercase tracking-widest mb-4">
            Planos
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A] mb-4">
            Simples. Transparente. Sem surpresa.
          </h2>
          <p className="text-slate-500 text-lg">
            14 dias grátis em todos os planos. Cancele quando quiser.
          </p>
        </motion.div>

        {/* Comparativo vs concorrentes */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-[#1DAB87]/10 border border-[#1DAB87]/20 rounded-full px-5 py-2">
            <Zap className="w-4 h-4 text-[#1DAB87]" />
            <span className="text-sm text-[#0B1F3A] font-medium">
              Até <strong className="text-[#1DAB87]">60% mais barato</strong> que iClinic e Feegow — com mais recursos
            </span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {planos.map((plano, i) => (
            <motion.div
              key={plano.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`relative rounded-2xl p-7 flex flex-col ${
                plano.highlight
                  ? "bg-[#0B1F3A] text-white shadow-2xl scale-105"
                  : "bg-white border border-slate-200"
              }`}
            >
              {plano.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#1DAB87] text-white text-xs font-bold px-4 py-1.5 rounded-full">
                  {plano.badge}
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-lg font-bold mb-1 ${plano.highlight ? "text-white" : "text-[#0B1F3A]"}`}>
                  {plano.name}
                </h3>
                <p className={`text-sm ${plano.highlight ? "text-white/50" : "text-slate-400"}`}>
                  {plano.description}
                </p>
              </div>

              <div className="mb-7">
                <span className={`text-4xl font-bold ${plano.highlight ? "text-white" : "text-[#0B1F3A]"}`}>
                  R$ {plano.price}
                </span>
                <span className={`text-sm ml-1 ${plano.highlight ? "text-white/50" : "text-slate-400"}`}>/mês</span>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {plano.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plano.highlight ? "text-[#1DAB87]" : "text-[#1DAB87]"}`} />
                    <span className={`text-sm ${plano.highlight ? "text-white/80" : "text-slate-600"}`}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={plano.ctaUrl}
                className={`block text-center font-semibold py-3.5 rounded-xl transition-all text-sm ${
                  plano.highlight
                    ? "bg-[#1DAB87] hover:bg-[#158a6d] text-white"
                    : "bg-[#0B1F3A] hover:bg-[#112849] text-white"
                }`}
              >
                {plano.cta}
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-slate-400 mt-8"
        >
          Pagamento processado com segurança via Stripe. Sem fidelidade.
        </motion.p>
      </div>
    </section>
  )
}

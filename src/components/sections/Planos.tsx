"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

const planos = [
  {
    id: "solo",
    name: "Solo",
    tag: "Autônomos",
    price: 347,
    description: "Para médico autônomo ou consultório individual que quer eliminar o operacional.",
    highlight: false,
    features: [
      "1 médico",
      "Agendamentos ilimitados",
      "Inbox unificado (Instagram, Facebook e WhatsApp)",
      "CRM clínico com pipeline e scoring",
      "Prontuário eletrônico completo",
      "Receituário com assinatura ICP-Brasil A1",
      "Planejamentos cirúrgicos em PDF",
      "Financeiro básico",
      "Integração Google Calendar",
      "Suporte por WhatsApp",
    ],
    cta: "Começar grátis",
    ctaUrl: "https://app.usepem.com.br/cadastro?plano=solo",
  },
  {
    id: "clinica",
    name: "Clínica",
    tag: "Mais escolhido",
    price: 497,
    description: "Para clínicas com múltiplos médicos que querem previsibilidade e crescimento.",
    highlight: true,
    features: [
      "Até 5 médicos",
      "Tudo do Solo",
      "Lembretes automáticos 24h, 1h e aniversário via WhatsApp",
      "CRM avançado com régua de follow-up automatizada",
      "Financeiro completo + importação OFX bancária",
      "Controle de estoque",
      "Relatórios avançados e dashboards executivos",
      "Follow-up pós-consulta automatizado",
      "10 GB de armazenamento",
      "Onboarding assistido em 48h",
    ],
    cta: "Começar grátis",
    ctaUrl: "https://app.usepem.com.br/cadastro?plano=clinica",
  },
  {
    id: "rede",
    name: "Rede+",
    tag: "Institucional",
    price: 997,
    description: "Para redes de clínicas, hospitais e operações com múltiplas unidades.",
    highlight: false,
    features: [
      "Médicos ilimitados",
      "Unidades ilimitadas",
      "Tudo do Clínica",
      "CRM multi-unidade com atribuição automática de leads",
      "Suporte prioritário com SLA dedicado",
      "Onboarding white-glove",
      "50 GB de armazenamento",
      "Acesso à API e integrações customizadas",
    ],
    cta: "Falar com especialista",
    ctaUrl: "https://wa.me/5573988548309",
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
          <p className="text-[#1DAB87] text-xs font-mono uppercase tracking-[0.2em] mb-5">
            Preço transparente
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A] mb-4">
            Simples. Transparente. Sem surpresa no boleto.
          </h2>
          <p className="text-slate-500 text-lg">
            14 dias grátis em todos os planos. Cancele quando quiser, sem multa, sem burocracia.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-[#1DAB87]/10 border border-[#1DAB87]/20 rounded-full px-5 py-2">
            <span className="text-sm text-[#0B1F3A] font-medium">
              Tudo incluso por padrão — CRM, inbox unificado, receituário ICP-Brasil e financeiro. <strong className="text-[#1DAB87]">Sem módulo extra, sem upsell surpresa.</strong>
            </span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {planos.map((plano, i) => (
            <motion.div
              key={plano.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`relative rounded-2xl p-7 flex flex-col transition-shadow ${
                plano.highlight
                  ? "border-2 border-[#1a3a5c] md:scale-[1.03]"
                  : "border border-slate-200"
              }`}
              style={{
                background: plano.highlight ? "#0B1F3A" : "#ffffff",
                boxShadow: plano.highlight ? "0 8px 32px rgba(11,31,58,0.2)" : "0 2px 8px rgba(11,31,58,0.06)",
              }}
            >
              {plano.highlight && (
                <div
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-white text-xs font-bold px-4 py-1.5 rounded-full"
                  style={{ background: "#1a3a5c" }}
                >
                  {plano.tag}
                </div>
              )}

              <div className="mb-5">
                {!plano.highlight && (
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-[#1a3a5c] bg-[#EEF3F9] px-2.5 py-1 rounded-full mb-3 inline-block">
                    {plano.tag}
                  </span>
                )}
                <h3 className={`text-xl font-bold mt-1 ${plano.highlight ? "text-white" : "text-[#0B1F3A]"}`}>
                  {plano.name}
                </h3>
                <p className={`text-sm mt-1 ${plano.highlight ? "text-white/50" : "text-slate-400"}`}>
                  {plano.description}
                </p>
              </div>

              <div className="mb-7">
                <span className={`text-[2.5rem] font-bold tracking-tight tabular-nums ${plano.highlight ? "text-white" : "text-[#0B1F3A]"}`}>
                  R$ {plano.price}
                </span>
                <span className={`text-base ml-1 ${plano.highlight ? "text-white/50" : "text-slate-400"}`}>/mês</span>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {plano.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#1DAB87]" strokeWidth={3} />
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
                style={plano.highlight ? { boxShadow: "0 4px 12px rgba(29,171,135,0.25)" } : {}}
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
          className="text-center text-sm text-slate-400 mt-10"
        >
          Pagamento processado com segurança via Stripe. Emissão de nota fiscal automática. Sem fidelidade. Cancele a qualquer momento diretamente no painel.
        </motion.p>
      </div>
    </section>
  )
}

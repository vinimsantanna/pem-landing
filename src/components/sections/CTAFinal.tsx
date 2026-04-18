"use client"

import { motion } from "framer-motion"
import { ArrowRight, MessageCircle } from "lucide-react"

export function CTAFinal() {
  return (
    <section
      className="py-28 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0B1F3A 0%, #1a3a5c 100%)" }}
    >
      {/* Decorative radial gradients */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "rgba(29, 171, 135, 0.15)", filter: "blur(80px)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "rgba(168, 200, 232, 0.1)", filter: "blur(80px)" }}
      />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[#1DAB87] text-xs font-mono uppercase tracking-[0.2em] mb-10">
            O próximo passo é simples
          </p>

          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-8 tracking-tight">
            Cada dia sem o PEM é{" "}
            <br className="hidden md:block" />
            um dia de receita perdida.
          </h2>

          <p className="text-white/40 text-xl mb-14 max-w-xl leading-relaxed">
            Junte-se aos médicos que já transformaram a gestão da própria clínica. 14 dias grátis, sem cartão de crédito, cancele quando quiser.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <a
              href="https://app.usepem.com.br/cadastro"
              className="group inline-flex items-center gap-3 bg-[#1DAB87] hover:bg-[#158a6d] text-white font-semibold px-8 py-4 rounded-xl transition-all text-base"
              style={{ boxShadow: "0 4px 12px rgba(29,171,135,0.25)" }}
            >
              Começar grátis por 14 dias
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="https://wa.me/5573988548309"
              className="inline-flex items-center gap-3 font-medium py-4 px-6 rounded-xl transition-all text-base text-white border border-white/25 hover:bg-white hover:text-[#0B1F3A]"
            >
              <MessageCircle className="w-4 h-4" />
              Agendar demonstração com especialista
            </a>
          </div>

          <p className="text-white/20 text-sm mt-8">
            Sem fidelidade · Cancele quando quiser · Suporte em português via WhatsApp · Ativação guiada em 48h
          </p>
        </motion.div>
      </div>
    </section>
  )
}

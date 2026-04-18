"use client"

import { motion } from "framer-motion"
import { ArrowRight, MessageCircle } from "lucide-react"

export function CTAFinal() {
  return (
    <section className="py-28 bg-[#0B1F3A]">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[#1DAB87] text-xs font-mono uppercase tracking-[0.2em] mb-10">
            Pronto para começar?
          </p>

          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-8 tracking-tight">
            Cada dia sem o PEM é{" "}
            <br className="hidden md:block" />
            um dia de receita perdida.
          </h2>

          <p className="text-white/40 text-xl mb-14 max-w-xl leading-relaxed">
            Junte-se às clínicas que já transformaram a gestão. 14 dias grátis, sem cartão de crédito, cancele quando quiser.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <a
              href="https://app.usepem.com.br/cadastro"
              className="group inline-flex items-center gap-3 bg-[#1DAB87] hover:bg-[#158a6d] text-white font-semibold px-8 py-4 rounded-xl transition-all text-base"
            >
              Começar grátis por 14 dias
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="https://wa.me/5511999999999"
              className="inline-flex items-center gap-3 text-white/50 hover:text-white font-medium py-4 transition-colors text-base"
            >
              <MessageCircle className="w-4 h-4" />
              Falar com especialista
            </a>
          </div>

          <p className="text-white/20 text-sm mt-8">
            Sem fidelidade · Cancele quando quiser · Suporte em português
          </p>
        </motion.div>
      </div>
    </section>
  )
}

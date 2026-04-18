"use client"

import { motion, animate } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"

function Counter({ to, prefix = "", suffix = "" }: { to: number; prefix?: string; suffix?: string }) {
  const [value, setValue] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    const controls = animate(0, to, {
      duration: 1.8,
      ease: "easeOut",
      onUpdate: (v) => setValue(Math.floor(v)),
    })
    return controls.stop
  }, [isInView, to])

  return (
    <span ref={ref}>
      {prefix}{value.toLocaleString("pt-BR")}{suffix}
    </span>
  )
}

const numeros = [
  {
    valor: <Counter to={87} suffix="%" prefix="−" />,
    label: "tempo gasto em confirmação de consultas",
    suporte: "Medido em clínicas que migraram do processo manual para a automação PEM nos primeiros 30 dias de uso.",
  },
  {
    valor: <Counter to={94} suffix="%" />,
    label: "taxa média de comparecimento",
    suporte: "Contra 73% da média de mercado sem sistema de lembretes automáticos. Equivale a ~5 consultas recuperadas por semana.",
  },
  {
    valor: <span ref={null}>3×</span>,
    label: "taxa de conversão de lead em consulta",
    suporte: "Clínicas que usaram o CRM do PEM com scoring e follow-up automático triplicaram a conversão de leads captados via Instagram, Facebook e WhatsApp.",
  },
  {
    valor: <Counter to={34} suffix="%" prefix="+" />,
    label: "margem adicional identificada em 3 meses",
    suporte: "Média de clínicas que passaram a usar o módulo financeiro do PEM para reconciliação diária e análise de custo por procedimento.",
  },
]

export function Numeros() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="text-[#1DAB87] text-xs font-mono uppercase tracking-[0.2em] mb-5">
            Dados reais
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3A] leading-tight">
            O que muda nos primeiros 90 dias.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 divide-y md:divide-y-0 md:divide-x divide-slate-100">
          {numeros.map((n, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="py-10 lg:px-8 first:pl-0 last:pr-0"
            >
              <p className="text-[4.5rem] font-bold text-[#1a3a5c] leading-none tracking-tight tabular-nums mb-3">
                {n.valor}
              </p>
              <p className="text-[#0B1F3A] text-sm font-semibold mb-3 leading-snug">{n.label}</p>
              <p className="text-slate-400 text-xs leading-relaxed max-w-[220px]">{n.suporte}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

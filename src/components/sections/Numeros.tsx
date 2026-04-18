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
    valor: <Counter to={2847} />,
    unidade: "consultas",
    contexto: "agendadas automaticamente esta semana por clínicas que usam PEM",
  },
  {
    valor: <Counter to={94} suffix="%" />,
    unidade: "taxa de comparecimento",
    contexto: "média das clínicas PEM — contra 73% sem sistema de lembretes automáticos",
  },
  {
    valor: <Counter prefix="R$ " to={4200000} />,
    unidade: "em receita gerenciada",
    contexto: "processados pelo módulo financeiro do PEM nos últimos 30 dias",
  },
]

export function Numeros() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[#1DAB87] text-xs font-mono uppercase tracking-[0.2em] mb-20"
        >
          Os resultados
        </motion.p>

        <div className="space-y-0 divide-y divide-slate-100">
          {numeros.map((n, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="grid md:grid-cols-[1fr_auto] gap-8 py-12 items-start"
            >
              <div>
                <p className="text-[5rem] md:text-[7rem] font-bold text-[#0B1F3A] leading-none tracking-tight">
                  {n.valor}
                </p>
                <p className="text-[#1DAB87] text-sm font-semibold mt-2 uppercase tracking-widest">{n.unidade}</p>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed max-w-xs md:text-right mt-4 md:mt-6">
                {n.contexto}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

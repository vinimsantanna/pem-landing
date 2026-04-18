"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const appointments = [
  { time: "08:30", name: "Maria Fernanda S.", type: "Consulta inicial", status: "confirmed" },
  { time: "09:15", name: "João Augusto P.", type: "Retorno", status: "confirmed" },
  { time: "10:00", name: "Ana Paula Lima", type: "Procedimento", status: "pending" },
  { time: "11:00", name: "Carlos Menezes", type: "Avaliação", status: "confirmed" },
  { time: "14:30", name: "Beatriz Oliveira", type: "Pós-operatório", status: "confirmed" },
]

export function Hero() {
  return (
    <section className="min-h-screen bg-[#070f1e] flex flex-col pt-16">
      <div className="flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full py-20 grid lg:grid-cols-[55%_45%] gap-12 items-center">

          {/* Left */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="text-[#1DAB87] text-xs font-mono uppercase tracking-[0.25em] mb-10"
            >
              Software médico · Versão 2025
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-[4.5rem] lg:text-[5rem] font-bold text-white leading-[1.05] tracking-tight mb-8"
            >
              O software que
              <br />
              médicos de{" "}
              <span className="text-[#1DAB87]">alto padrão</span>
              <br />
              escolheram para crescer.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-white/45 text-lg leading-relaxed max-w-md mb-12"
            >
              Confirmação automática, prontuário eletrônico e receituário digital — para médicos que respeitam o próprio tempo.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.35 }}
              className="flex items-center gap-6"
            >
              <a
                href="https://app.usepem.com.br/cadastro"
                className="group inline-flex items-center gap-3 bg-[#1DAB87] hover:bg-[#158a6d] text-white font-semibold px-8 py-4 rounded-xl transition-all text-base"
              >
                Começar grátis
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <span className="text-white/20 text-sm">14 dias · sem cartão</span>
            </motion.div>
          </div>

          {/* Right — Product UI (fiel ao PEM real) */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div
              className="rounded-xl overflow-hidden border border-white/10"
              style={{ boxShadow: "0 48px 96px rgba(0,0,0,0.6)" }}
            >
              {/* Window chrome */}
              <div className="bg-slate-100 px-4 py-2.5 flex items-center gap-2 border-b border-slate-200">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-400" />
                </div>
                <div className="flex-1 mx-3">
                  <div className="bg-white border border-slate-200 rounded-md py-0.5 px-3 max-w-[200px] mx-auto">
                    <span className="text-slate-400 text-[10px] font-mono">app.usepem.com.br/agenda</span>
                  </div>
                </div>
              </div>

              {/* Real PEM Agenda UI */}
              <div className="bg-white">
                {/* Page header */}
                <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-slate-800">Agenda</span>
                    <span className="text-green-600 text-xs font-medium bg-green-50 px-2 py-0.5 rounded-full">8 confirmados hoje</span>
                  </div>
                  <div className="flex items-center gap-1 rounded-lg border border-slate-200 bg-slate-50 p-0.5">
                    {["Dia", "Semana", "Mês"].map((v, i) => (
                      <span key={v} className={`rounded-md px-2.5 py-0.5 text-xs font-medium ${i === 0 ? "bg-white text-slate-800 shadow-sm" : "text-slate-500"}`}>{v}</span>
                    ))}
                  </div>
                </div>

                {/* Calendar table */}
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200">
                      <th className="w-12 py-2 text-slate-400 font-normal" />
                      <th className="py-2 px-3 text-left font-medium text-slate-600">Dr. Carlos Silva</th>
                      <th className="py-2 px-3 text-left font-medium text-slate-600">Dra. Ana Faria</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { h: "08:30", c1: { n: "Maria Fernanda S.", p: "Consulta inicial", s: "confirmado" }, c2: null },
                      { h: "09:00", c1: null, c2: { n: "João Augusto P.", p: "Retorno", s: "agendado" } },
                      { h: "10:00", c1: { n: "Patrícia Lima", p: "Pós-operatório", s: "confirmado" }, c2: { n: "Carlos Menezes", p: "Avaliação", s: "confirmado" } },
                      { h: "11:00", c1: null, c2: null },
                    ].map((row) => (
                      <tr key={row.h} className="border-b border-slate-100">
                        <td className="py-2 pr-2 text-right text-slate-400 text-[10px] w-12 pl-2">{row.h}</td>
                        {[row.c1, row.c2].map((cell, ci) => (
                          <td key={ci} className="px-2 py-1">
                            {cell ? (
                              <div className={`rounded-md p-2 ${cell.s === "confirmado" ? "bg-green-50 border border-green-100" : "bg-blue-50 border border-blue-100"}`}>
                                <span className={`inline-flex px-1.5 py-0.5 rounded-full text-[9px] font-medium mb-1 ${cell.s === "confirmado" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"}`}>{cell.s}</span>
                                <div className="font-medium text-slate-800 truncate">{cell.n}</div>
                                <div className="text-slate-500 truncate">{cell.p}</div>
                              </div>
                            ) : (
                              <div className="h-10 rounded-md border border-dashed border-slate-200" />
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>

                {/* WhatsApp notification bar */}
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 }}
                  className="mx-3 mb-3 mt-2 flex items-center gap-2.5 bg-green-50 border border-green-100 rounded-lg px-3 py-2.5"
                >
                  <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center shrink-0">
                    <span className="text-white text-[9px] font-bold">✓</span>
                  </div>
                  <p className="text-green-700 text-xs font-medium">4 lembretes enviados via WhatsApp automaticamente</p>
                  <span className="text-green-500 text-[10px] ml-auto">agora</span>
                </motion.div>
              </div>
            </div>

            {/* Floating cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 }}
              className="absolute -bottom-5 -left-8 bg-white rounded-2xl px-5 py-4 shadow-2xl border border-slate-100"
            >
              <p className="text-[#0B1F3A] text-2xl font-bold leading-none">−2h</p>
              <p className="text-slate-400 text-xs mt-1">por dia no agendamento</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.35 }}
              className="absolute -top-5 -right-6 bg-[#0d1f38] border border-white/10 rounded-2xl px-5 py-4 shadow-2xl"
            >
              <p className="text-[#1DAB87] text-2xl font-bold leading-none">94%</p>
              <p className="text-white/35 text-xs mt-1">taxa de confirmação</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Trust strip */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs uppercase tracking-widest">Confiado por clínicas em todo o Brasil</p>
          <div className="flex items-center gap-8 sm:gap-12">
            {[
              { value: "340+", label: "clínicas ativas" },
              { value: "2.800+", label: "consultas/semana" },
              { value: "R$ 4.2M+", label: "gerenciados/mês" },
            ].map((s) => (
              <div key={s.value} className="text-center">
                <p className="text-white text-sm font-bold">{s.value}</p>
                <p className="text-white/25 text-xs">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

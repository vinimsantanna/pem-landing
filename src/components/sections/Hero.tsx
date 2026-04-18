"use client"

import { motion } from "framer-motion"
import { ArrowRight, Clock, CheckCircle, MessageCircle } from "lucide-react"
import Image from "next/image"

const floatingCards = [
  { icon: Clock, value: "−2h", label: "por dia no agendamento" },
  { icon: CheckCircle, value: "94%", label: "taxa de confirmação" },
  { icon: MessageCircle, value: "3×", label: "conversão de leads" },
]

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col pt-20 relative overflow-hidden" style={{ background: "#F8FAFC" }}>
      {/* Gradient mesh blobs */}
      <div
        className="absolute top-[-80px] right-[-60px] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "#A8C8E8", filter: "blur(120px)", opacity: 0.4 }}
      />
      <div
        className="absolute bottom-[-40px] left-[-80px] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "#1DAB87", filter: "blur(120px)", opacity: 0.12 }}
      />

      <div className="flex-1 flex items-center relative z-10">
        <div className="max-w-7xl mx-auto px-6 w-full py-12 lg:py-20 grid lg:grid-cols-[52%_48%] gap-12 lg:gap-14 items-center">

          {/* Left */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="text-[#1DAB87] text-xs font-mono uppercase tracking-[0.25em] mb-6 md:mb-8"
            >
              PEM · Software médico · Versão 2026
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-[#0B1F3A] leading-[1.05] tracking-tight mb-6 md:mb-7"
            >
              Médico de alto padrão não perde tempo confirmando consulta no WhatsApp.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-[#334155] text-base md:text-lg leading-relaxed max-w-lg mb-8 md:mb-10"
            >
              Da primeira mensagem no Instagram, Facebook ou WhatsApp até a receita assinada do celular — um sistema só. Agenda, prontuário, receituário, financeiro e CRM clínico operando em conjunto, sem planilha, sem gambiarra.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.35 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-6"
            >
              <a
                href="https://app.usepem.com.br/cadastro"
                className="group inline-flex items-center justify-center gap-3 bg-[#1DAB87] hover:bg-[#158a6d] text-white font-semibold px-7 py-4 rounded-xl transition-all text-base"
                style={{ boxShadow: "0 4px 12px rgba(29,171,135,0.25)" }}
              >
                Começar grátis por 14 dias
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="https://wa.me/5573988548309"
                className="inline-flex items-center justify-center gap-2 border border-[#0B1F3A]/20 hover:bg-[#0B1F3A] hover:text-white text-[#0B1F3A] font-medium px-6 py-4 rounded-xl transition-all text-base"
              >
                Ver demonstração (2 min)
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="text-[#0B1F3A]/35 text-sm mb-8 lg:mb-0"
            >
              Sem cartão de crédito · Sem fidelidade · Ativação em 48h
            </motion.p>

            {/* Mobile metric cards — substituto dos floating cards no desktop */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="grid grid-cols-3 gap-3 mt-6 lg:hidden"
            >
              {floatingCards.map(({ icon: Icon, value, label }) => (
                <div
                  key={value}
                  className="rounded-xl px-3 py-3 flex flex-col items-center text-center bg-white border border-slate-100"
                  style={{ boxShadow: "0 2px 8px rgba(11,31,58,0.08)" }}
                >
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-2" style={{ background: "#E8F8F4" }}>
                    <Icon className="w-4 h-4 text-[#1DAB87]" />
                  </div>
                  <p className="text-[#0B1F3A] text-base font-bold leading-none mb-1">{value}</p>
                  <p className="text-slate-400 text-[10px] leading-tight">{label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Dashboard mockup (desktop only) */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div
              className="rounded-xl overflow-hidden border border-slate-200"
              style={{ boxShadow: "0 24px 64px rgba(11,31,58,0.18)" }}
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
                    <span className="text-slate-400 text-[10px] font-mono">app.usepem.com.br/dashboard</span>
                  </div>
                </div>
              </div>

              {/* Dashboard UI */}
              <div className="bg-white">
                <div className="flex items-center justify-between border-b border-slate-100 px-4 py-2.5">
                  <span className="text-xs font-semibold text-[#0B1F3A]">Dashboard</span>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-slate-400">Hoje, Sex 18 Abr</span>
                    <div className="w-6 h-6 rounded-full bg-[#0B1F3A] flex items-center justify-center">
                      <span className="text-white text-[8px] font-bold">CS</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-0 border-b border-slate-100">
                  {[
                    { l: "Faturamento", v: "R$ 8.400", sub: "+12% esta semana", c: "text-green-600" },
                    { l: "Confirmadas hoje", v: "11/12", sub: "1 pendente", c: "text-[#0B1F3A]" },
                    { l: "Leads novos", v: "7", sub: "3 quentes", c: "text-amber-600" },
                    { l: "Margem", v: "67%", sub: "+2% vs. mês ant.", c: "text-[#1DAB87]" },
                  ].map((k, i) => (
                    <div key={i} className={`px-3 py-2.5 ${i < 3 ? "border-r border-slate-100" : ""}`}>
                      <p className="text-[8px] text-slate-400 mb-0.5">{k.l}</p>
                      <p className={`text-sm font-bold ${k.c}`}>{k.v}</p>
                      <p className="text-[8px] text-slate-400">{k.sub}</p>
                    </div>
                  ))}
                </div>

                <div className="px-4 py-2.5">
                  <p className="text-[9px] font-semibold text-slate-500 uppercase tracking-wide mb-2">Próximas consultas</p>
                  <div className="space-y-1.5">
                    {[
                      { h: "14:30", n: "Maria Fernanda S.", t: "Consulta inicial", s: "confirmado" },
                      { h: "15:15", n: "João Augusto P.", t: "Retorno", s: "confirmado" },
                      { h: "16:00", n: "Ana Paula Lima", t: "Procedimento", s: "pendente" },
                    ].map((a, i) => (
                      <div key={i} className="flex items-center gap-2.5">
                        <span className="text-[9px] text-slate-400 w-8 shrink-0">{a.h}</span>
                        <div className={`flex-1 rounded-lg px-2.5 py-1.5 flex items-center justify-between ${a.s === "confirmado" ? "bg-green-50 border border-green-100" : "bg-amber-50 border border-amber-100"}`}>
                          <div>
                            <p className="text-[9px] font-medium text-slate-800">{a.n}</p>
                            <p className="text-[8px] text-slate-500">{a.t}</p>
                          </div>
                          <span className={`text-[8px] font-semibold px-1.5 py-0.5 rounded-full ${a.s === "confirmado" ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"}`}>
                            {a.s}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 }}
                  className="mx-3 mb-3 flex items-center gap-2 bg-green-50 border border-green-100 rounded-lg px-3 py-2"
                >
                  <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center shrink-0">
                    <span className="text-white text-[8px]">✓</span>
                  </div>
                  <p className="text-green-700 text-[10px] font-medium">3 lembretes enviados via WhatsApp automaticamente</p>
                  <span className="text-green-500 text-[9px] ml-auto shrink-0">agora</span>
                </motion.div>
              </div>
            </div>

            {/* Floating glass cards — desktop only */}
            {[
              { icon: Clock, value: "−2h", label: "por dia no agendamento", pos: "absolute -bottom-6 -left-10", delay: 1.2 },
              { icon: CheckCircle, value: "94%", label: "taxa de confirmação", pos: "absolute -top-6 -right-8", delay: 1.4 },
              { icon: MessageCircle, value: "Leads do Insta", label: "em consulta", pos: "absolute top-1/3 -right-12", delay: 1.6 },
            ].map(({ icon: Icon, value, label, pos, delay }) => (
              <motion.div
                key={value}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay }}
                className={`${pos} rounded-xl px-5 py-3.5`}
                style={{
                  background: "rgba(255, 255, 255, 0.72)",
                  backdropFilter: "blur(20px) saturate(180%)",
                  WebkitBackdropFilter: "blur(20px) saturate(180%)",
                  border: "1px solid rgba(255, 255, 255, 0.6)",
                  boxShadow: "0 8px 32px rgba(11,31,58,0.15), inset 0 1px 0 rgba(255,255,255,0.8)",
                }}
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: "#E8F8F4" }}>
                    <Icon className="w-4 h-4 text-[#1DAB87]" />
                  </div>
                  <div>
                    <p className="text-[#0B1F3A] text-base font-bold leading-none">{value}</p>
                    <p className="text-slate-500 text-xs mt-0.5">{label}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Trust strip */}
      <div className="border-t border-[#0B1F3A]/06 relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 md:gap-4">
          <p className="text-[#0B1F3A]/30 text-xs uppercase tracking-widest font-medium shrink-0">
            Construído com médicos de 12 especialidades
          </p>
          <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-2 sm:gap-6">
            {[
              "Assinatura digital ICP-Brasil A1",
              "Dados no Brasil · LGPD-compliant",
              "Google Calendar, Instagram, Facebook e WhatsApp",
            ].map((s) => (
              <div key={s} className="flex items-center gap-1.5">
                <span className="text-[#1DAB87] text-xs">✓</span>
                <p className="text-[#0B1F3A]/45 text-xs">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

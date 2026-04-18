"use client"

import { motion } from "framer-motion"

function BrowserWindow({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl overflow-hidden border border-slate-200 shadow-xl">
      <div className="bg-slate-50 px-4 py-2.5 flex items-center gap-2 border-b border-slate-200">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
        </div>
        <div className="flex-1 mx-3">
          <div className="bg-white border border-slate-200 rounded-md py-0.5 px-3 max-w-[200px] mx-auto">
            <span className="text-slate-400 text-[10px] font-mono">app.usepem.com.br</span>
          </div>
        </div>
      </div>
      <div className="bg-white">{children}</div>
    </div>
  )
}

const AgendaMockup = (
  <BrowserWindow>
    {/* Header */}
    <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100">
      <span className="text-sm font-semibold text-slate-800">Agenda</span>
      <div className="flex items-center gap-1 rounded-lg border border-slate-200 bg-slate-50 p-0.5">
        {["Dia", "Semana", "Mês"].map((v, i) => (
          <span key={v} className={`rounded-md px-2.5 py-0.5 text-xs font-medium ${i === 0 ? "bg-white text-slate-800 shadow-sm" : "text-slate-500"}`}>{v}</span>
        ))}
      </div>
    </div>
    {/* Table */}
    <div className="overflow-hidden">
      <table className="w-full text-xs border-collapse">
        <thead>
          <tr className="bg-slate-50 border-b border-slate-200">
            <th className="w-12 py-2 text-slate-400 font-normal text-right pr-3" />
            <th className="py-2 px-3 text-left font-medium text-slate-600">Dr. Carlos Silva</th>
            <th className="py-2 px-3 text-left font-medium text-slate-600">Dra. Ana Faria</th>
          </tr>
        </thead>
        <tbody>
          {[
            {
              h: "08:00",
              c1: { nome: "Maria Fernanda", proc: "Consulta inicial", status: "confirmado" },
              c2: null,
            },
            {
              h: "09:00",
              c1: null,
              c2: { nome: "João Augusto", proc: "Retorno", status: "agendado" },
            },
            {
              h: "10:00",
              c1: { nome: "Patrícia Lima", proc: "Pós-operatório", status: "confirmado" },
              c2: { nome: "Carlos Menezes", proc: "Avaliação", status: "confirmado" },
            },
            {
              h: "11:00",
              c1: null,
              c2: null,
            },
          ].map((row) => (
            <tr key={row.h} className="border-b border-slate-100">
              <td className="py-2 pr-3 text-right text-slate-400 w-12">{row.h}</td>
              <td className="px-2 py-1">
                {row.c1 ? (
                  <div className={`rounded-md p-2 ${row.c1.status === "confirmado" ? "bg-green-50 border border-green-100" : "bg-blue-50 border border-blue-100"}`}>
                    <span className={`inline-flex px-1.5 py-0.5 rounded-full text-[9px] font-medium mb-1 ${row.c1.status === "confirmado" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"}`}>
                      {row.c1.status}
                    </span>
                    <div className="font-medium text-slate-800 truncate">{row.c1.nome}</div>
                    <div className="text-slate-500 truncate">{row.c1.proc}</div>
                  </div>
                ) : (
                  <div className="h-10 rounded-md border border-dashed border-slate-200 hover:border-blue-300" />
                )}
              </td>
              <td className="px-2 py-1">
                {row.c2 ? (
                  <div className={`rounded-md p-2 ${row.c2.status === "confirmado" ? "bg-green-50 border border-green-100" : "bg-blue-50 border border-blue-100"}`}>
                    <span className={`inline-flex px-1.5 py-0.5 rounded-full text-[9px] font-medium mb-1 ${row.c2.status === "confirmado" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"}`}>
                      {row.c2.status}
                    </span>
                    <div className="font-medium text-slate-800 truncate">{row.c2.nome}</div>
                    <div className="text-slate-500 truncate">{row.c2.proc}</div>
                  </div>
                ) : (
                  <div className="h-10 rounded-md border border-dashed border-slate-200" />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </BrowserWindow>
)

const ProntuarioMockup = (
  <BrowserWindow>
    <div className="p-4 space-y-3">
      {/* Header */}
      <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
        <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center">
          <span className="text-blue-500 text-xs">📋</span>
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-800">Prontuário</p>
          <p className="text-xs text-slate-400">Maria Cândida Rocha · 42 anos</p>
        </div>
        <span className="ml-auto text-xs text-slate-400">9 consultas</span>
      </div>
      {/* Timeline */}
      <div className="space-y-3">
        {[
          { data: "15/04/2025", titulo: "Retorno — Dermatologia", medico: "Dr. Carlos Silva", badge: "bg-green-100 text-green-700", label: "Realizado" },
          { data: "02/03/2025", titulo: "Procedimento estético", medico: "Dra. Ana Faria", badge: "bg-green-100 text-green-700", label: "Realizado" },
          { data: "10/01/2025", titulo: "Consulta inicial", medico: "Dr. Carlos Silva", badge: "bg-blue-100 text-blue-700", label: "Arquivado" },
        ].map((e, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className="flex flex-col items-center gap-1 shrink-0 mt-1.5">
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              {i < 2 && <div className="w-px h-8 bg-slate-200" />}
            </div>
            <div className="flex-1 min-w-0 bg-slate-50 rounded-lg px-3 py-2 border border-slate-100">
              <div className="flex items-center justify-between gap-2 mb-0.5">
                <p className="text-xs font-medium text-slate-800 truncate">{e.titulo}</p>
                <span className={`text-[9px] font-medium px-1.5 py-0.5 rounded-full shrink-0 ${e.badge}`}>{e.label}</span>
              </div>
              <p className="text-[10px] text-slate-400">{e.medico} · {e.data}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </BrowserWindow>
)

const ReceituarioMockup = (
  <BrowserWindow>
    <div className="p-4">
      <div className="flex items-center justify-between mb-3">
        <div>
          <p className="text-sm font-semibold text-slate-800">Receituário</p>
          <p className="text-xs text-slate-400">12 receitas</p>
        </div>
        <button className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 text-white rounded-lg text-xs font-medium">
          + Nova receita
        </button>
      </div>
      <div className="rounded-xl border border-slate-200 overflow-hidden">
        <table className="w-full text-xs">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              {["Paciente", "Tipo", "Status", "Data"].map((h) => (
                <th key={h} className="px-3 py-2 text-left font-medium text-slate-600">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {[
              { nome: "Maria Fernanda", tipo: "Simples", status: "Assinada", data: "17/04", signed: true },
              { nome: "João Augusto P.", tipo: "Especial B2", status: "Assinada", data: "16/04", signed: true },
              { nome: "Patrícia Souza", tipo: "Simples", status: "Pendente", data: "16/04", signed: false },
              { nome: "Carlos Menezes", tipo: "Simples", status: "Assinada", data: "15/04", signed: true },
            ].map((r, i) => (
              <tr key={i} className="hover:bg-slate-50">
                <td className="px-3 py-2 font-medium text-slate-800">{r.nome}</td>
                <td className="px-3 py-2">
                  <span className={`px-1.5 py-0.5 rounded-full font-medium ${r.tipo === "Especial B2" ? "bg-amber-100 text-amber-700" : "bg-blue-100 text-blue-700"}`}>
                    {r.tipo}
                  </span>
                </td>
                <td className="px-3 py-2">
                  <span className={`flex items-center gap-1 font-medium ${r.signed ? "text-green-700" : "text-amber-600"}`}>
                    {r.signed ? "✓ Assinada" : "⏳ Pendente"}
                  </span>
                </td>
                <td className="px-3 py-2 text-slate-500">{r.data}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </BrowserWindow>
)

const FinanceiroMockup = (
  <BrowserWindow>
    <div className="p-4 space-y-3">
      {/* KPIs */}
      <div className="grid grid-cols-3 gap-2">
        {[
          { l: "Receitas", v: "R$ 24.800", c: "text-green-600", bg: "bg-green-50 border-green-100" },
          { l: "Despesas", v: "R$ 8.200", c: "text-red-500", bg: "bg-red-50 border-red-100" },
          { l: "Saldo", v: "R$ 16.600", c: "text-blue-600", bg: "bg-blue-50 border-blue-100" },
        ].map((k) => (
          <div key={k.l} className={`rounded-lg border px-3 py-2.5 ${k.bg}`}>
            <p className="text-[10px] text-slate-500 mb-0.5">{k.l}</p>
            <p className={`text-sm font-bold ${k.c}`}>{k.v}</p>
          </div>
        ))}
      </div>
      {/* Transactions */}
      <div className="rounded-xl border border-slate-200 overflow-hidden">
        <div className="bg-slate-50 px-3 py-2 border-b border-slate-200 flex items-center justify-between">
          <span className="text-[10px] font-semibold text-slate-600 uppercase tracking-wide">Lançamentos — Abril</span>
          <span className="text-[10px] text-slate-400">8 registros</span>
        </div>
        <div className="divide-y divide-slate-100">
          {[
            { desc: "Consulta — Maria Fernanda", cat: "Consultas", val: "+R$ 350", pago: true },
            { desc: "Aluguel sala procedimento", cat: "Infraestrutura", val: "−R$ 800", pago: true },
            { desc: "Consulta — João Augusto", cat: "Consultas", val: "+R$ 350", pago: true },
            { desc: "Material cirúrgico", cat: "Materiais", val: "−R$ 420", pago: false },
          ].map((t, i) => (
            <div key={i} className="flex items-center gap-3 px-3 py-2.5">
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-slate-800 truncate">{t.desc}</p>
                <p className="text-[10px] text-slate-400">{t.cat}</p>
              </div>
              <div className="text-right shrink-0">
                <p className={`text-xs font-semibold ${t.val.startsWith("+") ? "text-green-600" : "text-slate-700"}`}>{t.val}</p>
                <span className={`text-[9px] font-medium ${t.pago ? "text-green-600" : "text-amber-500"}`}>
                  {t.pago ? "pago" : "pendente"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </BrowserWindow>
)

const features = [
  {
    tag: "Agenda",
    titulo: "Confirmação automática. Sem secretária.",
    descricao:
      "O paciente agenda online. O sistema confirma via WhatsApp. Um lembrete vai 24h antes, outro 1h antes. Se cancelar, abre vaga automática para a lista de espera.",
    metricas: [
      { valor: "−87%", label: "tempo de confirmação" },
      { valor: "94%", label: "taxa de comparecimento" },
    ],
    mockup: AgendaMockup,
  },
  {
    tag: "Prontuário",
    titulo: "Histórico completo. Disponível em 3 segundos.",
    descricao:
      "Evoluções clínicas, anamnese, exames, diagnósticos e documentos numa linha do tempo organizada. Acessa do celular entre uma consulta e outra.",
    metricas: [
      { valor: "< 30s", label: "para acessar qualquer prontuário" },
      { valor: "100%", label: "digital e rastreável" },
    ],
    mockup: ProntuarioMockup,
  },
  {
    tag: "Receituário",
    titulo: "Assine receitas do celular. Com validade jurídica.",
    descricao:
      "Certificado ICP-Brasil padrão A1, homologado pelo ITI. Prescreve, assina digitalmente e envia para o paciente em menos de 60 segundos. Às 23h, no hospital ou em casa.",
    metricas: [
      { valor: "< 60s", label: "para emitir e enviar" },
      { valor: "ICP-A1", label: "validade jurídica plena" },
    ],
    mockup: ReceituarioMockup,
  },
  {
    tag: "Financeiro",
    titulo: "Você sabe exatamente quanto ganhou. Hoje.",
    descricao:
      "Dashboard em tempo real com receitas, despesas, inadimplência e fluxo de caixa. Importa OFX do banco, reconcilia automaticamente e gera relatórios com um clique.",
    metricas: [
      { valor: "+34%", label: "margem descoberta em 3 meses" },
      { valor: "0", label: "planilhas de Excel" },
    ],
    mockup: FinanceiroMockup,
  },
]

export function Funcionalidades() {
  return (
    <section id="funcionalidades" className="bg-[#070f1e]">
      <div className="max-w-6xl mx-auto px-6 py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <p className="text-[#1DAB87] text-xs font-mono uppercase tracking-[0.2em] mb-5">
            O protocolo
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight max-w-2xl">
            Quatro problemas resolvidos.{" "}
            <span className="text-white/25">Um sistema só.</span>
          </h2>
        </motion.div>

        <div className="space-y-24">
          {features.map((f, i) => (
            <motion.div
              key={f.tag}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`grid md:grid-cols-2 gap-16 items-center ${i % 2 !== 0 ? "md:[&>*:first-child]:order-2" : ""}`}
            >
              <div>
                <span className="text-[#1DAB87] text-xs font-mono uppercase tracking-widest mb-5 block">{f.tag}</span>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-5 leading-tight">{f.titulo}</h3>
                <p className="text-white/45 leading-relaxed mb-8 text-base">{f.descricao}</p>
                <div className="flex gap-8">
                  {f.metricas.map((m) => (
                    <div key={m.label}>
                      <p className="text-[#1DAB87] text-2xl font-bold">{m.valor}</p>
                      <p className="text-white/30 text-xs mt-1">{m.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>{f.mockup}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

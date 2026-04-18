"use client"

import { motion } from "framer-motion"
import { MockupInbox } from "@/components/landing/MockupInbox"
import { MockupCRMPipeline } from "@/components/landing/MockupCRMPipeline"

function BrowserWindow({ children, url }: { children: React.ReactNode; url: string }) {
  return (
    <div
      className="rounded-xl overflow-hidden border border-slate-200"
      style={{ boxShadow: "0 20px 60px rgba(11,31,58,0.15)" }}
    >
      <div className="bg-slate-50 px-4 py-2.5 flex items-center gap-2 border-b border-slate-200">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
        </div>
        <div className="flex-1 mx-3">
          <div className="bg-white border border-slate-200 rounded-md py-0.5 px-3 max-w-[200px] mx-auto">
            <span className="text-slate-400 text-[10px] font-mono">{url}</span>
          </div>
        </div>
      </div>
      <div className="bg-white">{children}</div>
    </div>
  )
}

const AgendaMockup = (
  <BrowserWindow url="app.usepem.com.br/agenda">
    <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100">
      <div className="flex items-center gap-2">
        <span className="text-sm font-semibold text-slate-800">Agenda</span>
        <span className="text-green-600 text-xs font-medium bg-green-50 px-2 py-0.5 rounded-full">11 confirmados hoje</span>
      </div>
      <div className="flex items-center gap-1 rounded-lg border border-slate-200 bg-slate-50 p-0.5">
        {["Dia", "Semana", "Mês"].map((v, i) => (
          <span key={v} className={`rounded-md px-2.5 py-0.5 text-xs font-medium ${i === 0 ? "bg-white text-slate-800 shadow-sm" : "text-slate-500"}`}>{v}</span>
        ))}
      </div>
    </div>
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
            { h: "08:00", c1: { nome: "Maria Fernanda", proc: "Consulta inicial", status: "confirmado" }, c2: null },
            { h: "09:00", c1: null, c2: { nome: "João Augusto", proc: "Retorno", status: "agendado" } },
            { h: "10:00", c1: { nome: "Patrícia Lima", proc: "Pós-operatório", status: "confirmado" }, c2: { nome: "Carlos Menezes", proc: "Avaliação", status: "confirmado" } },
            { h: "11:00", c1: { nome: "Beatriz Oliveira", proc: "Consulta inicial", status: "confirmado" }, c2: null },
          ].map((row) => (
            <tr key={row.h} className="border-b border-slate-100">
              <td className="py-2 pr-3 text-right text-slate-400 w-12">{row.h}</td>
              {[row.c1, row.c2].map((cell, ci) => (
                <td key={ci} className="px-2 py-1">
                  {cell ? (
                    <div className={`rounded-md p-2 ${cell.status === "confirmado" ? "bg-green-50 border border-green-100" : "bg-blue-50 border border-blue-100"}`}>
                      <span className={`inline-flex px-1.5 py-0.5 rounded-full text-[9px] font-medium mb-1 ${cell.status === "confirmado" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"}`}>
                        {cell.status}
                      </span>
                      <div className="font-medium text-slate-800 truncate">{cell.nome}</div>
                      <div className="text-slate-500 truncate">{cell.proc}</div>
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
    </div>
    <div className="mx-3 mb-3 mt-2 flex items-center gap-2.5 bg-green-50 border border-green-100 rounded-lg px-3 py-2">
      <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center shrink-0">
        <span className="text-white text-[8px]">✓</span>
      </div>
      <p className="text-green-700 text-xs font-medium">4 lembretes enviados via WhatsApp automaticamente</p>
      <span className="text-green-500 text-[10px] ml-auto">agora</span>
    </div>
  </BrowserWindow>
)

const ProntuarioMockup = (
  <BrowserWindow url="app.usepem.com.br/prontuario">
    <div className="p-4 space-y-3">
      <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
        <div className="w-9 h-9 rounded-xl bg-[#EEF3F9] flex items-center justify-center">
          <span className="text-[#1a3a5c] text-xs font-bold">MC</span>
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-800">Maria Cândida Rocha</p>
          <p className="text-xs text-slate-400">42 anos · CRM-SP: Dr. Carlos Silva</p>
        </div>
        <span className="ml-auto text-xs text-slate-400">9 consultas</span>
      </div>
      <div className="space-y-3">
        {[
          { data: "15/04/2026", titulo: "Retorno — Dermatologia", medico: "Dr. Carlos Silva", badge: "bg-green-100 text-green-700", label: "Realizado" },
          { data: "02/03/2026", titulo: "Procedimento estético", medico: "Dra. Ana Faria", badge: "bg-green-100 text-green-700", label: "Realizado" },
          { data: "10/01/2026", titulo: "Consulta inicial", medico: "Dr. Carlos Silva", badge: "bg-blue-100 text-blue-700", label: "Arquivado" },
        ].map((e, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className="flex flex-col items-center gap-1 shrink-0 mt-1.5">
              <div className="w-2 h-2 rounded-full bg-[#1DAB87]" />
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
  <BrowserWindow url="app.usepem.com.br/receituario/novo">
    <div className="p-4 space-y-3">
      <div className="flex items-center justify-between mb-1">
        <div>
          <p className="text-sm font-semibold text-slate-800">Receituário Digital</p>
          <p className="text-xs text-slate-400">Nova prescrição</p>
        </div>
        <span className="text-[10px] bg-green-50 text-green-700 border border-green-100 px-2.5 py-1 rounded-full font-medium">ICP-Brasil A1 ativo</span>
      </div>
      <div className="space-y-2">
        {[
          { label: "Paciente", value: "Maria Fernanda Souza" },
          { label: "Medicamento", value: "Levotiroxina sódica 50mcg" },
          { label: "Posologia", value: "1 comprimido em jejum, por 90 dias" },
        ].map((f) => (
          <div key={f.label} className="rounded-lg border border-slate-200 px-3 py-2">
            <p className="text-[9px] text-slate-400 mb-0.5">{f.label}</p>
            <p className="text-xs font-medium text-slate-800">{f.value}</p>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-3 bg-green-50 border border-green-100 rounded-lg px-3 py-2.5 mt-1">
        <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center shrink-0">
          <span className="text-white text-xs font-bold">✓</span>
        </div>
        <div>
          <p className="text-xs font-semibold text-green-800">Assinatura digital ICP-Brasil A1</p>
          <p className="text-[9px] text-green-600">Dr. Carlos Silva · CRM-SP 98.765 · 18/04/2026 23:14</p>
        </div>
      </div>
      <button className="w-full bg-[#1DAB87] text-white text-xs font-semibold rounded-lg py-2.5" style={{ boxShadow: "0 4px 12px rgba(29,171,135,0.25)" }}>
        Enviar ao paciente
      </button>
    </div>
  </BrowserWindow>
)

const FinanceiroMockup = (
  <BrowserWindow url="app.usepem.com.br/financeiro">
    <div className="p-4 space-y-3">
      <div className="grid grid-cols-4 gap-2">
        {[
          { l: "Faturamento", v: "R$ 38.400", c: "text-green-600", bg: "bg-green-50 border-green-100" },
          { l: "Despesas", v: "R$ 12.600", c: "text-red-500", bg: "bg-red-50 border-red-100" },
          { l: "Inadimplência", v: "R$ 1.200", c: "text-amber-600", bg: "bg-amber-50 border-amber-100" },
          { l: "Margem", v: "67%", c: "text-[#1DAB87]", bg: "bg-[#E8F8F4] border-[#b3e8d8]" },
        ].map((k) => (
          <div key={k.l} className={`rounded-lg border px-2.5 py-2 ${k.bg}`}>
            <p className="text-[9px] text-slate-500 mb-0.5">{k.l}</p>
            <p className={`text-xs font-bold ${k.c}`}>{k.v}</p>
          </div>
        ))}
      </div>
      <div className="rounded-xl border border-slate-200 overflow-hidden">
        <div className="bg-slate-50 px-3 py-2 border-b border-slate-200 flex items-center justify-between">
          <span className="text-[10px] font-semibold text-slate-600 uppercase tracking-wide">Lançamentos — Abril</span>
          <span className="text-[9px] bg-[#E8F8F4] text-[#1DAB87] font-semibold px-2 py-0.5 rounded-full">+34% vs. mês ant.</span>
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
    tag: "CONVERSAS EM UM SÓ LUGAR",
    titulo: "Instagram, Facebook e WhatsApp na mesma tela. Com histórico completo do paciente ao lado.",
    descricao: "Toda mensagem que chega pelos três canais cai num inbox único, organizado por prioridade. A atendente vê o histórico clínico do paciente (ou dos leads do CRM) sem trocar de sistema. Sem conversa perdida, sem atraso.",
    cena: "Paciente manda mensagem pelo Instagram perguntando sobre um procedimento. A atendente abre a conversa no inbox, vê que ele já consultou há um ano, lê a última evolução em dois cliques e responde com a personalização que só médico de alto padrão entrega.",
    metricas: [
      { valor: "3 canais", label: "em 1 inbox" },
      { valor: "< 5s", label: "para puxar histórico completo" },
    ],
    mockup: <MockupInbox />,
    bg: "bg-white",
  },
  {
    tag: "PIPELINE DE LEADS",
    titulo: "Cada lead do Instagram vira consulta. Ou você sabe exatamente por que não virou.",
    descricao: "Pipeline visual com estágios, scoring automático baseado em respostas e engajamento, régua de follow-up disparada sem você lembrar. Visibilidade total do funil — da campanha paga à receita realizada.",
    cena: "Segunda-feira, 9h. Você abre o dashboard: 47 leads novos no fim de semana, 23 qualificados pelo scoring, 14 já agendaram sem a equipe tocar em nada. Dá pra mensurar o ROI do seu anúncio com um clique.",
    metricas: [
      { valor: "3×", label: "conversão de lead em consulta" },
      { valor: "100%", label: "rastreabilidade de origem" },
    ],
    mockup: <MockupCRMPipeline />,
    bg: "bg-[#EEF3F9]",
  },
  {
    tag: "AGENDA INTELIGENTE",
    titulo: "Confirmação automática. Sem secretária no WhatsApp.",
    descricao: "O paciente agenda pelo link. O PEM confirma por WhatsApp, envia lembrete 24h antes e outro 1h antes. Se cancelar, a vaga abre automaticamente para a lista de espera — com mensagem personalizada para o próximo paciente.",
    cena: "Terça-feira, 8h. Enquanto você toma café, sua agenda da semana já está confirmada. Sua secretária dedicou os 15 minutos que sobraram ao que realmente importa: acolher quem chegou.",
    metricas: [
      { valor: "−87%", label: "tempo de confirmação" },
      { valor: "94%", label: "taxa de comparecimento" },
    ],
    mockup: AgendaMockup,
    bg: "bg-white",
  },
  {
    tag: "PRONTUÁRIO ELETRÔNICO",
    titulo: "Histórico completo. Disponível em três segundos.",
    descricao: "Evoluções, anamnese, exames, diagnósticos e documentos numa linha do tempo limpa e pesquisável. Acessa do celular entre uma consulta e outra, do desktop no consultório, do tablet em visita domiciliar.",
    cena: "Paciente retorna após seis meses. Você abre o prontuário no celular, revisa a última conduta em dez segundos, entra na sala com o histórico fresco. O paciente percebe — e essa percepção é o que fideliza.",
    metricas: [
      { valor: "< 30s", label: "para acessar qualquer prontuário" },
      { valor: "100%", label: "digital, rastreável e exportável" },
    ],
    mockup: ProntuarioMockup,
    bg: "bg-[#EEF3F9]",
  },
  {
    tag: "RECEITUÁRIO ICP-BRASIL",
    titulo: "Assine receitas do celular. Com validade jurídica plena.",
    descricao: "Certificado ICP-Brasil A1, homologado pelo ITI. Prescreve, assina e envia para o paciente em menos de 60 segundos. Qualquer hora, qualquer lugar — sem fotografar papel, sem imagem sua circulando por WhatsApp.",
    cena: "Paciente manda mensagem às 22h pedindo renovação de receita controlada. Você abre o app, prescreve, assina, envia. Volta para o jantar em 60 segundos. Sem culpa, sem risco, sem caneta.",
    metricas: [
      { valor: "< 60s", label: "para emitir e enviar" },
      { valor: "Validade", label: "jurídica plena no Brasil" },
    ],
    mockup: ReceituarioMockup,
    bg: "bg-white",
  },
  {
    tag: "FINANCEIRO CLÍNICO",
    titulo: "Você sabe exatamente quanto ganhou. Hoje.",
    descricao: "Dashboard em tempo real com receitas, despesas, inadimplência e fluxo de caixa. Importa OFX do banco, reconcilia automaticamente e gera relatórios com um clique. Sem planilha de Excel, sem fechamento no sábado à noite.",
    cena: "Sexta-feira, 18h. Você abre o dashboard antes de sair. Vê o faturamento da semana, a margem por procedimento e os três convênios que pagaram fora do prazo. Sai da clínica com a leitura financeira que antes levava um dia inteiro do contador.",
    metricas: [
      { valor: "+34%", label: "margem identificada em 3 meses" },
      { valor: "0", label: "planilhas de Excel" },
    ],
    mockup: FinanceiroMockup,
    bg: "bg-[#EEF3F9]",
  },
]

export function Funcionalidades() {
  return (
    <section id="funcionalidades">
      {/* Header */}
      <div className="bg-white border-b border-slate-100 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[#1DAB87] text-xs font-mono uppercase tracking-[0.2em] mb-5">
              Seis módulos. Um sistema.
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3A] leading-tight max-w-3xl">
              Seis problemas resolvidos.{" "}
              <span className="text-slate-300">Um sistema só.</span>
            </h2>
            <p className="text-slate-500 text-lg mt-5 max-w-2xl leading-relaxed">
              Cada módulo foi desenhado para resolver uma dor específica da clínica de alto padrão — todos conversam entre si por padrão, porque um sistema só é útil quando a informação flui sem atrito.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Feature blocks */}
      {features.map((f, i) => (
        <div key={f.tag} className={f.bg}>
          <div className="max-w-6xl mx-auto px-6 py-24">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`grid md:grid-cols-2 gap-16 items-center ${i % 2 !== 0 ? "md:[&>*:first-child]:order-2" : ""}`}
            >
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.12em] px-3 py-1 rounded-full mb-5 inline-block" style={{ background: "#EEF3F9", color: "#1a3a5c" }}>
                  {f.tag}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-[#0B1F3A] mb-5 leading-tight">{f.titulo}</h3>
                <p className="text-slate-500 leading-relaxed mb-6 text-base">{f.descricao}</p>

                {/* Cena de uso */}
                <div className="mb-7 px-5 py-4 rounded-r-xl" style={{ background: "#EEF3F9", borderLeft: "3px solid #1a3a5c" }}>
                  <p className="text-slate-600 text-sm leading-relaxed italic">{f.cena}</p>
                </div>

                <div className="flex gap-3 flex-wrap">
                  {f.metricas.map((m) => (
                    <span key={m.label} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold" style={{ background: "#E8F8F4", color: "#0d6e56" }}>
                      {m.valor} · {m.label}
                    </span>
                  ))}
                </div>
              </div>
              <div>{f.mockup}</div>
            </motion.div>
          </div>
        </div>
      ))}
    </section>
  )
}

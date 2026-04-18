"use client"

import { MessageCircle } from "lucide-react"

const conversations = [
  {
    channel: "instagram",
    name: "Larissa Medeiros",
    preview: "Olá! Vi no Insta sobre consulta de avaliação...",
    time: "2min",
    unread: 2,
    avatar: "LM",
  },
  {
    channel: "whatsapp",
    name: "Fábio Carvalho",
    preview: "Boa tarde! Quero agendar para a semana que...",
    time: "8min",
    unread: 1,
    avatar: "FC",
  },
  {
    channel: "facebook",
    name: "Patrícia Rocha",
    preview: "Vocês aceitam plano Unimed?",
    time: "15min",
    unread: 0,
    avatar: "PR",
  },
  {
    channel: "whatsapp",
    name: "Carlos Mendonça",
    preview: "Confirmando minha consulta de amanhã às 14h",
    time: "32min",
    unread: 0,
    avatar: "CM",
  },
]

function ChannelBadge({ channel }: { channel: string }) {
  if (channel === "instagram") {
    return (
      <span className="text-[7px] font-bold" style={{ color: "#E1306C" }}>IG</span>
    )
  }
  if (channel === "facebook") {
    return (
      <span className="text-[7px] font-bold" style={{ color: "#1877F2" }}>FB</span>
    )
  }
  return <MessageCircle className="w-2.5 h-2.5 text-green-500" />
}

const channelBg: Record<string, string> = {
  instagram: "bg-pink-50",
  facebook: "bg-blue-50",
  whatsapp: "bg-green-50",
}

export function MockupInbox() {
  return (
    <div
      className="rounded-xl overflow-hidden border border-slate-200 min-w-[520px]"
      style={{ boxShadow: "0 20px 60px rgba(11,31,58,0.15)" }}
    >
      {/* Window chrome */}
      <div className="bg-slate-50 px-4 py-2.5 flex items-center gap-2 border-b border-slate-200">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
        </div>
        <div className="flex-1 mx-3">
          <div className="bg-white border border-slate-200 rounded-md py-0.5 px-3 max-w-[200px] mx-auto">
            <span className="text-slate-400 text-[10px] font-mono">app.usepem.com.br/inbox</span>
          </div>
        </div>
      </div>

      <div className="bg-white flex" style={{ height: 280 }}>
        {/* Left: conversation list */}
        <div className="w-44 border-r border-slate-100 flex flex-col">
          <div className="px-3 py-2 border-b border-slate-100">
            <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-wide">Inbox</p>
          </div>
          <div className="flex-1 overflow-hidden divide-y divide-slate-50">
            {conversations.map((c, i) => (
              <div
                key={i}
                className={`px-3 py-2 cursor-pointer flex items-start gap-2 ${i === 0 ? "bg-blue-50" : "hover:bg-slate-50"}`}
              >
                <div className="relative shrink-0 mt-0.5">
                  <div className="w-7 h-7 rounded-full bg-[#0B1F3A] flex items-center justify-center">
                    <span className="text-white text-[8px] font-bold">{c.avatar}</span>
                  </div>
                  <div className={`absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full flex items-center justify-center ${channelBg[c.channel]}`}>
                    <ChannelBadge channel={c.channel} />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1">
                    <p className={`text-[10px] font-medium truncate ${i === 0 ? "text-[#0B1F3A]" : "text-slate-700"}`}>{c.name}</p>
                    <span className="text-[8px] text-slate-400 shrink-0">{c.time}</span>
                  </div>
                  <p className="text-[9px] text-slate-400 truncate">{c.preview}</p>
                </div>
                {c.unread > 0 && (
                  <span className="w-4 h-4 rounded-full bg-[#1DAB87] text-white text-[8px] font-bold flex items-center justify-center shrink-0">
                    {c.unread}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Center: active conversation */}
        <div className="flex-1 flex flex-col border-r border-slate-100">
          <div className="px-3 py-2 border-b border-slate-100 flex items-center gap-2">
            <div className="relative">
              <div className="w-7 h-7 rounded-full bg-[#0B1F3A] flex items-center justify-center">
                <span className="text-white text-[8px] font-bold">LM</span>
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-pink-50 flex items-center justify-center">
                <span className="text-[7px] font-bold" style={{ color: "#E1306C" }}>IG</span>
              </div>
            </div>
            <div>
              <p className="text-[10px] font-semibold text-slate-800">Larissa Medeiros</p>
              <p className="text-[8px] font-medium" style={{ color: "#E1306C" }}>Instagram DM</p>
            </div>
          </div>
          <div className="flex-1 p-3 space-y-2 overflow-hidden">
            <div className="flex justify-end">
              <div className="bg-[#1DAB87] text-white text-[9px] rounded-xl rounded-br-sm px-2.5 py-1.5 max-w-[80%]">
                Olá! Como posso ajudar?
              </div>
            </div>
            <div className="flex justify-start">
              <div className="bg-slate-100 text-slate-700 text-[9px] rounded-xl rounded-bl-sm px-2.5 py-1.5 max-w-[80%]">
                Vi no Insta sobre consulta de avaliação. Têm vaga essa semana?
              </div>
            </div>
            <div className="flex justify-end">
              <div className="bg-[#1DAB87] text-white text-[9px] rounded-xl rounded-br-sm px-2.5 py-1.5 max-w-[80%]">
                Temos! Quinta às 15h ou sexta às 10h. Qual prefere?
              </div>
            </div>
          </div>
          <div className="p-2 border-t border-slate-100">
            <div className="bg-slate-50 rounded-lg px-3 py-1.5 text-[9px] text-slate-400">
              Responder...
            </div>
          </div>
        </div>

        {/* Right: patient panel */}
        <div className="w-36 p-3 space-y-3">
          <p className="text-[9px] font-semibold text-slate-500 uppercase tracking-wide">Lead / Paciente</p>
          <div className="space-y-1.5">
            <div className="bg-amber-50 rounded-md px-2 py-1">
              <p className="text-[8px] text-amber-600 font-semibold">LEAD NOVO</p>
              <p className="text-[9px] font-medium text-slate-800">Larissa Medeiros</p>
            </div>
            <div className="space-y-1">
              {[
                { l: "Origem", v: "Instagram" },
                { l: "Score", v: "🔥 Quente" },
                { l: "Interesse", v: "Avaliação" },
              ].map((r) => (
                <div key={r.l} className="flex justify-between">
                  <span className="text-[8px] text-slate-400">{r.l}</span>
                  <span className="text-[8px] font-medium text-slate-700">{r.v}</span>
                </div>
              ))}
            </div>
          </div>
          <button className="w-full bg-[#1DAB87] text-white text-[8px] font-semibold rounded-md py-1.5">
            Agendar consulta
          </button>
          <button className="w-full border border-slate-200 text-slate-600 text-[8px] rounded-md py-1.5">
            Mover pipeline
          </button>
        </div>
      </div>
    </div>
  )
}

"use client"

const stages = [
  { label: "Novo lead", color: "bg-slate-100 text-slate-600", count: 12 },
  { label: "Qualificado", color: "bg-amber-100 text-amber-700", count: 8 },
  { label: "Agendado", color: "bg-blue-100 text-blue-700", count: 5 },
  { label: "Convertido", color: "bg-green-100 text-green-700", count: 14 },
]

const scoreConfig: Record<string, { label: string; color: string }> = {
  hot: { label: "Quente", color: "bg-red-100 text-red-600" },
  warm: { label: "Morno", color: "bg-amber-100 text-amber-600" },
  cold: { label: "Frio", color: "bg-blue-100 text-blue-600" },
}

function OriginBadge({ origin }: { origin: string }) {
  const labels: Record<string, { label: string; color: string }> = {
    instagram: { label: "IG", color: "#E1306C" },
    facebook: { label: "FB", color: "#1877F2" },
    whatsapp: { label: "WA", color: "#25D366" },
  }
  const cfg = labels[origin] || labels.whatsapp
  return (
    <span className="text-[7px] font-bold shrink-0" style={{ color: cfg.color }}>{cfg.label}</span>
  )
}

export function MockupCRMPipeline() {
  return (
    <div
      className="rounded-xl overflow-hidden border border-slate-200"
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
            <span className="text-slate-400 text-[10px] font-mono">app.usepem.com.br/crm</span>
          </div>
        </div>
      </div>

      <div className="bg-white">
        {/* Metrics top */}
        <div className="grid grid-cols-4 gap-0 border-b border-slate-100">
          {[
            { l: "Novos leads", v: "47", sub: "esta semana" },
            { l: "Qualificados", v: "23", sub: "pelo scoring" },
            { l: "Agendados", v: "14", sub: "sem intervenção" },
            { l: "Conversão", v: "29%", sub: "vs 9% mercado" },
          ].map((m, i) => (
            <div key={i} className={`px-3 py-2.5 ${i < 3 ? "border-r border-slate-100" : ""}`}>
              <p className="text-[8px] text-slate-400 mb-0.5">{m.l}</p>
              <p className="text-sm font-bold text-[#0B1F3A]">{m.v}</p>
              <p className="text-[8px] text-[#1DAB87] font-medium">{m.sub}</p>
            </div>
          ))}
        </div>

        {/* Stage headers */}
        <div className="grid grid-cols-4 gap-0 border-b border-slate-100 px-2 pt-2 pb-1">
          {stages.map((s, i) => (
            <div key={i} className="px-1">
              <div className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[8px] font-semibold ${s.color}`}>
                {s.label}
                <span className="font-bold">{s.count}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Pipeline leads */}
        <div className="grid grid-cols-4 gap-0 px-2 pb-3">
          {/* Col 1: new leads */}
          <div className="px-1 space-y-1.5 pt-2">
            {[
              { name: "Larissa Medeiros", origin: "instagram", score: "hot", lastTouch: "2h atrás", nextFollow: "Hoje 18h" },
              { name: "Fábio Carvalho", origin: "whatsapp", score: "warm", lastTouch: "1d atrás", nextFollow: "Amanhã 10h" },
              { name: "Ana Beatriz T.", origin: "facebook", score: "cold", lastTouch: "3d atrás", nextFollow: "Sex 14h" },
            ].map((lead, i) => (
              <div key={i} className="bg-slate-50 rounded-lg px-2 py-2 border border-slate-100">
                <div className="flex items-center gap-1 mb-1">
                  <p className="text-[9px] font-medium text-slate-800 truncate flex-1">{lead.name}</p>
                  <OriginBadge origin={lead.origin} />
                </div>
                <div className="flex items-center justify-between">
                  <span className={`text-[7px] font-semibold px-1.5 py-0.5 rounded-full ${scoreConfig[lead.score].color}`}>
                    {scoreConfig[lead.score].label}
                  </span>
                  <span className="text-[7px] text-slate-400">{lead.lastTouch}</span>
                </div>
                <p className="text-[7px] text-slate-400 mt-1">Próx: {lead.nextFollow}</p>
              </div>
            ))}
          </div>

          {/* Col 2: qualified */}
          <div className="px-1 space-y-1.5 pt-2">
            {[
              { name: "Carla Vieira", origin: "instagram", score: "hot" },
              { name: "Pedro Nunes", origin: "whatsapp", score: "warm" },
            ].map((lead, i) => (
              <div key={i} className="bg-amber-50 rounded-lg px-2 py-2 border border-amber-100">
                <div className="flex items-center gap-1 mb-1">
                  <p className="text-[9px] font-medium text-slate-800 truncate flex-1">{lead.name}</p>
                  <OriginBadge origin={lead.origin} />
                </div>
                <span className={`text-[7px] font-semibold px-1.5 py-0.5 rounded-full ${scoreConfig[lead.score].color}`}>
                  {scoreConfig[lead.score].label}
                </span>
              </div>
            ))}
          </div>

          {/* Col 3: scheduled */}
          <div className="px-1 space-y-1.5 pt-2">
            <div className="bg-blue-50 rounded-lg px-2 py-2 border border-blue-100">
              <p className="text-[9px] font-medium text-slate-800">Juliana Costa</p>
              <p className="text-[7px] text-blue-600 font-medium mt-0.5">Qui 10h · Avaliação</p>
            </div>
          </div>

          {/* Col 4: converted */}
          <div className="px-1 space-y-1.5 pt-2">
            <div className="bg-green-50 rounded-lg px-2 py-2 border border-green-100">
              <div className="flex items-center gap-1 mb-0.5">
                <span className="text-[8px] text-green-600 font-bold">✓</span>
                <p className="text-[9px] font-medium text-slate-800">Maria Lima</p>
              </div>
              <p className="text-[7px] text-green-600 font-medium">3× retorno</p>
            </div>
            <div className="bg-green-50 rounded-lg px-2 py-2 border border-green-100">
              <div className="flex items-center gap-1 mb-0.5">
                <span className="text-[8px] text-green-600 font-bold">✓</span>
                <p className="text-[9px] font-medium text-slate-800">André Souza</p>
              </div>
              <p className="text-[7px] text-green-600 font-medium">Paciente novo</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

"use client"

import { TrendingUp, Users, Eye, Heart, BarChart, Calendar as CalendarIcon } from "lucide-react"

export function Analytics() {
  const metrics = [
    { label: "Alcance Total", value: "892K", change: "+23.1%", icon: Eye },
    { label: "Engajamento", value: "15.8%", change: "+5.2%", icon: Heart },
    { label: "Novos Seguidores", value: "+2.4K", change: "+18.3%", icon: Users },
    { label: "Taxa de Crescimento", value: "12.5%", change: "+3.1%", icon: TrendingUp },
  ]

  return (
    <div className="p-8 space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold text-white font-inter">Análise de Desempenho</h1>
        <p className="text-white/60 font-inter">Acompanhe métricas e insights detalhados</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => {
          const Icon = metric.icon
          return (
            <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <Icon className="w-8 h-8 text-[#00FF48]" />
                <span className="text-[#00FF48] text-sm font-medium font-inter">{metric.change}</span>
              </div>
              <p className="text-3xl font-bold text-white mb-2 font-inter">{metric.value}</p>
              <p className="text-sm text-white/60 font-inter">{metric.label}</p>
            </div>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-white mb-6 font-inter">Desempenho por Plataforma</h3>
          <div className="space-y-4">
            {["Instagram", "Facebook", "Twitter", "LinkedIn"].map((platform, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-white font-inter">{platform}</span>
                  <span className="text-white/60 font-inter">{85 - index * 10}%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-[#00FF48] to-[#00CC3A]"
                    style={{ width: `${85 - index * 10}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-white mb-6 font-inter">Melhores Horários</h3>
          <div className="space-y-4">
            {[
              { time: "18:00 - 20:00", engagement: "Alto", percentage: 92 },
              { time: "12:00 - 14:00", engagement: "Médio", percentage: 68 },
              { time: "08:00 - 10:00", engagement: "Médio", percentage: 54 },
              { time: "22:00 - 00:00", engagement: "Baixo", percentage: 32 },
            ].map((slot, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                <div>
                  <p className="text-white font-medium font-inter">{slot.time}</p>
                  <p className="text-sm text-white/60 font-inter">{slot.engagement}</p>
                </div>
                <div className="text-right">
                  <p className="text-[#00FF48] font-bold font-inter">{slot.percentage}%</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

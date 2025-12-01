"use client"

import { Calendar, Clock, Instagram, Facebook, Twitter, Linkedin } from "lucide-react"

export function Schedule() {
  const scheduledPosts = [
    { id: 1, title: "Lançamento de Produto", platform: "Instagram", date: "15 Jan", time: "18:00", status: "Agendado" },
    { id: 2, title: "Dicas de Marketing", platform: "LinkedIn", date: "16 Jan", time: "12:00", status: "Agendado" },
    { id: 3, title: "Behind the Scenes", platform: "Facebook", date: "17 Jan", time: "14:30", status: "Agendado" },
    { id: 4, title: "Tutorial Rápido", platform: "Twitter", date: "18 Jan", time: "19:00", status: "Agendado" },
  ]

  const platformIcons: Record<string, any> = {
    Instagram: Instagram,
    Facebook: Facebook,
    Twitter: Twitter,
    LinkedIn: Linkedin,
  }

  return (
    <div className="p-8 space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold text-white font-inter">Agendamento</h1>
        <p className="text-white/60 font-inter">Organize e agende suas publicações</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white font-inter">Posts Agendados</h2>
              <button className="px-4 py-2 bg-[#00FF48] text-[#0D0D0D] rounded-xl font-medium hover:shadow-lg hover:shadow-[#00FF48]/20 transition-all font-inter">
                Novo Agendamento
              </button>
            </div>

            <div className="space-y-4">
              {scheduledPosts.map((post) => {
                const PlatformIcon = platformIcons[post.platform]
                return (
                  <div key={post.id} className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all">
                    <div className="w-12 h-12 rounded-lg bg-[#00FF48]/10 flex items-center justify-center">
                      <PlatformIcon className="w-6 h-6 text-[#00FF48]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-medium font-inter">{post.title}</h3>
                      <p className="text-sm text-white/60 font-inter">{post.platform}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="text-white font-medium font-inter">{post.date}</p>
                        <p className="text-sm text-white/60 font-inter">{post.time}</p>
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 font-inter">
                        {post.status}
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white mb-4 font-inter">Calendário</h3>
            <div className="aspect-square bg-white/5 rounded-xl flex items-center justify-center">
              <Calendar className="w-16 h-16 text-white/40" />
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#00FF48]/10 to-[#00CC3A]/10 border border-[#00FF48]/20 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white mb-4 font-inter">Sugestões IA</h3>
            <div className="space-y-3">
              <div className="p-3 bg-white/5 rounded-lg">
                <p className="text-sm text-white font-inter">Melhor horário: 18:00</p>
              </div>
              <div className="p-3 bg-white/5 rounded-lg">
                <p className="text-sm text-white font-inter">Frequência ideal: 3x/dia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

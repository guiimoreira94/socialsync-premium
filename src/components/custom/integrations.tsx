"use client"

import { Instagram, Facebook, Twitter, Linkedin, Youtube, TiktokIcon as Tiktok, Check } from "lucide-react"

export function Integrations() {
  const platforms = [
    { name: "Instagram", icon: Instagram, connected: true, color: "from-purple-500 to-pink-500" },
    { name: "Facebook", icon: Facebook, connected: true, color: "from-blue-600 to-blue-400" },
    { name: "Twitter", icon: Twitter, connected: false, color: "from-sky-500 to-blue-600" },
    { name: "LinkedIn", icon: Linkedin, connected: true, color: "from-blue-700 to-blue-500" },
    { name: "YouTube", icon: Youtube, connected: false, color: "from-red-600 to-red-400" },
    { name: "TikTok", icon: Tiktok, connected: false, color: "from-black to-gray-800" },
  ]

  return (
    <div className="p-8 space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold text-white font-inter">Integrações</h1>
        <p className="text-white/60 font-inter">Conecte suas redes sociais</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {platforms.map((platform) => {
          const Icon = platform.icon
          return (
            <div key={platform.name} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${platform.color} flex items-center justify-center`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                {platform.connected && (
                  <div className="w-6 h-6 rounded-full bg-[#00FF48] flex items-center justify-center">
                    <Check className="w-4 h-4 text-[#0D0D0D]" />
                  </div>
                )}
              </div>
              <h3 className="text-xl font-bold text-white mb-2 font-inter">{platform.name}</h3>
              <p className="text-sm text-white/60 mb-4 font-inter">
                {platform.connected ? "Conectado" : "Não conectado"}
              </p>
              <button className={`w-full py-3 rounded-xl font-medium transition-all font-inter ${
                platform.connected
                  ? "bg-white/5 text-white hover:bg-white/10"
                  : "bg-[#00FF48] text-[#0D0D0D] hover:shadow-lg hover:shadow-[#00FF48]/20"
              }`}>
                {platform.connected ? "Gerenciar" : "Conectar"}
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

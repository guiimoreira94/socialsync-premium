"use client"

import { TrendingUp, Users, Eye, Heart, ArrowUpRight, Instagram, Facebook, Twitter, Linkedin } from "lucide-react"

export function Dashboard() {
  const stats = [
    { label: "Total de Posts", value: "1,234", change: "+12.5%", trend: "up", icon: TrendingUp },
    { label: "Seguidores", value: "45.2K", change: "+8.3%", trend: "up", icon: Users },
    { label: "Visualizações", value: "892K", change: "+23.1%", trend: "up", icon: Eye },
    { label: "Engajamento", value: "15.8%", change: "+5.2%", trend: "up", icon: Heart },
  ]

  const recentPosts = [
    { id: 1, title: "Lançamento de Produto", platform: "Instagram", engagement: "4.2K", status: "Publicado" },
    { id: 2, title: "Dicas de Marketing", platform: "LinkedIn", engagement: "2.8K", status: "Agendado" },
    { id: 3, title: "Behind the Scenes", platform: "Facebook", engagement: "3.5K", status: "Publicado" },
    { id: 4, title: "Tutorial Rápido", platform: "Twitter", engagement: "1.9K", status: "Rascunho" },
  ]

  const platformIcons: Record<string, any> = {
    Instagram: Instagram,
    Facebook: Facebook,
    Twitter: Twitter,
    LinkedIn: Linkedin,
  }

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-4xl font-bold text-white font-inter">Dashboard</h1>
        <p className="text-white/60 font-inter">Visão geral do seu desempenho em redes sociais</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#00FF48]/10 flex items-center justify-center group-hover:bg-[#00FF48]/20 transition-all">
                  <Icon className="w-6 h-6 text-[#00FF48]" />
                </div>
                <div className="flex items-center gap-1 text-[#00FF48] text-sm font-medium">
                  <ArrowUpRight className="w-4 h-4" />
                  <span>{stat.change}</span>
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-bold text-white font-inter">{stat.value}</p>
                <p className="text-sm text-white/60 font-inter">{stat.label}</p>
              </div>
            </div>
          )
        })}
      </div>

      {/* Recent Posts */}
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white font-inter">Posts Recentes</h2>
          <button className="text-[#00FF48] hover:text-[#00FF48]/80 text-sm font-medium transition-colors font-inter">
            Ver todos
          </button>
        </div>
        
        <div className="space-y-4">
          {recentPosts.map((post) => {
            const PlatformIcon = platformIcons[post.platform]
            return (
              <div 
                key={post.id}
                className="flex items-center justify-between p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className="w-10 h-10 rounded-lg bg-[#00FF48]/10 flex items-center justify-center">
                    <PlatformIcon className="w-5 h-5 text-[#00FF48]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-medium font-inter">{post.title}</h3>
                    <p className="text-sm text-white/60 font-inter">{post.platform}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <p className="text-white font-medium font-inter">{post.engagement}</p>
                    <p className="text-xs text-white/60 font-inter">Engajamento</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium font-inter ${
                    post.status === "Publicado" 
                      ? "bg-[#00FF48]/10 text-[#00FF48]" 
                      : post.status === "Agendado"
                      ? "bg-blue-500/10 text-blue-400"
                      : "bg-white/10 text-white/60"
                  }`}>
                    {post.status}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <button className="bg-gradient-to-br from-[#00FF48] to-[#00CC3A] rounded-2xl p-6 hover:shadow-2xl hover:shadow-[#00FF48]/20 transition-all duration-300 group">
          <div className="text-left space-y-2">
            <h3 className="text-xl font-bold text-[#0D0D0D] font-inter">Criar Post</h3>
            <p className="text-sm text-[#0D0D0D]/70 font-inter">Comece a criar conteúdo agora</p>
          </div>
        </button>
        
        <button className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group">
          <div className="text-left space-y-2">
            <h3 className="text-xl font-bold text-white font-inter">Agendar Posts</h3>
            <p className="text-sm text-white/60 font-inter">Organize seu calendário</p>
          </div>
        </button>
        
        <button className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group">
          <div className="text-left space-y-2">
            <h3 className="text-xl font-bold text-white font-inter">Ver Análises</h3>
            <p className="text-sm text-white/60 font-inter">Acompanhe seu desempenho</p>
          </div>
        </button>
      </div>
    </div>
  )
}

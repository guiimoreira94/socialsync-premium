"use client"

import { useState } from "react"
import { Image, Video, Type, Smile, AtSign, Hash, Send, Calendar } from "lucide-react"

export function CreatePost() {
  const [content, setContent] = useState("")
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>(["instagram"])

  const platforms = [
    { id: "instagram", name: "Instagram", color: "from-purple-500 to-pink-500" },
    { id: "facebook", name: "Facebook", color: "from-blue-600 to-blue-400" },
    { id: "twitter", name: "Twitter", color: "from-sky-500 to-blue-600" },
    { id: "linkedin", name: "LinkedIn", color: "from-blue-700 to-blue-500" },
  ]

  const togglePlatform = (platformId: string) => {
    setSelectedPlatforms(prev => 
      prev.includes(platformId) 
        ? prev.filter(p => p !== platformId)
        : [...prev, platformId]
    )
  }

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-4xl font-bold text-white font-inter">Criar Postagem</h1>
        <p className="text-white/60 font-inter">Crie conteúdo incrível para suas redes sociais</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Editor Principal */}
        <div className="lg:col-span-2 space-y-6">
          {/* Plataformas */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white mb-4 font-inter">Selecione as Plataformas</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {platforms.map((platform) => (
                <button
                  key={platform.id}
                  onClick={() => togglePlatform(platform.id)}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                    selectedPlatforms.includes(platform.id)
                      ? "border-[#00FF48] bg-[#00FF48]/10"
                      : "border-white/10 bg-white/5 hover:bg-white/10"
                  }`}
                >
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${platform.color} mx-auto mb-2`} />
                  <p className="text-sm text-white font-medium font-inter">{platform.name}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Editor de Texto */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white mb-4 font-inter">Conteúdo</h3>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="O que você quer compartilhar?"
              className="w-full h-48 bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder:text-white/40 resize-none focus:outline-none focus:border-[#00FF48] transition-all font-inter"
            />
            
            {/* Toolbar */}
            <div className="flex items-center gap-2 mt-4 pt-4 border-t border-white/10">
              <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all">
                <Image className="w-5 h-5 text-white/60" />
              </button>
              <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all">
                <Video className="w-5 h-5 text-white/60" />
              </button>
              <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all">
                <Type className="w-5 h-5 text-white/60" />
              </button>
              <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all">
                <Smile className="w-5 h-5 text-white/60" />
              </button>
              <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all">
                <AtSign className="w-5 h-5 text-white/60" />
              </button>
              <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all">
                <Hash className="w-5 h-5 text-white/60" />
              </button>
              
              <div className="flex-1" />
              
              <span className="text-sm text-white/60 font-inter">
                {content.length} / 2200
              </span>
            </div>
          </div>

          {/* Preview de Mídia */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white mb-4 font-inter">Mídia</h3>
            <div className="border-2 border-dashed border-white/20 rounded-xl p-12 text-center hover:border-[#00FF48]/50 transition-all cursor-pointer">
              <Image className="w-12 h-12 text-white/40 mx-auto mb-4" />
              <p className="text-white/60 font-inter">Arraste e solte ou clique para adicionar mídia</p>
              <p className="text-sm text-white/40 mt-2 font-inter">Suporta imagens e vídeos</p>
            </div>
          </div>
        </div>

        {/* Sidebar Direita */}
        <div className="space-y-6">
          {/* Sugestões IA */}
          <div className="bg-gradient-to-br from-[#00FF48]/10 to-[#00CC3A]/10 border border-[#00FF48]/20 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white mb-4 font-inter">Sugestões IA</h3>
            <div className="space-y-3">
              <button className="w-full text-left p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all">
                <p className="text-sm text-white font-inter">Melhorar texto com IA</p>
              </button>
              <button className="w-full text-left p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all">
                <p className="text-sm text-white font-inter">Gerar hashtags</p>
              </button>
              <button className="w-full text-left p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all">
                <p className="text-sm text-white font-inter">Sugerir emojis</p>
              </button>
            </div>
          </div>

          {/* Agendamento */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white mb-4 font-inter">Agendamento</h3>
            <div className="space-y-3">
              <button className="w-full flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all">
                <Calendar className="w-5 h-5 text-[#00FF48]" />
                <span className="text-sm text-white font-inter">Agendar publicação</span>
              </button>
              <div className="text-sm text-white/60 font-inter">
                Melhor horário: 18:00 - 20:00
              </div>
            </div>
          </div>

          {/* Ações */}
          <div className="space-y-3">
            <button className="w-full bg-gradient-to-br from-[#00FF48] to-[#00CC3A] rounded-xl p-4 hover:shadow-2xl hover:shadow-[#00FF48]/20 transition-all duration-300 flex items-center justify-center gap-2">
              <Send className="w-5 h-5 text-[#0D0D0D]" />
              <span className="font-bold text-[#0D0D0D] font-inter">Publicar Agora</span>
            </button>
            
            <button className="w-full bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all">
              <span className="font-medium text-white font-inter">Salvar Rascunho</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

"use client"

import { Wand2, Sparkles, Sliders, Crop, Palette, Type, Layers, Download } from "lucide-react"

export function EditorIA() {
  const tools = [
    { icon: Crop, label: "Recortar", active: false },
    { icon: Palette, label: "Filtros", active: true },
    { icon: Type, label: "Texto", active: false },
    { icon: Layers, label: "Camadas", active: false },
    { icon: Sliders, label: "Ajustes", active: false },
  ]

  const aiFeatures = [
    { label: "Remover Fundo", description: "IA remove automaticamente" },
    { label: "Melhorar Qualidade", description: "Upscale com IA" },
    { label: "Correção Automática", description: "Ajuste inteligente" },
    { label: "Gerar Variações", description: "Crie versões alternativas" },
  ]

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-4xl font-bold text-white font-inter">Editor IA</h1>
        <p className="text-white/60 font-inter">Edite fotos e vídeos com inteligência artificial</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Ferramentas Laterais */}
        <div className="space-y-6">
          {/* Ferramentas Básicas */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white mb-4 font-inter">Ferramentas</h3>
            <div className="space-y-2">
              {tools.map((tool, index) => {
                const Icon = tool.icon
                return (
                  <button
                    key={index}
                    className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all ${
                      tool.active
                        ? "bg-[#00FF48]/10 border border-[#00FF48]"
                        : "bg-white/5 hover:bg-white/10"
                    }`}
                  >
                    <Icon className={`w-5 h-5 ${tool.active ? "text-[#00FF48]" : "text-white/60"}`} />
                    <span className={`text-sm font-medium font-inter ${tool.active ? "text-white" : "text-white/60"}`}>
                      {tool.label}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Recursos IA */}
          <div className="bg-gradient-to-br from-[#00FF48]/10 to-[#00CC3A]/10 border border-[#00FF48]/20 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-[#00FF48]" />
              <h3 className="text-lg font-bold text-white font-inter">IA Premium</h3>
            </div>
            <div className="space-y-3">
              {aiFeatures.map((feature, index) => (
                <button
                  key={index}
                  className="w-full text-left p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all"
                >
                  <p className="text-sm font-medium text-white font-inter">{feature.label}</p>
                  <p className="text-xs text-white/60 mt-1 font-inter">{feature.description}</p>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Canvas Principal */}
        <div className="lg:col-span-2">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-full">
            <div className="aspect-video bg-gradient-to-br from-white/10 to-white/5 rounded-xl flex items-center justify-center border-2 border-dashed border-white/20">
              <div className="text-center">
                <Wand2 className="w-16 h-16 text-white/40 mx-auto mb-4" />
                <p className="text-white/60 font-inter mb-2">Nenhuma mídia selecionada</p>
                <button className="px-6 py-3 bg-[#00FF48] text-[#0D0D0D] rounded-xl font-medium hover:shadow-lg hover:shadow-[#00FF48]/20 transition-all font-inter">
                  Selecionar Arquivo
                </button>
              </div>
            </div>

            {/* Controles de Zoom */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <button className="px-4 py-2 bg-white/5 rounded-lg hover:bg-white/10 transition-all text-white font-inter">
                -
              </button>
              <span className="text-white/60 text-sm font-inter">100%</span>
              <button className="px-4 py-2 bg-white/5 rounded-lg hover:bg-white/10 transition-all text-white font-inter">
                +
              </button>
            </div>
          </div>
        </div>

        {/* Painel de Propriedades */}
        <div className="space-y-6">
          {/* Ajustes */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white mb-4 font-inter">Ajustes</h3>
            <div className="space-y-4">
              <div>
                <label className="text-sm text-white/60 mb-2 block font-inter">Brilho</label>
                <input 
                  type="range" 
                  className="w-full accent-[#00FF48]"
                  defaultValue="50"
                />
              </div>
              <div>
                <label className="text-sm text-white/60 mb-2 block font-inter">Contraste</label>
                <input 
                  type="range" 
                  className="w-full accent-[#00FF48]"
                  defaultValue="50"
                />
              </div>
              <div>
                <label className="text-sm text-white/60 mb-2 block font-inter">Saturação</label>
                <input 
                  type="range" 
                  className="w-full accent-[#00FF48]"
                  defaultValue="50"
                />
              </div>
              <div>
                <label className="text-sm text-white/60 mb-2 block font-inter">Nitidez</label>
                <input 
                  type="range" 
                  className="w-full accent-[#00FF48]"
                  defaultValue="50"
                />
              </div>
            </div>
          </div>

          {/* Ações */}
          <div className="space-y-3">
            <button className="w-full bg-gradient-to-br from-[#00FF48] to-[#00CC3A] rounded-xl p-4 hover:shadow-2xl hover:shadow-[#00FF48]/20 transition-all duration-300 flex items-center justify-center gap-2">
              <Download className="w-5 h-5 text-[#0D0D0D]" />
              <span className="font-bold text-[#0D0D0D] font-inter">Exportar</span>
            </button>
            
            <button className="w-full bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all">
              <span className="font-medium text-white font-inter">Resetar</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

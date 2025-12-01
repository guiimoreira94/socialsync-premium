"use client"

import { FolderOpen, Image, Video, FileText, Search } from "lucide-react"

export function Library() {
  return (
    <div className="p-8 space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold text-white font-inter">Biblioteca de Conteúdo</h1>
        <p className="text-white/60 font-inter">Organize e gerencie seus arquivos</p>
      </div>

      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
            <input 
              type="text"
              placeholder="Buscar arquivos..."
              className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-[#00FF48] transition-all font-inter"
            />
          </div>
          <button className="px-6 py-3 bg-[#00FF48] text-[#0D0D0D] rounded-xl font-medium hover:shadow-lg hover:shadow-[#00FF48]/20 transition-all font-inter">
            Upload
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div key={item} className="aspect-square bg-white/5 rounded-xl hover:bg-white/10 transition-all cursor-pointer flex items-center justify-center">
              <Image className="w-12 h-12 text-white/40" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

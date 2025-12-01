"use client"

import { 
  LayoutDashboard, 
  PenSquare, 
  Wand2, 
  BarChart3, 
  Calendar, 
  FolderOpen, 
  Share2, 
  FileText, 
  Users, 
  Hash, 
  Image, 
  HelpCircle, 
  MessageSquare, 
  Settings as SettingsIcon,
  Sparkles
} from "lucide-react"
import { cn } from "@/lib/utils"

interface SidebarProps {
  currentView: string
  setCurrentView: (view: string) => void
}

const menuItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "create", label: "Criar Post", icon: PenSquare },
  { id: "editor", label: "Editor IA", icon: Wand2 },
  { id: "analytics", label: "Análises", icon: BarChart3 },
  { id: "schedule", label: "Agendamento", icon: Calendar },
  { id: "library", label: "Biblioteca", icon: FolderOpen },
  { id: "integrations", label: "Integrações", icon: Share2 },
  { id: "templates", label: "Templates", icon: FileText },
  { id: "collaboration", label: "Equipe", icon: Users },
  { id: "hashtags", label: "Hashtags", icon: Hash },
  { id: "media", label: "Banco de Mídia", icon: Image },
  { id: "support", label: "Suporte", icon: HelpCircle },
  { id: "community", label: "Comunidade", icon: MessageSquare },
  { id: "settings", label: "Configurações", icon: SettingsIcon },
]

export function Sidebar({ currentView, setCurrentView }: SidebarProps) {
  return (
    <aside className="w-64 bg-[#0D0D0D] border-r border-white/5 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00FF48] to-[#00CC3A] flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-[#0D0D0D]" />
          </div>
          <div>
            <h1 className="text-xl font-bold font-inter text-white">SocialSync</h1>
            <p className="text-xs text-white/40 font-inter">IA Premium</p>
          </div>
        </div>
      </div>

      {/* Menu */}
      <nav className="flex-1 overflow-y-auto py-4 px-3">
        <div className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = currentView === item.id
            
            return (
              <button
                key={item.id}
                onClick={() => setCurrentView(item.id)}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group",
                  isActive 
                    ? "bg-[#00FF48]/10 text-[#00FF48] shadow-lg shadow-[#00FF48]/20" 
                    : "text-white/60 hover:text-white hover:bg-white/5"
                )}
              >
                <Icon className={cn(
                  "w-5 h-5 transition-all duration-300",
                  isActive ? "text-[#00FF48]" : "text-white/60 group-hover:text-white"
                )} />
                <span className="text-sm font-medium font-inter">{item.label}</span>
              </button>
            )
          })}
        </div>
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-white/5">
        <div className="flex items-center gap-3 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 transition-all cursor-pointer">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00FF48] to-[#00CC3A] flex items-center justify-center">
            <span className="text-sm font-bold text-[#0D0D0D]">U</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-white truncate font-inter">Usuário</p>
            <p className="text-xs text-white/40 truncate font-inter">Premium</p>
          </div>
        </div>
      </div>
    </aside>
  )
}

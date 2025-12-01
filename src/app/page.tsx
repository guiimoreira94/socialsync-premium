"use client"

import { useState } from "react"
import { Sidebar } from "@/components/custom/sidebar"
import { Dashboard } from "@/components/custom/dashboard"
import { CreatePost } from "@/components/custom/create-post"
import { Analytics } from "@/components/custom/analytics"
import { Schedule } from "@/components/custom/schedule"
import { Library } from "@/components/custom/library"
import { Integrations } from "@/components/custom/integrations"
import { Settings } from "@/components/custom/settings"
import { Templates } from "@/components/custom/templates"
import { Collaboration } from "@/components/custom/collaboration"
import { Hashtags } from "@/components/custom/hashtags"
import { MediaBank } from "@/components/custom/media-bank"
import { Support } from "@/components/custom/support"
import { Community } from "@/components/custom/community"
import { EditorIA } from "@/components/custom/editor-ia"

export default function Home() {
  const [currentView, setCurrentView] = useState("dashboard")

  const renderView = () => {
    switch (currentView) {
      case "dashboard":
        return <Dashboard />
      case "create":
        return <CreatePost />
      case "editor":
        return <EditorIA />
      case "analytics":
        return <Analytics />
      case "schedule":
        return <Schedule />
      case "library":
        return <Library />
      case "integrations":
        return <Integrations />
      case "templates":
        return <Templates />
      case "collaboration":
        return <Collaboration />
      case "hashtags":
        return <Hashtags />
      case "media":
        return <MediaBank />
      case "support":
        return <Support />
      case "community":
        return <Community />
      case "settings":
        return <Settings />
      default:
        return <Dashboard />
    }
  }

  return (
    <div className="flex h-screen bg-[#0D0D0D] overflow-hidden">
      <Sidebar currentView={currentView} setCurrentView={setCurrentView} />
      <main className="flex-1 overflow-y-auto">
        {renderView()}
      </main>
    </div>
  )
}

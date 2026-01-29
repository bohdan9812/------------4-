'use client';

import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  BarChart3,
  Users,
  FolderKanban,
  Settings,
  Bell,
  Search,
  Zap,
  Database,
  Code2,
  Globe,
  Shield,
} from "lucide-react"
import { useState } from "react"

const navSections = [
  {
    title: "Overview",
    items: [
      { icon: LayoutDashboard, label: "Dashboard", active: true },
      { icon: BarChart3, label: "Analytics" },
      { icon: Users, label: "Users" },
      { icon: FolderKanban, label: "Projects" },
    ],
  },
  {
    title: "Compute",
    items: [
      { icon: Zap, label: "Functions", badge: "New" },
      { icon: Code2, label: "Edge Functions" },
      { icon: Database, label: "Database" },
    ],
  },
  {
    title: "Network",
    items: [
      { icon: Globe, label: "Domains" },
      { icon: Shield, label: "Security" },
    ],
  },
]

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <aside
      className={cn(
        "h-screen bg-card border-r border-border flex flex-col transition-all duration-300",
        collapsed ? "w-16" : "w-64"
      )}
    >
      <div className="p-4 border-b border-border flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
          <Zap className="w-4 h-4 text-primary-foreground" />
        </div>
        {!collapsed && (
          <span className="font-semibold text-foreground">Acme Inc</span>
        )}
      </div>

      <div className="flex-1 overflow-y-auto py-4">
        {navSections.map((section) => (
          <div key={section.title} className="mb-6">
            {!collapsed && (
              <h3 className="px-4 mb-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                {section.title}
              </h3>
            )}
            <nav className="space-y-1 px-2">
              {section.items.map((item) => (
                <button
                  key={item.label}
                  className={cn(
                    "w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors",
                    item.active
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  )}
                >
                  <item.icon className="w-4 h-4 flex-shrink-0" />
                  {!collapsed && (
                    <>
                      <span className="flex-1 text-left">{item.label}</span>
                      {item.badge && (
                        <span className="px-1.5 py-0.5 text-[10px] font-medium bg-primary text-primary-foreground rounded">
                          {item.badge}
                        </span>
                      )}
                    </>
                  )}
                </button>
              ))}
            </nav>
          </div>
        ))}
      </div>

      <div className="p-4 border-t border-border space-y-2">
        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
          <Search className="w-4 h-4" />
          {!collapsed && <span>Search</span>}
        </button>
        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
          <Bell className="w-4 h-4" />
          {!collapsed && <span>Notifications</span>}
        </button>
        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
          <Settings className="w-4 h-4" />
          {!collapsed && <span>Settings</span>}
        </button>
      </div>

      <button
        onClick={() => setCollapsed(!collapsed)}
        className="p-4 border-t border-border text-xs text-muted-foreground hover:text-foreground transition-colors"
      >
        {collapsed ? "→" : "← Collapse"}
      </button>
    </aside>
  )
}

import { Plus, GitBranch, Terminal, FileCode } from "lucide-react"

const actions = [
  {
    icon: Plus,
    label: "New Project",
    description: "Create a new project",
  },
  {
    icon: GitBranch,
    label: "Import Repo",
    description: "From GitHub or GitLab",
  },
  {
    icon: Terminal,
    label: "Deploy",
    description: "Deploy to production",
  },
  {
    icon: FileCode,
    label: "View Logs",
    description: "Check runtime logs",
  },
]

export function QuickActions() {
  return (
    <div className="bg-card border border-border rounded-xl p-5">
      <h3 className="font-semibold text-foreground mb-4">Quick Actions</h3>

      <div className="grid grid-cols-2 gap-3">
        {actions.map((action) => (
          <button
            key={action.label}
            className="flex flex-col items-center gap-2 p-4 rounded-lg bg-secondary hover:bg-secondary/80 border border-transparent hover:border-primary/30 transition-all group"
          >
            <div className="p-2 rounded-lg bg-card group-hover:bg-primary/10 transition-colors">
              <action.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            <div className="text-center">
              <p className="text-sm font-medium text-foreground">{action.label}</p>
              <p className="text-[11px] text-muted-foreground">{action.description}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

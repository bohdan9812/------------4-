import { ArrowUpRight, ArrowDownRight, Activity, Users, DollarSign, Zap } from "lucide-react"
import { cn } from "@/lib/utils"

const stats = [
  {
    title: "Total Requests",
    value: "2.4M",
    change: "+12.5%",
    trend: "up",
    icon: Activity,
    description: "Last 24 hours",
  },
  {
    title: "Active Users",
    value: "18,429",
    change: "+8.2%",
    trend: "up",
    icon: Users,
    description: "Currently online",
  },
  {
    title: "Revenue",
    value: "$48,290",
    change: "-2.4%",
    trend: "down",
    icon: DollarSign,
    description: "This month",
  },
  {
    title: "Functions Invoked",
    value: "892K",
    change: "+24.1%",
    trend: "up",
    icon: Zap,
    description: "Last 7 days",
  },
]

export function StatsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-colors"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="p-2 rounded-lg bg-primary/10">
              <stat.icon className="w-5 h-5 text-primary" />
            </div>
            <div
              className={cn(
                "flex items-center gap-1 text-sm font-medium",
                stat.trend === "up" ? "text-chart-1" : "text-destructive"
              )}
            >
              {stat.trend === "up" ? (
                <ArrowUpRight className="w-4 h-4" />
              ) : (
                <ArrowDownRight className="w-4 h-4" />
              )}
              {stat.change}
            </div>
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-1">{stat.value}</h3>
          <p className="text-sm text-muted-foreground">{stat.title}</p>
          <p className="text-xs text-muted-foreground mt-1">{stat.description}</p>
        </div>
      ))}
    </div>
  )
}

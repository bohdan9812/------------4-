import { cn } from "@/lib/utils"

const activities = [
  {
    id: 1,
    user: "Sarah Chen",
    action: "deployed",
    target: "main",
    time: "2 min ago",
    status: "success",
  },
  {
    id: 2,
    user: "Alex Kim",
    action: "pushed to",
    target: "feature/auth",
    time: "15 min ago",
    status: "pending",
  },
  {
    id: 3,
    user: "Mike Johnson",
    action: "rolled back",
    target: "v2.4.1",
    time: "1 hour ago",
    status: "warning",
  },
  {
    id: 4,
    user: "Emma Wilson",
    action: "merged PR",
    target: "#142",
    time: "3 hours ago",
    status: "success",
  },
  {
    id: 5,
    user: "David Lee",
    action: "created",
    target: "staging env",
    time: "5 hours ago",
    status: "success",
  },
]

const statusColors = {
  success: "bg-chart-1",
  pending: "bg-chart-3",
  warning: "bg-chart-5",
  error: "bg-destructive",
}

export function ActivityFeed() {
  return (
    <div className="bg-card border border-border rounded-xl p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-foreground">Recent Activity</h3>
        <button className="text-sm text-primary hover:underline">View all</button>
      </div>

      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div
            key={activity.id}
            className={cn(
              "flex items-start gap-3 pb-4",
              index !== activities.length - 1 && "border-b border-border"
            )}
          >
            <div className="relative">
              <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                <span className="text-xs font-medium text-foreground">
                  {activity.user
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
              <div
                className={cn(
                  "absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-card",
                  statusColors[activity.status as keyof typeof statusColors]
                )}
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-foreground">
                <span className="font-medium">{activity.user}</span>{" "}
                <span className="text-muted-foreground">{activity.action}</span>{" "}
                <span className="font-medium text-primary">{activity.target}</span>
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

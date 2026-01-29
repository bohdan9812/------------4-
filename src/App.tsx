import { Sidebar } from "./components/Sidebar"
import { Header } from "./components/Header"
import { StatsGrid } from "./components/StatsGrid"
import { ChartSection } from "./components/ChartSection"
import { ActivityFeed } from "./components/ActivityFeed"
import { QuickActions } from "./components/QuickActions"

export default function App() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6 overflow-auto">
          <div className="max-w-7xl mx-auto space-y-6">
            <StatsGrid />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <ChartSection />
              <div className="space-y-6">
                <ActivityFeed />
                <QuickActions />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

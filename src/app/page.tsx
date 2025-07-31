import { TopNavigation } from "../components/TopNavigation";
import { DashboardCards } from "../components/DashboardCards";
import { AssistantDrawer } from "../components/AssistantDrawer";
import { Footer } from "../components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Top Navigation */}
      <TopNavigation />
      
      {/* Main Dashboard Content */}
      <main className="flex-1">
        {/* Dashboard Cards */}
        <DashboardCards />
      </main>

      {/* Footer */}
      <Footer />

      {/* Assistant Drawer */}
      <AssistantDrawer />
    </div>
  );
}
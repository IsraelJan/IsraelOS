import {
  FolderKanban,
  CheckSquare,
  Building2,
  GraduationCap,
} from "lucide-react";

import { PageContainer } from "@/components/layout/page-container";
import { DashboardGrid } from "./dashboard-grid";
import { WelcomeCard } from "./welcome-card";
import { StatCard } from "./stat-card";
import { QuickActions } from "./quick-actions";
import { AISummary } from "./ai-summary";
import { RecentActivity } from "./recent-activity";

const stats = [
  {
    title: "Projects",
    value: "4",
    description: "Active Projects",
    icon: FolderKanban,
  },
  {
    title: "Tasks",
    value: "12",
    description: "Due Today",
    icon: CheckSquare,
  },
  {
    title: "Businesses",
    value: "3",
    description: "Running Businesses",
    icon: Building2,
  },
  {
    title: "Learning",
    value: "78%",
    description: "Course Progress",
    icon: GraduationCap,
  },
];

export function Dashboard() {
  return (
    <PageContainer
      title="Dashboard"
      description="Welcome back to your personal operating system."
    >
      <DashboardGrid>
        <WelcomeCard userName="Israel" />

        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <StatCard
              key={stat.title}
              title={stat.title}
              value={stat.value}
              description={stat.description}
              icon={stat.icon}
            />
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <QuickActions />
          <AISummary userName="Israel" />
        </section>

        <RecentActivity />
      </DashboardGrid>
    </PageContainer>
  );
}
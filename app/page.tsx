import {
  FolderKanban,
  CheckSquare,
  Building2,
  GraduationCap,
} from "lucide-react";

import { WelcomeCard } from "@/components/dashboard/welcome-card";
import { StatCard } from "@/components/dashboard/stat-card";
import { DashboardGrid } from "@/components/dashboard/dashboard-grid";
import { QuickActions } from "@/components/dashboard/quick-actions";
import { RecentActivity } from "@/components/dashboard/recent-activity";
import { AISummary } from "@/components/dashboard/ai-summary";

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

export default function Home() {
  return (
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
  );
}
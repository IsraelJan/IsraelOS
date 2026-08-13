import { activeProjects } from "@/lib/data/workspace";

import { SectionCard } from "@/components/ui/section-card";
import { WidgetHeader } from "@/components/ui/widget-header";
import { ProgressBar } from "@/components/ui/progress-bar";
import { StatusBadge } from "@/components/ui/status-badge";

export function ActiveProjects() {
  return (
    <SectionCard>
      <WidgetHeader
        title="Active Projects"
        subtitle="Projects you're actively working on."
        action={
          <button className="text-sm font-medium text-blue-600 transition hover:text-blue-700">
            View All →
          </button>
        }
      />

      <div className="space-y-5">
        {activeProjects.map((project) => (
          <div
            key={project.id}
            className="rounded-xl border border-slate-200 p-4 transition-all hover:border-blue-200 hover:shadow-md"
          >
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-2xl">
                  {project.icon}
                </span>

                <div>
                  <h3 className="font-semibold text-slate-900">
                    {project.title}
                  </h3>

                  <p className="text-sm text-slate-500">
                    {project.stage}
                  </p>
                </div>
              </div>

              <StatusBadge
                variant={
                  project.status === "In Progress"
                    ? "info"
                    : project.status === "Review"
                    ? "warning"
                    : "success"
                }
              >
                {project.status}
              </StatusBadge>
            </div>

            <ProgressBar value={project.progress} />
          </div>
        ))}
      </div>
    </SectionCard>
  );
}
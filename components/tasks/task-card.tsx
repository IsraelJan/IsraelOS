import { Task } from "@/lib/data/tasks";

import { SectionCard } from "@/components/ui/section-card";
import { StatusBadge } from "@/components/ui/status-badge";

interface TaskCardProps {
  task: Task;
}

export function TaskCard({
  task,
}: TaskCardProps) {
  const priorityVariant =
    task.priority === "High"
      ? "danger"
      : task.priority === "Medium"
      ? "warning"
      : "success";

  return (
    <SectionCard>
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold">
            {task.title}
          </h3>

          <p className="mt-2 text-slate-600">
            {task.description}
          </p>

          <div className="mt-4 flex items-center gap-4 text-sm text-slate-500">
            <span>📁 {task.project}</span>

            <span>📅 {task.dueDate}</span>
          </div>
        </div>

        <StatusBadge variant={priorityVariant}>
          {task.priority}
        </StatusBadge>
      </div>
    </SectionCard>
  );
}
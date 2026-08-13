import { tasks } from "@/lib/data/tasks";
import { SectionCard } from "@/components/ui/section-card";

export function TaskStats() {
  const total = tasks.length;

  const inProgress = tasks.filter(
    (task) => task.status === "In Progress"
  ).length;

  const completed = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const dueToday = tasks.filter(
    (task) => task.dueDate === "Today"
  ).length;

  return (
    <div className="grid gap-4 md:grid-cols-4">
      <SectionCard>
        <h3 className="text-sm text-slate-500">Total Tasks</h3>
        <p className="mt-2 text-3xl font-bold">{total}</p>
      </SectionCard>

      <SectionCard>
        <h3 className="text-sm text-slate-500">In Progress</h3>
        <p className="mt-2 text-3xl font-bold">{inProgress}</p>
      </SectionCard>

      <SectionCard>
        <h3 className="text-sm text-slate-500">Completed</h3>
        <p className="mt-2 text-3xl font-bold">{completed}</p>
      </SectionCard>

      <SectionCard>
        <h3 className="text-sm text-slate-500">Due Today</h3>
        <p className="mt-2 text-3xl font-bold">{dueToday}</p>
      </SectionCard>
    </div>
  );
}
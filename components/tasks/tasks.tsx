import { TasksHeader } from "./tasks-header";
import { TaskStats } from "./task-stats";
import { TaskList } from "./task-list";

export function Tasks() {
  return (
    <div className="space-y-8">
      <TasksHeader />

      <TaskStats />

      <TaskList />
    </div>
  );
}
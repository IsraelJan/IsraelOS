import { tasks } from "@/lib/data/tasks";
import { TaskCard } from "./task-card";

export function TaskList() {
  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
        />
      ))}
    </div>
  );
}
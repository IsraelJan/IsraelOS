import { PageHeader } from "@/components/ui/page-header";
import { AddTaskButton } from "./add-task-button";

export function TasksHeader() {
  return (
    <PageHeader
      title="Tasks"
      description="Manage your daily work, priorities, and deadlines."
      actions={<AddTaskButton />}
    />
  );
}
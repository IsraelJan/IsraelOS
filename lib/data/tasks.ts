export interface Task {
  id: number;
  title: string;
  description: string;
  priority: "High" | "Medium" | "Low";
  status: "Todo" | "In Progress" | "Completed";
  dueDate: string;
  project: string;
}

export const tasks: Task[] = [
  {
    id: 1,
    title: "Finish Sprint 3",
    description: "Complete the Workspace module.",
    priority: "High",
    status: "In Progress",
    dueDate: "Today",
    project: "IsraelOS",
  },
  {
    id: 2,
    title: "Continue ZariQ MVP",
    description: "Design the property management workflow.",
    priority: "Medium",
    status: "Todo",
    dueDate: "Tomorrow",
    project: "ZariQ",
  },
  {
    id: 3,
    title: "IBM DevOps Course",
    description: "Complete Module 4.",
    priority: "Low",
    status: "Todo",
    dueDate: "Friday",
    project: "Learning",
  },
];
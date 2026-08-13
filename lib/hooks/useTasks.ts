"use client";

import { useState } from "react";
import { tasks as initialTasks, Task } from "@/lib/data/tasks";

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  return {
    tasks,
    setTasks,
  };
}
"use client";

import {
  createContext,
  useContext,
} from "react";

import { useTasks } from "@/lib/hooks/useTasks";

const TaskContext =
  createContext<ReturnType<typeof useTasks> | null>(null);

export function TaskProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const value = useTasks();

  return (
    <TaskContext.Provider value={value}>
      {children}
    </TaskContext.Provider>
  );
}

export function useTaskContext() {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error(
      "useTaskContext must be used within TaskProvider"
    );
  }

  return context;
}
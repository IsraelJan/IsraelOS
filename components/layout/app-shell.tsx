"use client";

import { useEffect, useState } from "react";
import { Sidebar } from "./sidebar";

interface AppShellProps {
  children: React.ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  const [collapsed, setCollapsed] = useState(false);

  // Load saved sidebar state
  useEffect(() => {
    const savedState = localStorage.getItem("sidebar-collapsed");

    if (savedState !== null) {
      setCollapsed(JSON.parse(savedState));
    }
  }, []);

  // Save sidebar state
  useEffect(() => {
    localStorage.setItem(
      "sidebar-collapsed",
      JSON.stringify(collapsed)
    );
  }, [collapsed]);

  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
      />

      <main
        className={`
          min-h-screen
          transition-all
          duration-300
          p-6
          ${
            collapsed
              ? "ml-24"
              : "ml-64"
          }
        `}
      >
        {children}
      </main>
    </div>
  );
}
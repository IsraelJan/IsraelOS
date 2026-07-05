import {
  FolderPlus,
  SquareCheckBig,
  Lightbulb,
  Bot,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { SectionHeader } from "./section-header";

export function QuickActions() {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <SectionHeader
  title="Quick Actions"
  description="Jump into your most common tasks."
/>

      <div className="mt-6 grid gap-3">
        <Button className="justify-start">
          <FolderPlus className="mr-2 h-4 w-4" />
          New Project
        </Button>

        <Button className="justify-start">
          <SquareCheckBig className="mr-2 h-4 w-4" />
          New Task
        </Button>

        <Button className="justify-start">
          <Lightbulb className="mr-2 h-4 w-4" />
          Capture Idea
        </Button>

        <Button className="justify-start">
          <Bot className="mr-2 h-4 w-4" />
          Ask AI
        </Button>
      </div>
    </div>
  );
}
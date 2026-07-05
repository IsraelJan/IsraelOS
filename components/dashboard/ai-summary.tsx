import { Bot } from "lucide-react";
import { SectionHeader } from "./section-header";

interface AISummaryProps {
  userName: string;
}

export function AISummary({
  userName,
}: AISummaryProps) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <div className="flex items-center gap-2">
  <Bot className="h-5 w-5 text-blue-600" />

  <SectionHeader
    title="AI Assistant"
    description="Your intelligent daily assistant."
  />
</div>

      <div className="mt-6 space-y-4 text-slate-700">
        <p>
          Good morning, <strong>{userName}</strong>.
        </p>

        <p>
          Today your highest priority is continuing
          Sprint 2 of IsraelOS.
        </p>

        <p>
          You have 12 pending tasks,
          4 active projects,
          and your learning progress
          is currently at 78%.
        </p>

        <p className="rounded-lg bg-blue-50 p-4 text-blue-700">
          💡 Recommendation:
          Finish the Dashboard MVP before
          starting authentication.
        </p>
      </div>
    </div>
  );
}
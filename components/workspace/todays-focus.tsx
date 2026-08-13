import { SectionCard } from "@/components/ui/section-card";

const focusItems = [
  {
    icon: "🚀",
    title: "Continue IsraelOS Sprint 3",
    priority: "High Priority",
    color: "bg-red-100 text-red-700",
  },
  {
    icon: "🏗",
    title: "Continue ZariQ MVP",
    priority: "Medium Priority",
    color: "bg-yellow-100 text-yellow-700",
  },
  {
    icon: "📚",
    title: "IBM DevOps Course",
    priority: "Learning",
    color: "bg-blue-100 text-blue-700",
  },
  {
    icon: "💼",
    title: "Client Deliverables",
    priority: "Business",
    color: "bg-green-100 text-green-700",
  },
];

export function TodaysFocus() {
  return (
    <SectionCard>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">
            Today's Focus
          </h2>

          <p className="text-sm text-slate-500">
            Your highest priorities for today.
          </p>
        </div>

        <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
          {focusItems.length} Tasks
        </span>
      </div>

      <div className="space-y-4">
        {focusItems.map((item) => (
          <div
            key={item.title}
            className="flex items-center justify-between rounded-xl border p-4 transition-all hover:border-blue-300 hover:shadow-md"
          >
            <div className="flex items-center gap-4">
              <span className="text-3xl">
                {item.icon}
              </span>

              <div>
                <h3 className="font-semibold text-slate-900">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-500">
                  Focus item
                </p>
              </div>
            </div>

            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold ${item.color}`}
            >
              {item.priority}
            </span>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}
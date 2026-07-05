import { SectionHeader } from "./section-header";

const activities = [
  {
    title: "Completed Sprint 1 Foundation",
    time: "Today",
  },
  {
    title: "Created Dashboard MVP",
    time: "Today",
  },
  {
    title: "Updated Product Vision",
    time: "Yesterday",
  },
  {
    title: "Pushed changes to GitHub",
    time: "Yesterday",
  },
];

export function RecentActivity() {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <SectionHeader
        title="Recent Activity"
        description="Latest updates across IsraelOS."
/>

      <div className="mt-6 space-y-4">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="flex items-center justify-between border-b pb-3 last:border-none"
          >
            <div>
              <p className="font-medium">
                {activity.title}
              </p>

              <p className="text-sm text-slate-500">
                {activity.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
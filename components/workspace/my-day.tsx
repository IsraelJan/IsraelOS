const schedule = [
  {
    time: "09:00",
    activity: "Team Stand-up",
  },
  {
    time: "10:30",
    activity: "IsraelOS Development",
  },
  {
    time: "14:00",
    activity: "Client Meeting",
  },
  {
    time: "16:00",
    activity: "IBM DevOps Course",
  },
  {
    time: "18:30",
    activity: "Gym",
  },
];

export function MyDay() {
  return (
    <section className="rounded-2xl border bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-xl font-semibold">
          My Day
        </h2>

        <p className="text-sm text-slate-500">
          Tuesday, July 16
        </p>
      </div>

      <div className="space-y-4">
        {schedule.map((item) => (
          <div
            key={item.time}
            className="flex items-center gap-4"
          >
            <div className="w-20 text-sm font-semibold text-blue-600">
              {item.time}
            </div>

            <div className="h-10 w-px bg-slate-300" />

            <div className="text-slate-700">
              {item.activity}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <div className="mb-2 flex justify-between text-sm">
          <span>Today's Progress</span>

          <span>3 / 5</span>
        </div>

        <div className="h-3 overflow-hidden rounded-full bg-slate-200">
          <div className="h-full w-3/5 rounded-full bg-blue-600" />
        </div>
      </div>
    </section>
  );
}
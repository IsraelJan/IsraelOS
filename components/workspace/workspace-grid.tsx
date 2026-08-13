export function WorkspaceGrid() {
  return (
    <section className="grid gap-6 lg:grid-cols-2">
      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold">
          Tasks
        </h2>

        <p className="mt-4 text-slate-500">
          Tasks widget coming in Sprint 3.
        </p>
      </div>

      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold">
          Calendar
        </h2>

        <p className="mt-4 text-slate-500">
          Calendar widget coming in Sprint 3.
        </p>
      </div>
    </section>
  );
}
import { WorkspaceHeader } from "./workspace-header";
import { WorkspaceGrid } from "./workspace-grid";
import { TodaysFocus } from "./todays-focus";
import { MyDay } from "./my-day";
import { ActiveProjects } from "./active-projects";

export function Workspace() {
  return (
    <div className="space-y-8">
      <WorkspaceHeader />

      <div className="grid gap-6 xl:grid-cols-2">
        <TodaysFocus />
        <MyDay />
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <ActiveProjects />

        <WorkspaceGrid />
      </div>
    </div>
  );
}
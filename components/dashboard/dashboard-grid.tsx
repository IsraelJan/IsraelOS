interface DashboardGridProps {
  children: React.ReactNode;
}

export function DashboardGrid({
  children,
}: DashboardGridProps) {
  return (
    <div className="grid gap-6">
      {children}
    </div>
  );
}
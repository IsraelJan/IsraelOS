interface WidgetHeaderProps {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
}

export function WidgetHeader({
  title,
  subtitle,
  action,
}: WidgetHeaderProps) {
  return (
    <div className="mb-6 flex items-center justify-between">
      <div>
        <h2 className="text-xl font-semibold text-slate-900">
          {title}
        </h2>

        {subtitle && (
          <p className="mt-1 text-sm text-slate-500">
            {subtitle}
          </p>
        )}
      </div>

      {action && <div>{action}</div>}
    </div>
  );
}
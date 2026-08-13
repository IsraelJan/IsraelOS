interface ProgressBarProps {
  value: number;
  color?: string;
}

export function ProgressBar({
  value,
  color = "bg-blue-600",
}: ProgressBarProps) {
  return (
    <div className="w-full">
      <div className="h-2 overflow-hidden rounded-full bg-slate-200">
        <div
          className={`h-full rounded-full transition-all duration-500 ${color}`}
          style={{
            width: `${value}%`,
          }}
        />
      </div>

      <div className="mt-2 text-right text-xs text-slate-500">
        {value}% Complete
      </div>
    </div>
  );
}
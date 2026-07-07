interface PageContainerProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export function PageContainer({
  title,
  description,
  children,
}: PageContainerProps) {
  return (
    <div className="mx-auto w-full max-w-7xl space-y-8 px-6 py-8">
      <header>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          {title}
        </h1>

        {description && (
          <p className="mt-2 text-slate-600">
            {description}
          </p>
        )}
      </header>

      <main>{children}</main>
    </div>
  );
}
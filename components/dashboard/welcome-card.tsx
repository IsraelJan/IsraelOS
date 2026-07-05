interface WelcomeCardProps {
  userName: string;
}

export function WelcomeCard({ userName }: WelcomeCardProps) {
  const today = new Date();

  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <section className="rounded-xl border bg-white p-8 shadow-sm">
      <p className="text-sm text-slate-500">
        {formattedDate}
      </p>

      <h1 className="mt-2 text-4xl font-bold text-slate-900">
        Good Morning, {userName} 👋
      </h1>

      <p className="mt-4 max-w-2xl text-slate-600">
        Welcome to IsraelOS. This is your personal operating system
        where you can build, learn, organize, grow, and lead from one
        intelligent workspace.
      </p>
    </section>
  );
}
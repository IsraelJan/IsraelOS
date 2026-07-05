import Link from "next/link";
import {
  LayoutDashboard,
  Building2,
  Users,
  FileText,
  Wrench,
  Wallet,
  Briefcase,
  Workflow,
  Bot,
  Store,
  Settings,
} from "lucide-react";

const navigation = [
  {
    name: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    name: "Properties",
    href: "/properties",
    icon: Building2,
  },
  {
    name: "Tenants",
    href: "/tenants",
    icon: Users,
  },
  {
    name: "Leases",
    href: "/leases",
    icon: FileText,
  },
  {
    name: "Maintenance",
    href: "/maintenance",
    icon: Wrench,
  },
  {
    name: "Finance",
    href: "/finance",
    icon: Wallet,
  },
  {
    name: "CRM",
    href: "/crm",
    icon: Briefcase,
  },
  {
    name: "Automation",
    href: "/automation",
    icon: Workflow,
  },
  {
    name: "AI",
    href: "/ai",
    icon: Bot,
  },
  {
    name: "Marketplace",
    href: "/marketplace",
    icon: Store,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export function Sidebar() {
  return (
    <aside className="w-64 min-h-screen border-r bg-slate-900 text-white">
      <div className="p-6">
        <h1 className="text-2xl font-bold tracking-tight">
          IsraelOS
        </h1>

        <p className="mt-1 text-sm text-slate-400">
          PropTech System
        </p>
      </div>

      <nav className="px-3">
        <ul className="space-y-2">
          {navigation.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="flex items-center gap-3 rounded-lg px-3 py-2 transition-colors hover:bg-slate-800"
                >
                  <Icon size={20} />

                  <span>{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import {
  PanelLeftClose,
  PanelLeftOpen,
  LayoutDashboard,
  LayoutGrid,
  FolderKanban,
  Building2,
  Users,
  Wallet,
  CalendarDays,
  CheckSquare,
  Target,
  GraduationCap,
  BookOpen,
  Lightbulb,
  FileText,
  Bot,
  Settings,
} from "lucide-react";

const navigation = [
  {
    name: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    name: "Workspace",
    href: "/workspace",
    icon: LayoutGrid,
  },
  {
    name: "Projects",
    href: "/projects",
    icon: FolderKanban,
  },
  {
    name: "Businesses",
    href: "/businesses",
    icon: Building2,
  },
  {
    name: "Clients",
    href: "/clients",
    icon: Users,
  },
  {
    name: "Finance",
    href: "/finance",
    icon: Wallet,
  },
  {
    name: "Calendar",
    href: "/calendar",
    icon: CalendarDays,
  },
  {
    name: "Tasks",
    href: "/tasks",
    icon: CheckSquare,
  },
  {
    name: "Goals",
    href: "/goals",
    icon: Target,
  },
  {
    name: "Learning",
    href: "/learning",
    icon: GraduationCap,
  },
  {
    name: "Knowledge",
    href: "/knowledge",
    icon: BookOpen,
  },
  {
    name: "Ideas",
    href: "/ideas",
    icon: Lightbulb,
  },
  {
    name: "Documents",
    href: "/documents",
    icon: FileText,
  },
  {
    name: "AI Assistant",
    href: "/ai",
    icon: Bot,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

interface SidebarProps {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Sidebar({
  collapsed,
  setCollapsed,
}: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      className={`
        fixed
        left-0
        top-0
        z-50
        flex
        h-screen
        flex-col
        border-r
        border-slate-800
        bg-slate-950
        text-white
        transition-all
        duration-300
        ${collapsed ? "w-24" : "w-64"}
      `}
    >
      {/* Brand */}
      <div className="border-b border-slate-800 p-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-sm font-bold text-white shadow-lg">
              IO
            </div>

            {!collapsed && (
              <div>
                <h1 className="text-xl font-bold tracking-tight">
                  IsraelOS
                </h1>

                <p className="text-xs text-slate-500">
                  Personal Operating System
                </p>

                <p className="mt-1 text-xs font-medium text-blue-400">
                  Build. Learn. Lead.
                </p>
              </div>
            )}
          </div>

          <button
            onClick={() => setCollapsed(!collapsed)}
            className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-800 hover:text-white"
          >
            {collapsed ? (
              <PanelLeftOpen size={18} />
            ) : (
              <PanelLeftClose size={18} />
            )}
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-3 py-6">
        <ul className="space-y-2">
          {navigation.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`
                    flex
                    items-center
                    rounded-xl
                    px-4
                    py-3
                    text-sm
                    font-medium
                    transition-all
                    duration-200
                    ${
                      collapsed
                        ? "justify-center"
                        : "gap-3"
                    }
                    ${
                      pathname === item.href
                        ? "bg-blue-600 text-white shadow-lg"
                        : "text-slate-300 hover:bg-slate-800 hover:text-white"
                    }
                  `}
                >
                  <Icon size={26} />

                  {!collapsed && (
                    <span>{item.name}</span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* User */}
      <div className="border-t border-slate-800 p-4">
        <Link
          href="/profile"
          className={`
            flex
            items-center
            rounded-xl
            p-2
            transition-all
            duration-300
            hover:bg-slate-800
            ${
              collapsed
                ? "justify-center"
                : "gap-3"
            }
          `}
        >
          <Image
            src="/image/profile.png"
            alt="Israel Jan"
            width={40}
            height={40}
            className="h-10 w-10 rounded-full border-2 border-blue-500 object-cover"
          />

          {!collapsed && (
            <div>
              <p className="text-sm font-medium text-white">
                Israel Jan
              </p>

              <p className="text-xs text-slate-400">
                Software Engineer
              </p>
            </div>
          )}
        </Link>
      </div>
    </aside>
  );
}
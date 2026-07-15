import {
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

export const navigation = [
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
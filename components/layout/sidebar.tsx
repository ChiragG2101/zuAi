"use client";
import React from "react";
import { Roboto_Serif } from "next/font/google";
import { CalendarSearch, LayoutDashboard, UserPlus } from "lucide-react";
import { UserGroupIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/",
  },
  {
    label: "Recruitment",
    icon: UserPlus,
    href: "/recuitment",
  },
  {
    label: "Schedule",
    icon: CalendarSearch,
    href: "/schedule",
  },
  {
    label: "Employee",
    icon: UserGroupIcon,
    href: "/employee",
  },
  {
    label: "Department",
    icon: UserGroupIcon,
    href: "/department",
  },
];

const robotoSerif = Roboto_Serif({
  weight: "500",

  subsets: ["latin"],
});

const SidebarLink = ({ label, icon: Icon, href }: any) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 relative",
        pathname === href ? "text-primary" : "text-muted-foreground"
      )}
    >
      <Icon
        fill={pathname === href ? "#FF5151" : "#B2B2B2"}
        className={cn(`h-6 w-6 `)}
      />
      <p className="hidden lg:flex lg:fixed text-sm font-medium ml-10">
        {label}
      </p>
    </Link>
  );
};
const Sidebar = () => {
  return (
    <div>
      <h1 className="text-xl lg:text-4xl font-semibold mx-auto my-9 text-center">
        ZUAI
      </h1>
      <div className="mx-6">
        <p
          className={cn(
            "text-sm text-muted-foreground font-medium",
            robotoSerif.className
          )}
        >
          MAIN MENU
        </p>
        <div className="space-y-7 my-6">
          {routes.map((route) => (
            <SidebarLink key={route.label} {...route} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

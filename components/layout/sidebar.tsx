"use client";
import React, { useEffect, useState } from "react";
import { Roboto_Serif } from "next/font/google";
import {
  Boxes,
  CalendarSearch,
  Headset,
  LayoutDashboard,
  Settings,
  UserPlus,
  Users2Icon,
  XIcon,
} from "lucide-react";
import { UserGroupIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useSidebarContext } from "./sidebar-context";

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/",
  },
  {
    label: "Recruitment",
    icon: UserPlus,
    href: "/recruitment",
  },
  {
    label: "Schedule",
    icon: CalendarSearch,
    href: "/schedule",
  },
  {
    label: "Employee",
    icon: Users2Icon,
    href: "/employee",
  },
  {
    label: "Department",
    icon: Boxes,
    href: "/department",
  },
];

const OTHER = [
  {
    label: "Support",
    icon: Headset,
    href: "/support",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
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
        "flex items-center  gap-3 relative",
        pathname === href ? "text-primary" : "text-muted-foreground"
      )}
    >
      <Icon
        fill={pathname === href ? "#FF5151" : "#B2B2B2"}
        className={cn(`h-6 w-6 `)}
      />
      <p className=" flex  md:hidden lg:flex  text-sm font-medium ">{label}</p>
    </Link>
  );
};
const Sidebar = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useSidebarContext();
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => {
      setWidth(window?.innerWidth);
      window?.innerWidth > 768
        ? setIsSidebarOpen(true)
        : setIsSidebarOpen(false);
    };

    window && window?.addEventListener("resize", handleResize);

    return () => {
      window && window?.removeEventListener("resize", handleResize);
    };
  }, [setIsSidebarOpen]);

  return (
    <div
      className={cn(
        " h-full w-60 md:w-24 lg:w-60  md:fixed md:inset-y-0 z-50 bg-[#FAFAFA] lg:px-4",
        isSidebarOpen
          ? width > 768
            ? "flex flex-col "
            : "absolute top-0 left-0"
          : "hidden"
      )}
    >
      <h1 className="text-xl lg:text-4xl font-semibold mx-auto mt-9 mb-12 md:my-12 lg:mt-9 lg:mb-12 text-center">
        ZUAI
      </h1>
      <XIcon
        className="absolute md:hidden top-2 left-2 text-muted"
        onClick={() => setIsSidebarOpen(false)}
      />
      <div className="mx-6">
        <p
          className={cn(
            "text-xs text-[8px]  lg:text-xs text-muted-foreground font-medium"
            // robotoSerif.className
          )}
        >
          MAIN MENU
        </p>
        <div className="space-y-7 my-6 flex flex-col md:items-center lg:items-start">
          {routes.map((route) => (
            <SidebarLink key={route.label} {...route} />
          ))}
        </div>
      </div>

      <div className="mx-6 mt-12">
        <p
          className={cn(
            "text-xs text-[8px] text-left md:text-center lg:text-left lg:text-xs text-muted-foreground font-medium"
            // robotoSerif.className
          )}
        >
          OTHERS
        </p>
        <div className="space-y-7 my-6 flex flex-col md:items-center lg:items-start">
          {OTHER.map((route) => (
            <SidebarLink key={route.label} {...route} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

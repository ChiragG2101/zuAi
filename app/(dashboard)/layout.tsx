import Navbar from "@/components/layout/navbar";
import Sidebar from "@/components/layout/sidebar";
import { SidebarProvider } from "@/components/layout/sidebar-context";
import React from "react";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full w-full relative">
      <SidebarProvider>
        <Sidebar />

        <main className="md:pl-24 lg:pl-60 pb-10">
          <Navbar />
          {children}
        </main>
      </SidebarProvider>
    </div>
  );
};

export default DashboardLayout;

import Navbar from "@/components/layout/navbar";
import Sidebar from "@/components/layout/sidebar";
import React from "react";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full w-full relative">
      <div className="hidden h-full w-60 md:flex md:w-32 lg:w-60 md:flex-col md:fixed md:inset-y-0 z-50 bg-white">
        <Sidebar />
      </div>
      <main className="md:pl-32 lg:pl-60 pb-10">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;

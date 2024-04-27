"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

const defaultValue = {
  isSidebarOpen: false,
  setIsSidebarOpen: (isOpen: boolean) => {},
};
const SidebarContext = createContext(defaultValue);

export const useSidebarContext = () => useContext(SidebarContext);

export const SidebarProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsSidebarOpen(window.innerWidth > 768);
    }
  }, []);

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
      {children}
    </SidebarContext.Provider>
  );
};

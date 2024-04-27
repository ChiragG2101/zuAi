"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";

import { signOut, useSession } from "next-auth/react";
import { Input } from "../ui/input";
import { Bars3Icon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { BellIcon } from "@heroicons/react/24/solid";
import { ChevronDown, MessageSquareMoreIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useSidebarContext } from "./sidebar-context";

const Navbar = () => {
  const { data: session } = useSession();
  const { isSidebarOpen, setIsSidebarOpen } = useSidebarContext();

  return (
    <div className="h-16 w-full px-8 flex items-center justify-between border-b border-muted">
      {/* {session?.user?.firstName} */}
      <div className="flex gap-5 items-center">
        <Bars3Icon
          className="md:hidden w-5 h-5 text-muted-foreground"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        />
        <MagnifyingGlassIcon className="w-4 h-4   md:hidden text-muted-foreground" />
        <div className="relative hidden md:flex">
          <Input placeholder="Search" className="w-[300px]" />
          <MagnifyingGlassIcon className="w-4 h-4 absolute  md:right-5 md:top-3 text-muted-foreground" />
        </div>
      </div>
      <div className="flex gap-6 items-center">
        <div className="relative">
          <BellIcon className="w-5 h-5 text-muted-foreground" />
          <div className="absolute rounded-full bg-destructive w-1.5 h-1.5 top-0.5 right-0.5"></div>
        </div>
        <MessageSquareMoreIcon className="w-5 h-5 text-muted-foreground" />
        <div className="flex gap-1">
          <Avatar>
            <AvatarImage src="/assets/avatar.png" alt="Avatar" />
            <AvatarFallback>ZU</AvatarFallback>
          </Avatar>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger className="flex gap-1 items-center">
            <span className="hidden lg:block">{session?.user?.email}</span>{" "}
            <ChevronDown />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-full" sideOffset={10}>
            <Button className="w-full" onClick={() => signOut()}>
              Sign out
            </Button>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Navbar;

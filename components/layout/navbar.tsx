"use client";
import React from "react";
import { Button } from "../ui/button";

import { signOut, useSession } from "next-auth/react";
import { Input } from "../ui/input";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { BellIcon } from "@heroicons/react/24/solid";
import { MessageSquareMoreIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar = () => {
  const { data: session } = useSession();

  console.log(session);
  return (
    <div className="h-16 w-full px-8 flex items-center justify-between border-b border-muted-foreground">
      <div className="relative flex">
        <Input placeholder="Search" className="w-[300px]" />
        <MagnifyingGlassIcon className="w-4 h-4 absolute right-5 top-3 text-muted-foreground" />
      </div>
      <div className="flex gap-4 items-center">
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
        {session?.user?.name}, {session?.user?.email}
        <Button onClick={() => signOut()}>Sign out</Button>
      </div>
    </div>
  );
};

export default Navbar;

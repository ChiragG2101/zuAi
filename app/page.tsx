"use client";
import React from "react";

import { signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import SignOut from "@/components/SignOut";

const Dashboard = () => {
  const { data: session } = useSession();
  return (
    <div>
      Dashboard , {session?.user?.name}, {session?.user?.email}
      <SignOut />
    </div>
  );
};

export default Dashboard;

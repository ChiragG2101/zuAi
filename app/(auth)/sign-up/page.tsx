import SignUpForm from "@/components/auth/signup-form";
import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const page = async () => {
  const session = await getServerSession(authOptions);

  if(session) redirect("/"); 
  return <SignUpForm />;
};

export default page;

import React from "react";
import PropTypes from "prop-types";
import { Button } from "./ui/button";
import { signOut } from "next-auth/react";

const SignOut = () => {
  return (
    <div>
      <Button onClick={() => signOut()}>Sign out</Button>
    </div>
  );
};

export default SignOut;

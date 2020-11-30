import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@material-ui/core";

const LogOut = () => {
  const { logout } = useAuth0();

  return <Button onClick={() => logout()}>Log Out</Button>;
};

export default LogOut;

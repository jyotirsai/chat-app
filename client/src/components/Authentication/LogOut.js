import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@material-ui/core";
import useStyles from "./button-styles";

const LogOut = () => {
  const { logout } = useAuth0();
  const classes = useStyles();

  return (
    <Button className={classes.button2} onClick={() => logout()}>
      Log Out
    </Button>
  );
};

export default LogOut;

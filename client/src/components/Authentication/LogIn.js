import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@material-ui/core";
import useStyles from "./button-styles";

const LogIn = () => {
  const classes = useStyles();
  const { loginWithRedirect } = useAuth0();
  return (
    <Button className={classes.button2} onClick={() => loginWithRedirect()}>
      Log In
    </Button>
  );
};

export default LogIn;

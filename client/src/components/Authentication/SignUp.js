import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@material-ui/core";
import useStyles from "./button-styles";

const SignUp = () => {
  const { loginWithRedirect } = useAuth0();
  const classes = useStyles();
  return (
    <Button
      className={classes.button}
      onClick={() =>
        loginWithRedirect({
          screen_hint: "signup",
        })
      }
    >
      Sign Up
    </Button>
  );
};

export default SignUp;

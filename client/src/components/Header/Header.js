import React from "react";
import { AppBar, Toolbar, Typography, Grid } from "@material-ui/core";
import { useAuth0 } from "@auth0/auth0-react";
import { makeStyles } from "@material-ui/styles";
import LogIn from "../Authentication/LogIn";
import LogOut from "../Authentication/LogOut";
import SignUp from "../Authentication/SignUp";

const useStyles = makeStyles({
  navLinks: {
    marginLeft: "auto",
  },
  linkStyles: {
    textDecoration: "none",
    color: "white",
  },
  chatHeader: {
    marginRight: "auto",
  },
  toolbar: {
    backgroundColor: "#181818",
  },
});

const Header = () => {
  const classes = useStyles();
  const { isAuthenticated } = useAuth0();
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.chatHeader}>
          Chat
        </Typography>
        <Grid className={classes.navLinks}>
          <SignUp />
          {isAuthenticated ? <LogOut /> : <LogIn />}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

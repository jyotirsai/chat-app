import React from "react";
import { AppBar, Toolbar, Typography, Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";

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
    backgroundColor: "#282828",
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.chatHeader}>
          Chat
        </Typography>
        <Grid className={classes.navLinks}>
          <Link to="/" className={classes.linkStyles}>
            <Button edge="end" color="inherit">
              Sport
            </Button>
          </Link>
          <Link to="/login" className={classes.linkStyles}>
            <Button edge="end" color="inherit">
              Login
            </Button>
          </Link>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

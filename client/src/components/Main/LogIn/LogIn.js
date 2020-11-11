import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

const LogIn = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography>Username</Typography>
        <TextField
          onChange={(event) => props.setUsername(event.target.value)}
        />
      </CardContent>
      <CardActions>
        <Link to="/">
          <Button>Log In</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default LogIn;

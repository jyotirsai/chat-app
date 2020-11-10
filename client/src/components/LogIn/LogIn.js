import React from "react";
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

const LogIn = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography>Username</Typography>
        <TextField />
      </CardContent>
      <CardActions>
        <Button>Log In</Button>
      </CardActions>
    </Card>
  );
};

export default LogIn;

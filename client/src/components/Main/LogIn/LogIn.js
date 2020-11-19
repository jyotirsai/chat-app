import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Paper,
  Avatar,
  FormControl,
  Snackbar,
  Button,
  Typography,
  TextField,
  Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    width: "100%",
    margin: "80px auto",
    padding: 25,
  },
  box: {
    width: "100%",

    textAlign: "center",
    paddingTop: "50px",
  },
});

const LogIn = (props) => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const submitRegistration = (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
      console.log("passwords match");
    }
    console.log("ran function");
  };

  return (
    <Box className={classes.box} component="div">
      <Typography variant="h1">Welcome to Chat App!</Typography>
      <Typography variant="subtitle1">Sign up below to chat!</Typography>
      <Paper className={classes.root}>
        <Typography variant="h4">Sign Up</Typography>
        <form onSubmit={submitRegistration}>
          <FormControl required fullWidth>
            <TextField
              onChange={(event) => props.setUsername(event.target.value)}
              placeholder="Username"
            />
          </FormControl>
          <FormControl fullWidth>
            <TextField
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email"
              type="email"
            />
          </FormControl>
          <FormControl fullWidth>
            <TextField
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Password"
            />
          </FormControl>
          <FormControl fullWidth>
            <TextField
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              placeholder="Confirm Password"
            />
          </FormControl>

          <Button type="submit">JOIN</Button>
        </form>
      </Paper>
    </Box>
  );
};

export default LogIn;

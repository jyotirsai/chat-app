import React, { useState, useContext } from "react";
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
    backgroundColor: "#202020",
    border: "1px solid #383838",
  },
  box: {
    width: "100%",
    textAlign: "center",
    paddingTop: "50px",
  },
  headerText: {
    color: "#E0E0E0",
  },
});

const SignUp = (props) => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const submitRegistration = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      console.log("error");
    }
    console.log("ran function");
  };

  return (
    <Box className={classes.box} component="div">
      <Typography className={classes.headerText} variant="h1">
        Welcome to Chat App!
      </Typography>
      <Typography className={classes.headerText} variant="subtitle1">
        Sign up below to chat!
      </Typography>
      <Paper className={classes.root}>
        <Typography className={classes.headerText} variant="h4">
          Sign Up
        </Typography>
        <form onSubmit={submitRegistration}>
          <FormControl required fullWidth>
            <TextField
              name="username"
              onChange={(event) => props.setUsername(event.target.value)}
              InputLabelProps={{ className: classes.headerText }}
              inputProps={{ className: classes.headerText }}
              placeholder="Username"
            />
          </FormControl>
          <FormControl fullWidth>
            <TextField
              name="email"
              value={email}
              //onChange={}
              InputLabelProps={{ className: classes.headerText }}
              inputProps={{ className: classes.headerText }}
              placeholder="Email"
              type="email"
            />
          </FormControl>
          <FormControl fullWidth>
            <TextField
              name="password"
              value={password}
              //onChange={(event) => setPassword(event.target.value)}
              InputLabelProps={{ className: classes.headerText }}
              inputProps={{ className: classes.headerText }}
              placeholder="Password"
            />
          </FormControl>
          <FormControl fullWidth>
            <TextField
              name="confirmPassword"
              value={confirmPassword}
              //onChange={(event) => setConfirmPassword(event.target.value)}
              InputLabelProps={{ className: classes.headerText }}
              inputProps={{ className: classes.headerText }}
              placeholder="Confirm Password"
            />
          </FormControl>
          <Link to="/">
            <Button className={classes.headerText} type="submit">
              JOIN
            </Button>
          </Link>
        </form>
      </Paper>
    </Box>
  );
};

export default SignUp;

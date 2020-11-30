import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import SignupButton from "./signup-button";
import LoginButton from "./login-button";

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

const Landing = () => {
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
      <SignupButton />
      <LoginButton />
    </Box>
  );
};

export default Landing;

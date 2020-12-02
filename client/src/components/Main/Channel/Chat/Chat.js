import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { Paper, Typography, Grid } from "@material-ui/core";
import { useAuth0 } from "@auth0/auth0-react";
import useStyles from "./styles.js";
import "./Chat.css";
import Messages from "./Messages/Messages";
import FormBox from "./FormBox/FormBox";

const ENDPOINT = "http://localhost:5000";
const socket = io(ENDPOINT);
let textfieldLabel = "Login to chat";
let username;

const Chat = () => {
  const classes = useStyles();
  const { user } = useAuth0();
  const [messageItem, setMessageItem] = useState({
    name: "",
    message: "",
  });
  const [messageArray, setMessageArray] = useState([]);

  useEffect(() => {
    if (typeof user !== "undefined") {
      username = user["http://localhost:3000/username"];
      setMessageItem({ name: username });
      console.log(username);
    }
  }, [user]);

  useEffect(() => {
    console.log(socket);

    return () => {
      socket.emit("disc");
      socket.off();
    };
  }, [ENDPOINT]);

  useEffect(() => {
    socket.on("message", (messageItem) => {
      setMessageArray((messageArray) => [...messageArray, messageItem]);
    });
  }, []);

  const submitClick = (e) => {
    e.preventDefault();
    if (messageItem.message) {
      socket.emit("message", messageItem);
      setMessageItem({ ...messageItem, message: "" });
    }
  };

  return (
    <Paper className={classes.container} square variant="outlined">
      <Grid container justify="space-between" direction="column">
        <Grid item className={classes.titleBox}>
          <Typography variant="h5" align="center">
            Chat
          </Typography>
        </Grid>
        <Grid
          container
          item
          className={classes.messageBox}
          alignItems="flex-end"
        >
          <Messages messageArray={messageArray} />
        </Grid>
        <Grid item container justify="space-between" className={classes.form}>
          <FormBox
            submitClick={submitClick}
            setMessageItem={setMessageItem}
            messageItem={messageItem}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Chat;

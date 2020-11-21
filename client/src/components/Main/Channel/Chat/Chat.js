import React, { useState, useRef, useEffect } from "react";
import io from "socket.io-client";
import {
  Paper,
  Typography,
  Grid,
  TextField,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@material-ui/core";
import useStyles from "./styles.js";
import "./Chat.css";

const ENDPOINT = "http://localhost:5000";
const socket = io(ENDPOINT);
let textfieldLabel = "Login to chat";

const Chat = (props) => {
  const classes = useStyles();
  const [messageItem, setMessageItem] = useState({ name: "", message: "" });
  const [messageArray, setMessageArray] = useState([]);

  useEffect(() => {
    console.log(socket);

    if (props.username) {
      textfieldLabel = "Send a message";
      setMessageItem({ name: props.username });
    }

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

  const textChange = (e) => {
    setMessageItem({ ...messageItem, message: e.target.value });
  };

  const submitClick = (e) => {
    e.preventDefault();
    if (messageItem.message) {
      socket.emit("message", messageItem);
      setMessageItem({ ...messageItem, message: "" });
    }
  };

  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(scrollToBottom, [messageArray]);

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
          <List dense>
            {messageArray.map((msg, id) => (
              <ListItem key={id} className={classes.chatListItem}>
                <ListItemText>
                  <Typography variant="body1">
                    {msg.name}: {msg.message}
                  </Typography>
                </ListItemText>
              </ListItem>
            ))}
            <div ref={messagesEndRef} />
          </List>
        </Grid>
        <Grid item container justify="space-between" className={classes.form}>
          <form onSubmit={submitClick} className="form-style">
            <TextField
              className={classes.textfield}
              InputLabelProps={{ className: classes.input }}
              inputProps={{ className: classes.input }}
              disabled={!props.username}
              value={messageItem.message}
              onChange={textChange}
              size="small"
              variant="filled"
              label={textfieldLabel}
            ></TextField>
            <Button
              className={classes.button}
              variant="contained"
              disableElevation
              onClick={submitClick}
            >
              Chat
            </Button>
          </form>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Chat;

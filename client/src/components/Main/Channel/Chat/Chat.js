import React, { useState, useRef, useEffect } from "react";
import io from "socket.io-client";
import "./Chat.css";
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

  /*   const submitEnter = (event) => {
    if (messageItem && event.key === "Enter") {
      setMessageArray((prevMsgs) => {
        return [...prevMsgs, messageItem];
      });
      setMessageItem({});
    }
  }; */

  const textChange = (e) => {
    setMessageItem({ ...messageItem, message: e.target.value });
  };

  const submitClick = (e) => {
    e.preventDefault();
    if (messageItem) {
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
    <div className="chat-styles">
      <Paper className={classes.chatPaper} square variant="outlined">
        <Grid
          className={classes.chatGrid}
          container
          justify="space-between"
          direction="column"
        >
          <Grid item className={classes.chatTitle}>
            <Typography variant="h4" align="center">
              Chat
            </Typography>
          </Grid>
          <Grid
            container
            item
            className={classes.chatBox}
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
          <Grid
            item
            container
            justify="space-between"
            className={classes.gridtextbox}
          >
            <TextField
              className={classes.textbox}
              disabled={!props.username}
              value={messageItem.message}
              onChange={textChange}
              // onKeyPress={submitEnter}
              size="small"
              variant="filled"
              label={textfieldLabel}
            ></TextField>
            <Button variant="contained" disableElevation onClick={submitClick}>
              Chat
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Chat;

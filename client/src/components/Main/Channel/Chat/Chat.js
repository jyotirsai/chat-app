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
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  chatPaper: {
    height: "80vh",
    width: "575px",
  },
  chatGrid: {
    height: "80vh",
    width: "30vw",
  },
  chatTitle: {
    height: "5vh",
    borderBottom: "1px solid #D0D0D0",
  },
  chatBox: {
    height: "67.5vh",
    wordBreak: "break-all",
    overflow: "hidden",
    "&:hover": {
      overflowY: "scroll",
    },
    borderBottom: "1px solid #D0D0D0",
  },
  chatListItem: {
    overflowWrap: "break-word",
  },
  textbox: {
    width: 475,
  },
  gridtextbox: {
    padding: 10,
  },
});

const ENDPOINT = "http://localhost:5000";
const socket = io(ENDPOINT);

const Chat = (props) => {
  const classes = useStyles();
  const [messageItem, setMessageItem] = useState("");
  const [messageArray, setMessageArray] = useState([]);

  useEffect(() => {
    console.log(socket);

    return () => {
      socket.emit("disc");
      socket.off();
    };
  }, [ENDPOINT]);

  useEffect(() => {
    socket.on("message", (messageItem) => {
      setMessageArray((messagesArray) => [...messagesArray, messageItem]);
    });
  }, []);

  let textfieldLabel = "Login to chat";

  if (props.username) {
    textfieldLabel = "Send a message";
  }

  const handleChange = (event) => {
    setMessageItem(event.target.value);
  };

  const submitEnter = (event) => {
    if (messageItem && event.key === "Enter") {
      setMessageArray((prevMsgs) => {
        return [...prevMsgs, messageItem];
      });
      setMessageItem("");
    }
  };

  const submitClick = (e) => {
    e.preventDefault();
    if (messageItem) {
      socket.emit("message", messageItem);
      setMessageItem("");
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
                      {props.username}: {msg}
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
              value={messageItem}
              onChange={handleChange}
              onKeyPress={submitEnter}
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

import React, { useEffect, useRef } from "react";
import { Typography, List, ListItem, ListItemText } from "@material-ui/core";
import useStyles from "../styles.js";

const Messages = ({ messageArray }) => {
  const classes = useStyles();

  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(scrollToBottom, [messageArray]);

  return (
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
  );
};

export default Messages;

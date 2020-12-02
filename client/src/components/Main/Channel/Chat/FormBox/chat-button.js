import React from "react";
import useStyles from "../styles.js";
import { Button } from "@material-ui/core";

const ChatButton = ({ submitClick }) => {
  const classes = useStyles();
  return (
    <Button
      className={classes.button}
      variant="contained"
      disableElevation
      onClick={submitClick}
    >
      Chat
    </Button>
  );
};

export default ChatButton;

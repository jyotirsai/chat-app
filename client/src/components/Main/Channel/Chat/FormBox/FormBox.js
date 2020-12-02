import React from "react";
import { TextField } from "@material-ui/core";
import useStyles from "../styles.js";
import ChatButton from "./chat-button.js";
import SignupButton from "./signup-button.js";

let label = "Login or Signup to Chat";
const FormBox = ({
  submitClick,
  setMessageItem,
  messageItem,
  isAuthenticated,
}) => {
  const classes = useStyles();

  if (isAuthenticated) {
    label = "Send a Message";
  }

  return (
    <form onSubmit={submitClick} className="form-style">
      <TextField
        className={classes.textfield}
        InputLabelProps={{ className: classes.input }}
        inputProps={{ className: classes.input }}
        value={messageItem.message || ""}
        onChange={({ target: { value } }) =>
          setMessageItem({ ...messageItem, message: value })
        }
        size="small"
        variant="filled"
        disabled={!isAuthenticated}
        label={label}
      ></TextField>
      <ChatButton submitClick={submitClick} />
    </form>
  );
};

export default FormBox;

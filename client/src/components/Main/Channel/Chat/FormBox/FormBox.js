import React from "react";
import { TextField, Button } from "@material-ui/core";
import useStyles from "../styles.js";

let label = "Login to Chat";
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
      <Button
        className={classes.button}
        variant="contained"
        disableElevation
        onClick={submitClick}
      >
        Chat
      </Button>
    </form>
  );
};

export default FormBox;

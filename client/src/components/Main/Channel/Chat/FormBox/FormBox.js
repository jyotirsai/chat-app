import React from "react";
import { TextField, Button } from "@material-ui/core";
import useStyles from "../styles.js";

const FormBox = ({ submitClick, setMessageItem, messageItem }) => {
  const classes = useStyles();
  return (
    <form onSubmit={submitClick} className="form-style">
      <TextField
        className={classes.textfield}
        InputLabelProps={{ className: classes.input }}
        inputProps={{ className: classes.input }}
        value={messageItem.message}
        onChange={({ target: { value } }) =>
          setMessageItem({ ...messageItem, message: value })
        }
        size="small"
        variant="filled"
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

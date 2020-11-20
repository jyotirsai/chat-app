import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  container: {
    width: "100%",
    maxWidth: "1000px",
    margin: "0 auto",
    backgroundColor: "#202020",
    border: "1px solid #383838",
  },
  titleBox: {
    borderBottom: "1px solid #383838",
    color: "#E0E0E0",
    padding: 10,
  },
  messageBox: {
    wordBreak: "break-all",
    overflow: "hidden",
    "&:hover": {
      overflowY: "scroll",
    },

    height: "600px",
  },
  form: {
    width: "100%",
  },
  chatListItem: {
    overflowWrap: "break-word",
    color: "#E0E0E0",
  },
  textfield: {
    width: "80%",
    "& label.Mui-focused": {
      color: "#585858",
    },
  },
  input: {
    color: "#E0E0E0",
  },
  button: {
    backgroundColor: "#4B0082",
    color: "white",
  },
});

export default useStyles;

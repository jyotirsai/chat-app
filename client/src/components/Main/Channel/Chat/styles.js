import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  container: {
    border: "1px solid blue",
    width: "100%",
    maxWidth: "1000px",
    margin: "0 auto",
  },
  titleBox: {
    //borderBottom: "1px solid #D0D0D0",
    border: "1px solid purple",
  },
  messageBox: {
    wordBreak: "break-all",
    overflow: "hidden",
    "&:hover": {
      overflowY: "scroll",
    },
    // borderBottom: "1px solid #D0D0D0",
    border: "1px solid orange",
    height: "600px",
  },
  form: {
    border: "1px solid green",
    width: "100%",
  },
  chatListItem: {
    overflowWrap: "break-word",
  },
  textfield: {
    width: "83%",
  },
  button: {},
});

export default useStyles;

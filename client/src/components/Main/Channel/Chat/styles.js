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

export default useStyles;

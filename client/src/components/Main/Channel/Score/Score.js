import React from "react";
import { Typography, Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  headerText: {
    color: "#E0E0E0",
  },
  container: {
    height: "232.5px",
    backgroundColor: "#202020",
    border: "1px solid #383838",
  },
  titleBox: {
    borderBottom: "1px solid #383838",
    padding: 10,
  },
});

const Score = () => {
  const classes = useStyles();
  return (
    <div className="score-styles">
      <Paper className={classes.container} square variant="outlined">
        <Grid container direction="column">
          <Grid item className={classes.titleBox}>
            <Typography
              className={classes.headerText}
              variant="h5"
              align="center"
            >
              Score
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Score;

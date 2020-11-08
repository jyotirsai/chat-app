import React from 'react'
import './index.css'
import {Typography, Grid} from '@material-ui/core'

const Score = () => {
    return (
        <div className="score-styles">
            <Grid container justify="center">
                <Typography variant="h4">Score</Typography>
            </Grid>
        </div>
    )
}

export default Score

import React from 'react'
import './index.css'
import {Typography, Grid} from '@material-ui/core'

const Poll = () => {
    return (
        <div className="poll-styles">
            <Grid container justify="center">
                <Typography variant="h4">Polls</Typography>
            </Grid>
        </div>
    )
}

export default Poll

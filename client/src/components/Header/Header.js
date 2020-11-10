import React from 'react'
import {AppBar, Toolbar, Typography, Button} from '@material-ui/core'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
            <Typography variant="h6">
                Chat
            </Typography>
            <Link to="/">
                <Button edge="end" color="inherit">Sport</Button>
            </Link>
            <Link to="/login">
                <Button edge="end" color="inherit">Login</Button>
            </Link>
            </Toolbar>
        </AppBar>
    )
}

export default Header

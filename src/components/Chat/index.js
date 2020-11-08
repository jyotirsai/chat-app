import React, {useState, useRef, useEffect} from 'react'
import './index.css'
import {Paper, Typography, Grid, TextField, List, ListItem, ListItemText} from '@material-ui/core'
import {makeStyles} from "@material-ui/styles"

const useStyles = makeStyles({
    chatPaper: {
        height: "80vh",
        width: "30vw",
    },
    chatGrid: {
        height: "80vh",
        width: "30vw",
    },
    chatTitle: {
        height: "5vh",
        borderStyle: "dotted",
    },
    chatBox: {
        height: "69.69vh",
        borderStyle: "dotted",
        overflow: "hidden",
        '&:hover': {
            overflowY: "scroll",
        },
    },
})
const Chat = () => {
    const classes = useStyles();
    const [messageItem, setMessageItem] = useState("");
    const [messageArray, setMessageArray] = useState([]);

    const handleChange = (event) => {
        setMessageItem(event.target.value);
    }

    const submit = (event) => {
        if (event.key == 'Enter') {
            setMessageArray((prevMsgs) => {
                return [...prevMsgs, messageItem];
            });
            setMessageItem("");
        }
    }

    const messagesEndRef = useRef(null)

    const scrollToBottom = () => {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  
    useEffect(scrollToBottom, [messageArray]);
    
    return (
        <div className="chat-styles">
            <Paper className={classes.chatPaper} square variant="outlined">
            <Grid className={classes.chatGrid} container justify="space-between" direction="column">
                <Grid item className={classes.chatTitle}>
                    <Typography variant="h4" align="center">Chat</Typography>
                </Grid>
                <Grid container item className={classes.chatBox} alignItems="flex-end">
                    <List>  
                    {messageArray.map((msg, id) => (
                        <ListItem key={id}>
                            <ListItemText>
                                <Typography variant="body1">Jyotir: {msg}</Typography>
                            </ListItemText>
                        </ListItem>          
                    ))}
                    <div ref={messagesEndRef}/>
                    </List>
                </Grid>
                <Grid item >
                    <TextField value={messageItem} onChange={handleChange} onKeyPress={submit} size="small" fullWidth variant="filled" label="Send a message"></TextField>
                </Grid>
            </Grid>
            </Paper>
        </div>
    )
}

export default Chat

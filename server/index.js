const express = require("express");
const http = require("http");
const socketio = require("socket.io");

const PORT = process.env.PORT || 5000;
const router = require("./router");

const app = express();

const server = http.createServer(app);
const io = socketio(server);

io.on("connection", (socket) => {
  console.log("New user connected");

  socket.on("message", (messageItem) => {
    io.emit("message", messageItem);
    console.log(messageItem);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

app.use(router);

server.listen(PORT, () =>
  console.log(`Server is up and running on port ${PORT}`)
);

const express = require("express");
const path = require("path");
const http = require("http");
const PORT = process.env.PORT || 3000;
const socketio = require("socket.io");
const app = express();
const server = http.createServer(app);
const io = socketio(server);

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

//Start server
server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

// handle a socket connection request from web client

io.on("connection", (socket) => {
  //tell the connecting client what player they are

  socket.on("chance", (abc) => {
    if (abc == "one") {
      socket.broadcast.emit("response", "one");
    } else if (abc == "two") {
      socket.broadcast.emit("response", "two");
    } else if (abc == "three") {
      socket.broadcast.emit("response", "three");
    } else if (abc == "four") {
      socket.broadcast.emit("response", "four");
    } else if (abc == "five") {
      socket.broadcast.emit("response", "five");
    } else if (abc == "six") {
      socket.broadcast.emit("response", "six");
    } else if (abc == "seven") {
      socket.broadcast.emit("response", "seven");
    } else if (abc == "eight") {
      socket.broadcast.emit("response", "eight");
    } else if (abc == "nine") {
      socket.broadcast.emit("response", "nine");
    }
  });
let playercounter 
  socket.on("clear", (signal) => {
    socket.broadcast.emit("clear", "clear");
  });
  console.log(`player has connected`);
});

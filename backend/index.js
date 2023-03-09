import express from 'express';
import { Server } from "socket.io";

const app = express();

app.get("/", ( req, res ) => {
  res.send("ádf")
})

const port = process.env.PORT || 3000;

const appServer = app.listen( port ,()=>{
  console.log('server is running at port number 3000')
});


const io = new Server(appServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

io.on("connection", (socket) => {
  socket.on('check', data => {
    socket.emit('sent-data', {message: "OK !"})
    console.log(data)
  })
});
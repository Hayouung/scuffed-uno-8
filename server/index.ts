import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

import setupSocket from "./socket";

const app = express();
const http = createServer(app);
const io = new Server(http, {
  cors: {
    origin:
      process.env.NODE_ENV === "production"
        ? "https://scuffed-uno-8.netlify.app"
        : "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", setupSocket);

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('hi');
})

http.listen(port, () => {
  console.log("Server listening on port " + port);
});

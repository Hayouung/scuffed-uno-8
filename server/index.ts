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
        ? [
            "https://62782faa115e1f1318b0fd96--scuffed-uno-8.netlify.app/",
          ]
        : "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", setupSocket);

app.get('/', (req, res) => res.send('hi'))

const port = 3000;

http.listen(port, () => {
  console.log("Server listening on port " + port);
});

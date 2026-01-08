const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

const app = express();
app.use(cors());
app.use(express.json());

const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" }
});

/* In-memory demo data */
let posts = [];

/* API: get timeline */
app.get("/posts", (req, res) => {
  res.json(posts);
});

/* API: create post */
app.post("/posts", (req, res) => {
  const post = {
    id: Date.now(),
    content: req.body.content
  };

  posts.unshift(post);
  io.emit("new-post", post);
  res.json(post);
});

/* Real-time */
io.on("connection", socket => {
  console.log("User connected");

  socket.on("chat", msg => {
    io.emit("chat", msg);
  });
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});

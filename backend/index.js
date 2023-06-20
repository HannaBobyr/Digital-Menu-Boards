import express from "express";
import jwt from "jsonwebtoken";

const app = express();
app.use(express.json());

app.post("/auth/login", (req, res) => {
  console.log(req.body);
  res.send("Welcome user");
});

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.listen(4444, (err) => {
  if (err) {
    console.log(err.message);
  }
  console.log("server listening on 4444");
});

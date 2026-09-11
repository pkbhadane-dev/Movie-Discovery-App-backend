import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Well-Come to Movie Find App");
});

const PORT = 4000;

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});

import dotenv from "dotenv";
dotenv.config();
import express from "express";
import moviesRouter from "./routes/movies.route.js";
import { connectDB } from "./src/db/connectDB.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Well-Come to Movie Find App");
});

console.log("step 1");

app.use("/api/v1/movies", moviesRouter);

const PORT = 4000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server is running on port", PORT);
    });
  })
  .catch((error) => {
    console.log(error.message);
  });

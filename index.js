import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import { connectDB } from "./src/db/connectDB.js";
import moviesRouter from "./src/routes/movies.route.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

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

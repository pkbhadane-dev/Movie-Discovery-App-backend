import express from "express";
import { getMovies } from "../controllers/movies.controller.js";

const moviesRouter = express.Router();
console.log("step 2");

moviesRouter.get("/getMovies", getMovies);

export default moviesRouter;

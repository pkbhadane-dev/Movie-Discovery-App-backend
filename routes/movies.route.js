import express from "express";
import {
  discoverMovie,
  getMovies,
  movieDetails,
  searchMovie,
} from "../controllers/movies.controller.js";

const moviesRouter = express.Router();
console.log("step 2");

moviesRouter.get("/getMovies", getMovies);
moviesRouter.get("/searchMovie", searchMovie);
moviesRouter.get("/discoverMovie", discoverMovie);
moviesRouter.get("/:movieDetail", movieDetails);

export default moviesRouter;

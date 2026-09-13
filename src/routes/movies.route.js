import express from "express";
import {
  discoverMovie,
  getMovies,
  movieDetails,
  searchMovie,
} from "../controllers/movies.controller.js";
import { addToWishlist, getWishlist, removeFromWishlist } from "../controllers/wishlist.controller.js";

const moviesRouter = express.Router();

moviesRouter.get("/getMovies", getMovies);
moviesRouter.get("/searchMovie", searchMovie);
moviesRouter.get("/discoverMovie", discoverMovie);
moviesRouter.get("/movieDetail", movieDetails);


moviesRouter.post("/addToWishlist", addToWishlist);
moviesRouter.get("/wishlist", getWishlist);
moviesRouter.delete("/wishlist/:id", removeFromWishlist);
export default moviesRouter;

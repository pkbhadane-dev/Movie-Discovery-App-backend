import { Wishlist } from "../models/wishlist.model.js";

export const addToWishlistService = async (movieData) => {
  const existingMovie = await Wishlist.findOne({ movieId: movieData.movieId });
  if (existingMovie) {
    throw new Error("Movie already in wishlist");
  }
  return await Wishlist.create(movieData);
};

export const getWishlistService = async () => {
  return await Wishlist.find().sort({ createdAt: -1 });
};

export const removeFromWishlistService = async (movieId) => {
  return await Wishlist.findOneAndDelete({ movieId });
};
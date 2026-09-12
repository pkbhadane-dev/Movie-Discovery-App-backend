import mongoose from "mongoose";

const wishlistSchema = new mongoose.Schema(
  {
    movieId: {
      type: Number,
      required: true,
      unique: true,
    },
    title: {
      type: String,
      required: true,
    },
    poster: {
      type: String,
    },
    rating: {
      type: Number,
    },
    releaseDate: {
      type: String,
    },
  },
  { timestamps: true },
);

export const Wishlist = mongoose.model("Wishlist", wishlistSchema);

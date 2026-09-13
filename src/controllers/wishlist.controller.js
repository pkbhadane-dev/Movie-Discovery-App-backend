import { addToWishlistService, getWishlistService, removeFromWishlistService } from "../src/services/wishlistService.js";

export const addToWishlist = async (req, res) => {
  try {
    const { movieId, title, poster, rating, releaseDate } = req.body;
    if (!movieId || !title) {
      return res
        .status(400)
        .json({ error: true, message: "MovieId and title are required" });
    }
    const response = await addToWishlistService({
      movieId,
      title,
      poster,
      rating,
      releaseDate,
    });

    return res.status(200).json({ success: true, data: response });
  } catch (error) {
    return res.status(400).json({ error: true, message: error.message });
  }
};

export const getWishlist = async (req, res) => {
  try {
    const response = await getWishlistService();
    res.status(200).json({ success: true, data: response });
  } catch (error) {
    res.status(500).json({ error: true, message: error.message });
  }
};


export const removeFromWishlist = async (req, res) => {
  try {
    const { id } = req.params; // movieId
    const result = await removeFromWishlistService(id);

    if (!result) {
      return res
        .status(404)
        .json({ error: true, message: "Movie not found in wishlist" });
    }

    res
      .status(200)
      .json({ success: true, message: "Movie removed from wishlist" });
  } catch (error) {
    res.status(500).json({ error: true, message: error.message });
  }
};

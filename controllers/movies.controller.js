import { getMoviesService } from "../services/movieService.js";

export const getMovies = async (req, res) => {
  try {
    console.log("step 3");

    const { page = 1 } = req.query;
    const response = await getMoviesService(page);

    console.log(response);
    if (response.error) {
      return res
        .status(response.status || 500)
        .json(response.data || response.message);
    }

    res.status(200).json(response.data);
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ error: true, message: error.message });
  }
};

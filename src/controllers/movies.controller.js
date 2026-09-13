import {
  discoverMovieService,
  getMoviesService,
  movieDetailService,
  searchMovieService,
} from "../src/services/movieService.js";

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

    res.status(200).json({ success: true, data: response });
  } catch (error) {
    // console.log(error);
    return res.status(500).json({ error: true, message: error.message });
  }
};

export const searchMovie = async (req, res) => {
  try {
    const { search, page = 1 } = req.query || req.body;

    if (!search) {
      throw new Error("search query is required");
    }

    const response = await searchMovieService(search, page);
    if (response.error) {
      return res
        .status(response.status || 500)
        .json(response.data || response.message);
    }

    console.log(response);

    res.status(200).json({ success: true, data: response });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: true, message: error.message });
  }
};

export const discoverMovie = async (req, res) => {
  try {
    const { genre, sortBy, page = 1 } = req.query;
    const response = await discoverMovieService({ genre, sortBy, page });
    if (response.error) {
      return res
        .status(response.status || 500)
        .json(response.data || response.message);
    }

    res.status(200).json({ success: true, data: response });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: true, message: error.message });
  }
};

export const movieDetails = async (req, res) => {
  try {
    const { movieId } = req.query;
    console.log(movieId);

    const response = await movieDetailService(movieId);
    if (response.error) {
      return res
        .status(response.status || 500)
        .json({ error: true, message: response.message });
    }
    res.status(200).json({ success: true, data: response });
  } catch (error) {
    return res.status(500).json({ error: true, message: error.message });
  }
};

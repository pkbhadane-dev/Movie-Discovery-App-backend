import { tmdbService } from "./tmdbService.js";

export const formatMovies = (movie) => {
  return {
    id: movie.id,
    title: movie.title,
    overview: movie.overview,
    poster: movie.poster_path,
    rating: movie.vote_average,
    releaseDate: movie.release_date,
  };
};

// for single object
export const formatMovieDetails = (movie) => {
  return {
    id: movie.id,
    title: movie.title,
    overview: movie.overview,
    poster: movie.poster_path,
    backdrop: movie.backdrop_path,
    rating: movie.vote_average,
    releaseDate: movie.release_date,
    genres: movie.genres ? movie.genres.map((g) => g.name) : [],
    runtime: movie.runtime,
    tagline: movie.tagline,
  };
};

export const getMoviesService = async (page = 1) => {
  const subUrl = `movie/popular?page=${page}`;
  const result = await tmdbService(subUrl);

  if (result.error) return result;

  const rawList = result.data?.results || [];
  return { movie: rawList.map(formatMovies) };
};

export const searchMovieService = async (search, page = 1) => {
  const subUrl = `search/movie?query=${encodeURIComponent(search)}&include_adult=false&page=${page}`;
  const result = await tmdbService(subUrl);

  if (result.error) return result;

  const rawList = result.data?.results || [];
  return { movie: rawList.map(formatMovies) };
};

export const discoverMovieService = async ({
  genre,
  sortBy = "popularity.desc",
  page = 1,
} = {}) => {
  const params = new URLSearchParams();
  if (genre) {
    params.append("with_genres", genre);
  }
  params.append("sort_by", sortBy);
  params.append("page", page);

  const subUrl = `discover/movie?${params.toString()}`;

  const result = await tmdbService(subUrl);

  if (result.error) return result;

  const rawList = result.data?.results || [];
  return { movie: rawList.map(formatMovies) };
};

export const movieDetailService = async (movieId) => {
  console.log("step 4");
  console.log("movieId", movieId);

  const subUrl = `movie/${movieId}`;
  const result = await tmdbService(subUrl);

  if (result.error) return result;

  return { movie: formatMovieDetails(result.data) };
};

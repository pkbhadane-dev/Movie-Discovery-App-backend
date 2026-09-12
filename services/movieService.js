import { tmdbService } from "./tmdbService.js";

export const getMoviesService = async (page = 1) => {
  console.log("getMoviesService");

  const subUrl = `discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`;

  return await tmdbService(subUrl);
};

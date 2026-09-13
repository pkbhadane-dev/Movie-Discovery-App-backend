import NodeCache from "node-cache";

// Cache items for 10 minutes (600 seconds)
const cache = new NodeCache({ stdTTL: 600 });

export const tmdbService = async (subUrl, option = {}) => {

  const cachedData = cache.get(subUrl);
  if (cachedData && (!option.method || option.method === "GET")) {
    console.log(`[Cache Hit]: ${subUrl}`);
    return { data: cachedData };
  }

  const url = `https://api.themoviedb.org/3/${subUrl}`;

  try {
    const response = await fetch(url, {
      method: option.method || "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`,
      },
    });

    const data = await response.json();
    console.log(response);

    if (!response.ok || data.success === false) {
      return { error: true, status: response.status, data };
    }

    // console.log("data", data);
    if (!option.method || option.method === "GET") {
      cache.set(subUrl, data);
    }

    return { data };
  } catch (error) {
    return { error: true, status: 500, message: error.message };
  }
};

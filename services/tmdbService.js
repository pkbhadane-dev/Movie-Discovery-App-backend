export const tmdbService = async (subUrl, option = {}) => {
  console.log(subUrl);

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

    return { data };
  } catch (error) {
    return { error: true, status: 500, message: error.message };
  }
};

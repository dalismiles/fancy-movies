const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "?api_key=e056c136a3e75108a0bb171f87107e9a";

const GET = async (type, movieID) => {
  const res = await fetch(BASE_URL + type + "/" + movieID + API_KEY);
  return await res.json();
};

export { GET };

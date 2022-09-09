const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "?api_key=e056c136a3e75108a0bb171f87107e9a";

const GET = async (type, specific, ext = "") => {
  const res = await fetch(BASE_URL + type + "/" + specific + API_KEY + ext);
  return await res.json();
};

export { GET };

// const GET = async( type, query ,page ) => {
//   const res = await fetch(BASE_URL+type+'/'+API_KEY+'&with_genres=16&with_origin_country=JP'+query+'&page='+page);
//   return await res.json();
// }

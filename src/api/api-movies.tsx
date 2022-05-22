import Axios from "axios";

const instance = Axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    api_key: `Bearer ${process.env.REACT_APP_KEY}`,
  },
});

export const ApiMovies = {
  Authentication: {
    token_new: () =>
      instance({
        method: "GET",
        url: "authentication/token/new",
        params: {
          api_key: process.env.REACT_APP_KEY,
        },
      }),
    guest_session: () =>
      instance({
        method: "GET",
        url: "authentication/guest_session/new",
        params: {
          api_key: process.env.REACT_APP_KEY,
        },
      }),
  },
  Search: {
    MoviesByName: (query: string) =>
      instance({
        method: "GET",
        url: `search/movie`,
        params: {
          api_key: process.env.REACT_APP_KEY,
          query,
        },
      }),
  },
};

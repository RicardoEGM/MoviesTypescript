import Axios from "axios";

const instance = Axios.create({
  baseURL: "https://reqres.in/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const ApiLogin = {
  Login: {
    GetUserByID: (email: string, password: string) =>
      instance({
        method: "POST",
        url: `login`,
        data: {
          email,
          password,
        },
      }),
  },
};

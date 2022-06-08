import { createContext, useState } from "react";
import { User } from "../models/interface/User";

type typeAction = { type: string; payload: any };

const contextDefaultValues: User = localStorage.getItem("user")
  ? (JSON.parse(localStorage.getItem("user") || "") as User)
  : { id: "", email: "", password: "", token: "" };

let Context = createContext<User>(contextDefaultValues);

const ContextProvider = Context.Provider;
const ContextConsumer = Context.Consumer;

const ServicesGlobal = (user: User) => {
  Context = createContext<User>(user);

};
export { Context, ContextConsumer, ContextProvider, ServicesGlobal };

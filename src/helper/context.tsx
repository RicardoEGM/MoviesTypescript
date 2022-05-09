import { createContext, useState } from "react";
import { User } from "../models/interface/User";

type typeAction = { type: string; payload: any };

const contextDefaultValues: User = localStorage.getItem("user")
  ? (JSON.parse(localStorage.getItem("user") || "") as User)
  : { id: "", email: "", password: "", token: "" };

const Context = createContext<User>(contextDefaultValues);

const ContextProvider = Context.Provider;
const ContextConsumer = Context.Consumer;

const ServicesGlobal = () => {
  const [Services, setServices] = useState({ user: {} as User });
  const actions = (action: typeAction) => {
    const { type, payload } = action;
    switch (type) {
      case "setState":
        return setServices(payload);
      default:
        return Services;
    }
  };

  return { Services, actions };
};
export { Context, ContextConsumer, ContextProvider, ServicesGlobal };

import React from "react";
import { User } from "./User";

interface ContextProps {
    user: User;
    updateUser: (user: User) => void;
  }


  const user: User = localStorage.getItem("user")
    ? (JSON.parse(localStorage.getItem("user") || "") as User)
    : { id: "", email: "", password: "", token: "" };

  export const ContextUser = React.createContext<ContextProps>({user ,updateUser: () => {}} as ContextProps);

 
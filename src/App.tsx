import Router from "./router/router";
import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import { User } from "./models/interface/User";
import { useState, useCallback } from "react";
import { ContextUser } from "./models/interface/ContextUser";


function App() {

  const contextDefaultValues: User = localStorage.getItem("user")
    ? (JSON.parse(localStorage.getItem("user") || "") as User)
    : { id: "", email: "", password: "", token: "" };

  const [user, setUser] = useState<User>(contextDefaultValues);
  const updateUser = useCallback((user: User) => setUser(user), [user]);


  return (
    <ContextUser.Provider value={{user , updateUser}}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <SnackbarProvider maxSnack={2}>
          <Router />
        </SnackbarProvider>
      </BrowserRouter>
    </ContextUser.Provider>
  );
}

export default App;

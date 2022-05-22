import Router from "./router/router";
import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import { Context } from "./helper/context";
import { User } from "./models/interface/User";

const contextDefaultValues: User = localStorage.getItem("user")
  ? (JSON.parse(localStorage.getItem("user") || "") as User)
  : { id: "", email: "", password: "", token: "" };


function App() {
  return (
    <Context.Provider value={contextDefaultValues}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <SnackbarProvider maxSnack={3}>
          <Router />
        </SnackbarProvider>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;

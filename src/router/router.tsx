import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { ContextUser } from "../models/interface/ContextUser";
//Views
import Login from "../components/views/login";
import Movies from "../components/views/movies/movies";
import AppBarApplication from "../components/Organisms/appbar";

export default function RenderPages() {
  const context = useContext(ContextUser);

  return (
    <>
      <Routes>
        {context.user.token.length > 0 ? (
          <Route path="/" element={<AppBarApplication />}>
            <Route index element={<Movies />} />
          </Route>
        ) : (
          <Route index element={<Login />} />
        )}

      </Routes>
    </>
  );
}

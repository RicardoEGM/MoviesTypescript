import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../helper/context";
//Views
import Login from "../components/views/login";
import Movies from "../components/views/movies/movies";
import AppBarApplication from "../components/Organisms/appbar";

export default function RenderPages() {
  const context = useContext(Context);

  return (
    <>
      <Routes>
        {context.token.length > 0 ? (
          <Route index element={<Login />} />
        ) : (
          <Route path="/" element={<AppBarApplication />}>
            <Route index element={<Movies />} />
          </Route>
        )}
        {/* <Route path="*" element={<NoMatch />} /> */}
      </Routes>
    </>
  );
}

/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable no-labels */
import { forwardRef, Ref, useImperativeHandle } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import { ApiMovies } from "../../api/api-movies";
import { Movies } from "../../models/interface/Movies";
import { RefObject } from "../../models/interface/RefObject/RefObject";

// interface UserProps {
//   searchFunction: Function;
// }

//TODO: Changes type of any
export const Search = forwardRef((props: {searchFunction: () => void}, ref: Ref<RefObject> ) => {
  const [state, setState] = React.useState<string>("");
  const { searchFunction } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState(event.target.value);
  };

  useImperativeHandle(ref, () => ({SearchHandle}));


  const SearchHandle = async(): Promise<Movies[]> => {
    const { data } = await ApiMovies.Search.MoviesByName(state);
    const convert = data as Movies[];
    return convert;
  }

  const handleSubmit = () => {
    searchFunction();
  };

  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: "100%",
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Movies"
        inputProps={{ "aria-label": "search movies" }}
        name="search"
        value={state}
        onChange={handleChange}
      />
      <IconButton
        type="button"
        sx={{ p: "10px" }}
        aria-label="search"
        onClick={() => handleSubmit()}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
});

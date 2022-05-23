import { useRef, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import { Search } from "../../molecules/search";
import { CardMovies } from "../../molecules/cardMovies/cardMovies";
import {
  RefDetailMovies,
  RefObject,
} from "../../../models/interface/RefObject/RefObject";
import { Movies } from "../../../models/interface/Movies";
import DetailsMovies from "../../molecules/detailMovies";

export default function RecipeReviewCard() {
  const SearchRef = useRef<RefObject>(null);
  const DetailMoviesRef = useRef<RefDetailMovies>(null);
  const [state, setState] = useState<Movies[]>([]);
  const [select, setSelect] = useState<Movies>();


  const SearchMovies = () => {
    SearchRef.current
      ?.SearchHandle()
      .then((data: Movies[]) => {
        setState(data);
      })
      .catch((err: any) => {
        console.log(err);
      });
  };

  const Select = () => {
    setSelect(DetailMoviesRef.current?.SelectedMovie());
  }

  return (
    <>
      <Box sx={{ mb: 2 }}>
        <Search ref={SearchRef} searchFunction={SearchMovies} />
      </Box>
      <Box sx={{ mt: 2 }}>
        <Grid container spacing={2} columns={16}>
          {state.length > 0 ? (
            state.map((data: Movies) => (
              <Grid item xs={3}>
                <CardMovies data={data} ref={DetailMoviesRef} select={Select} />
              </Grid>
            ))
          ) : (
            <></>
          )}
        </Grid>
        {select != null ? (<DetailsMovies data={select}/>): <></>} 
      </Box>
    </>
  );
}

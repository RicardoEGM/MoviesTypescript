import { useRef, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import { Search } from "../../molecules/search";
import CardMovies from "../../molecules/cardMovies";
import { RefObject } from "../../../models/interface/RefObject/RefObject";
import { Movies } from "../../../models/interface/Movies";

export default function RecipeReviewCard() {
  const SearchRef = useRef<RefObject>(null);
  const [state, setState] = useState<Movies[]>([]);

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

  return (
    <>
      <Box sx={{ mb: 2 }}>
        <Search ref={SearchRef} searchFunction={SearchMovies} />
      </Box>
      <Box sx={{ mt: 2 }}>
        <Grid container spacing={2} columns={16}>
          {state.map((data: Movies) => (
            <Grid item xs={4}>
              <CardMovies data={data} />;
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}

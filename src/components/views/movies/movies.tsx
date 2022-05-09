import { useRef } from "react";
import Box from "@mui/material/Box";

import { Search } from "../../molecules/search";
import { RefObject } from "../../../models/interface/RefObject/RefObject";
import { Movies } from "../../../models/interface/Movies";

export default function RecipeReviewCard() {
  const SearchRef = useRef<RefObject>(null);

  const SearchMovies = () => {
    SearchRef.current
      ?.SearchHandle()
      .then((data: Movies[]) => {
        console.log(data);
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
    </>
  );
}

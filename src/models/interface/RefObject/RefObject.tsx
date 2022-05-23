import { Movies } from "../Movies";

export interface RefObject {
  SearchHandle: () => Promise<Movies[]>;
}
export interface RefDetailMovies {
  SelectedMovie: () => Movies;
}

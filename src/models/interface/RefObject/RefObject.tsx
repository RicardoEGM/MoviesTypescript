import { Movies } from "../Movies";

export interface RefObject {
  SearchHandle: () => Promise<Movies[]>;
}

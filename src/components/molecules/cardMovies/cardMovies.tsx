import { forwardRef, Ref, useImperativeHandle, useState } from "react";
import { makeStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Rating from "@mui/material/Rating";
import { Movies } from "../../../models/interface/Movies";
import Not_found from "../../../assets/image/not_found.svg";
import { RefDetailMovies } from "../../../models/interface/RefObject/RefObject";

const useStyles = makeStyles({
  Content: {
    position: "relative",
    backgroundColor: "white",
    marginTop: "-25px",
    borderRadius: "5px",
    boxShadow:
      "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
  },
  Header: {
    backgroundColor: "#212121",
  },
  Image: { width: "250px", padding: "10px", borderRadius: "25px" },
  Favorite: { display: "flex", float: "right", marginTop: "-10px" },
});

export const CardMovies = forwardRef(
  (props: { data: Movies, select:  () => void }, ref: Ref<RefDetailMovies>) => {
    const { data, select } = props;
    const [state] = useState<Movies>(data);
    const [hover, setHover] = useState<number>(3);

    const classes = useStyles();

    const onMouseOver = () => setHover(10);

    const onMouseOut = () => setHover(3);

    useImperativeHandle(ref, () => ({ SelectedMovie }));

    const SelectedMovie = (): Movies => {
      return state;
    };




    //TODO: Changes to style
    return (
      <>
        <Card
          className={classes.Header}
          onMouseOver={() => onMouseOver()}
          onMouseOut={() => onMouseOut()}
          sx={{ boxShadow: hover }}
          onClick={() => select()}
        >
          <CardMedia
            component="img"
            image={`https://image.tmdb.org/t/p/w300/${state.poster_path}`}
            onError={(event: any) => (event.target.src = Not_found)}
            alt={state.title}
            className={classes.Image}
          />
          <CardContent className={classes.Content}>
            <Typography variant="subtitle2">
              {state.title}
              <IconButton
                aria-label="add to favorites"
                className={classes.Favorite}
              >
                <FavoriteIcon />
              </IconButton>
            </Typography>
            <Typography>
              <Rating
                name="read-only"
                value={state.vote_average / 2}
                precision={0.5}
                max={5}
                readOnly
              />
            </Typography>
            <Typography component="legend">{state.release_date}</Typography>
            <Typography variant="body2" color="text.secondary">
              {state.overview.substr(0, 135) + "..."}
            </Typography>
          </CardContent>
        </Card>
      </>
    );
  }
);

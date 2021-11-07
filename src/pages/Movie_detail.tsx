import React, { FunctionComponent, useState, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import { getMovie } from "../api/movie_api";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

type Params = {
  id: string;
};

export interface Movie {
  id: number;
  title: string;
  director: string;
  isFavorite: boolean;
}

const MovieDetails = ({ match }: RouteComponentProps<Params>) => {
  const [movie, setMovie] = useState<Movie | null>(null);

  console.log(movie);
  useEffect(() => {
    //console.log(match.params.id);

    getMovie(+match.params.id).then((moviee) => setMovie(moviee));
  }, []);
  console.log(movie);
  return (
    <React.Fragment>
      <CardContent>
        <h1>Détail de Film</h1>

        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          <h2>Titre Film : {movie?.title} </h2>
        </Typography>
        <Typography variant="h5" component="div">
          Directeur de Film : {movie?.director}
        </Typography>
      </CardContent>
    </React.Fragment>
  );
};
export default MovieDetails;

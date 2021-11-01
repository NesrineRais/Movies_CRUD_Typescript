import React, { FunctionComponent, useState, useEffect } from "react";
import { RouteComponentProps, Link } from "react-router-dom";
import { getMovie } from "../api/movie_api";
type Params = {
  id: string;
};

export interface Movie {
  id: number;
  title: string;
  director: string;
  isFavorite: boolean;
  prevState: null;
}

const Detail = ({ match }: RouteComponentProps<Params>) => {
  const [movie, setMovie] = useState<Movie | null>(null);

  console.log(movie);
  useEffect(() => {
    //console.log(match.params.id);

    getMovie(+match.params.id).then((moviee) => setMovie(moviee));
  }, []);
  console.log(movie);
  return (
    <>
      <h1>Films</h1>
      <span>{movie?.title}</span>
      <br></br>
      <span>{movie?.director}</span>
      <br></br>
      <span>{movie?.isFavorite}</span>
    </>
  );
};
export default Detail;

import React, { FunctionComponent, useState, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import { getMovie, addMovie } from "../api/movie_api";

import MovieAdd from "./Movie_Add";
export interface Movie {
  id?: number;
  title: string;
  director: string;
  isFavorite: boolean;
  releaseDate: string;
}
type Params = {
  id: string;
};
const MovieAd = ({ match }: RouteComponentProps<Params>) => {
  useEffect(() => {
    //console.log(match.params.id);
  }, []);
  return (
    <div>
      <div>
        <h1 className="center">Add</h1>
        <MovieAdd />
      </div>
    </div>
  );
};
export default MovieAd;

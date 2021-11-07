import React, { useEffect, useState } from "react";
import { getMovies } from "../api/movie_api";
const MovieFavouris = () => {
  const [movies, setMovies] = useState<any[]>([]);
  useEffect(() => {
    getMovies().then((res) => setMovies(res));
    console.log(movies);
  }, []);
  return (
    <>
      <h1>Les films Favoris</h1>
      {movies &&
        movies.map((movie) => {
          if (movie.isFavorite) {
            return (
              <div>
                le nom de films est : <b>{movie.title}</b>
              </div>
            );
          }
        })}
    </>
  );
};
export default MovieFavouris;

/* eslint-disable no-restricted-globals */
import React, { FunctionComponent, useState, useEffect } from "react";
import { Link, Redirect, useHistory, useLocation } from "react-router-dom";

import { getMovies, deleteMovie } from "../api/movie_api";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
// eslint-disable-next-line react-hooks/rules-of-hooks

const MoviesList = () => {
  const [movies, setMovies] = useState<any[]>([]);
  useEffect(() => {
    //methode static
    getMovies().then((movies) => setMovies(movies));
  }, []);
  const heandledetail = (id: string) => {
    console.log(id);
    window.open(`/${id}`);
  };
  const handleSupprime = (id: number) => {
    deleteMovie(id).then((movie) => getMovies());
  };
  console.log(movies);
  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      {/* End hero unit */}
      <Grid container sx={{ display: "flex", flexWrap: "nowrap" }}>
        {movies != null &&
          movies.map((movie, key) => {
            return (
              <Grid item key={key} xs={12} sm={6} sx={{ border: 1 }}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {movie?.title}
                  </Typography>
                </CardContent>
                <CardActions sx={{ mx: "auto", width: 200 }}>
                  <Button size="small" onClick={() => heandledetail(movie.id)}>
                    Detail
                  </Button>

                  <Button size="small" onClick={() => handleSupprime(movie.id)}>
                    Supprime
                  </Button>
                </CardActions>
              </Grid>
            );
          })}
      </Grid>
    </Container>
  );
};
export default MoviesList;

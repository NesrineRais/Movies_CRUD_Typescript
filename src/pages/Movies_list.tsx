/* eslint-disable no-restricted-globals */
import React, { FunctionComponent, useState, useEffect } from "react";
import { Link, Redirect, useHistory, useLocation } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";

import {
  getMovies,
  deleteMovie,
  updateMovie,
  getMovie,
} from "../api/movie_api";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import EditIcon from "@mui/icons-material/Edit";
import MovieAdd from "./Movie_Add";
import moment from "moment";

// eslint-disable-next-line react-hooks/rules-of-hooks

const MoviesList = () => {
  const [movies, setMovies] = useState<any[]>([]);
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [director, setDirector] = useState("");
  const [releaseDate, setDate] = useState("");

  const history = useHistory();

  useEffect(() => {
    //methode static
    getMovies().then((movies) => setMovies(movies));
  }, []);
  const heandledetail = (id: string) => {
    history.push(`/${id}`);
  };
  const handleSupprime = (id: number) => {
    deleteMovie(id).then((movie) => {
      getMovies().then((movies) => setMovies(movies));
    });
  };
  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      {/* End hero unit */}
      <Grid container>
        {movies != null &&
          movies.map((movie, key) => {
            return (
              <Grid item key={key} spacing={3}>
                <Box sx={{ border: 1, m: 2 }}>
                  <Link to={"/edit/" + movie?.id}>
                    <EditIcon />
                  </Link>

                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {movie?.title}
                    </Typography>
                    <Checkbox
                      defaultChecked={movie.isFavorite}
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite />}
                      onChange={(e) => {
                        console.log(movie.id);
                        getMovie(+movie.id).then((res) => {
                          console.log(res);

                          let data = {
                            director: res.director,
                            title: movie.title,
                            isFavorite: e.target.checked,
                            releaseDate: moment(res.releaseDate).format(
                              "DD/MM/YYYY"
                            ),
                          };
                          console.log(data);
                          updateMovie(+movie.id, data).then((res) =>
                            console.log(res)
                          );
                        });
                      }}
                    />
                  </CardContent>
                  <CardActions sx={{ mx: "auto", width: 200 }}>
                    <Button
                      size="small"
                      onClick={() => heandledetail(movie.id)}
                    >
                      Detail
                    </Button>

                    <Button
                      size="small"
                      onClick={() => handleSupprime(movie.id)}
                    >
                      Supprime
                    </Button>
                  </CardActions>
                </Box>
              </Grid>
            );
          })}
      </Grid>
    </Container>
  );
};
export default MoviesList;

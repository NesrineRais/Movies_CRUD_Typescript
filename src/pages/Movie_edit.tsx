import React, {
  FunctionComponent,
  useState,
  useEffect,
  ChangeEvent,
} from "react";
import { Link, Redirect, useHistory, useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { ToggleButton, Button } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { addMovie, getMovie, updateMovie } from "../api/movie_api";
import { Checkbox } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import moment from "moment";

import { useParams } from "react-router-dom";

type Params = {
  id: string;
};
export interface Movie {
  id?: number;
  title: string;
  director: string;
  isFavorite: boolean;
  releaseDate: string;
}

const MovieEdit = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [director, setDirector] = useState("");
  const [title, setTitle] = useState("");
  const [isFavorite, setFavorite] = useState(false);
  const [releaseDate, setDate] = useState("");
  const history = useHistory();
  useEffect(() => {
    getMovie(+id).then((res) => {
      setMovie(res);
      setTitle(res.title);
      setDirector(res.director);
      setFavorite(res.isFavorite);
      setDate(res.releaseDate);
    });
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = {
      director: director,
      title: title,
      isFavorite: isFavorite,
      releaseDate: moment(releaseDate).format("DD/MM/YYYY"),
    };
    console.log(form);
    updateMovie(+id, form).then((res) => history.push(`/`));
  };

  return (
    <div>
      <h1>Edit</h1>
      {movie != null && (
        <Box
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
        >
          <form onSubmit={(e) => handleSubmit(e)}>
            <div>
              <TextField
                defaultValue={movie.director}
                rows={4}
                required
                label="director"
                id="name"
                name="director"
                onChange={(e) => setDirector(e.target.value)}
                //value={director}
                //onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              <TextField
                rows={4}
                required
                defaultValue={movie.title}
                label="title"
                name="title"
                id="outlined-size-normal"
                //value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div>
              <TextField
                defaultValue={movie.releaseDate}
                rows={4}
                //value={releaseDate}
                required
                type="date"
                name="releaseDate"
                id="outlined-size-normal"
                onChange={(e) => setDate(e.target.value)}
                //onChange={(e) => handleChange()}
              />
            </div>
            <div>
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked={movie.isFavorite}
                    onChange={(e) => {
                      console.log(e.target.checked, "0");
                      setFavorite(e.target.checked);
                    }}
                  />
                }
                label="Favoris"
              />
            </div>
            <div>
              <Button variant="contained" type="submit">
                Ok
              </Button>
            </div>
          </form>
        </Box>
      )}
    </div>
  );
};
export default MovieEdit;

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
import { getMovies, addMovie, getMovie } from "../api/movie_api";
import { Checkbox } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";

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
  const [checked, setChecked] = useState(false);

  console.log(id);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {};

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {};
  return (
    <div>
      <h1>Edit</h1>
      <Box
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
      >
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <TextField
              rows={4}
              required
              label="director"
              id="name"
              name="director"
              //value={director}
              //onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <TextField
              rows={4}
              required
              label="title"
              name="title"
              id="outlined-size-normal"
              //value={title}
              defaultValue="title"
              // onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <TextField
              rows={4}
              //value={releaseDate}
              required
              type="date"
              name="releaseDate"
              id="outlined-size-normal"
              //onChange={(e) => handleChange()}
            />
          </div>
          <div>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  onChange={(e) => {
                    console.log(e.target.checked, "0");
                    handleChange(e);
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
    </div>
  );
};
export default MovieEdit;

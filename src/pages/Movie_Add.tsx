import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { ToggleButton, Button } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { addMovie } from "../api/movie_api";
import moment from "moment";
import { useHistory } from "react-router-dom";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Checkbox } from "@mui/material";

type Field = {
  value?: any;
  error?: string;
  isValid?: boolean;
};

//declare le formulaire avec les champs qui existe

type Form = {
  director: string;
  title: string;
  isFavorite: boolean;
  releaseDate: string;
};
const MovieAdd = () => {
  const [selectedDate, handleDateChange] = useState(new Date());
  const [checked, setChecked] = useState(false);
  const [director, setDirector] = useState("");
  const [title, setTitle] = useState("");
  const [isFavorite, setFavorite] = useState(false);
  const [releaseDate, setDate] = useState(String);

  const history = useHistory();

  const handleChange = (
    e: React.ChangeEvent<{ value: string; name: string }>
  ) => {
    e.preventDefault();
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = {
      director: director,
      title: title,
      isFavorite: isFavorite,
      releaseDate: moment(releaseDate).format("DD/MM/YYYY"),
    };

    addMovie(form).then((res) => {
      console.log("movie", res);
      history.push(`/`);
    });
  };

  return (
    <div>
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
              defaultValue={director}
              onChange={(e) => setDirector(e.target.value)}
            />
          </div>
          <div>
            <TextField
              label="title"
              name="title"
              id="outlined-size-normal"
              defaultValue={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <TextField
              type="date"
              name="releaseDate"
              id="outlined-size-normal"
              onChange={(e) => setDate(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
          <div>
            <FormControlLabel
              control={
                <Checkbox
                  checked={isFavorite}
                  onChange={(e) => {
                    console.log(e.target.checked, "0");
                    // handleChange(e);
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
    </div>
  );
};
export default MovieAdd;

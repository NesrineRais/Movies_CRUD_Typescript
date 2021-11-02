import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { ToggleButton, Button } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { addMovie } from "../api/movie_api";
import moment from "moment";
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
  const [selected, setSelected] = useState(false);
  const [director, setDirector] = useState("");
  const [title, setTitle] = useState("");
  const [isFavorite, setFavorite] = useState(true);
  const [releaseDate, setDate] = useState(
    moment(new Date()).format("DD/MM/YYYY")
  );

  const [form, setForm] = useState<Form>({
    director: director,
    title: title,
    isFavorite: isFavorite,
    releaseDate: moment(releaseDate).format("DD/MM/YYYY"),
  });
  console.log(form);
  useEffect(() => {
    //console.log(match.params.id);
  }, []);
  const handleChange = (
    e: React.ChangeEvent<{ value: string; name: string }>
  ) => {
    e.preventDefault();
    //title: setTitle(e.target.value),
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    const newField = {
      director: e.target.value,
      title: e.target.value,
      releaseDate: moment(e.target.value).format("DD/MM/YYYY"),
    };
    setForm({ ...form, ...newField });
    //console.log(form);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);

    addMovie(form).then((res) => {
      console.log("movie", res);
    });
  };

  return (
    <div>
      <h1>Page Add</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <TextField
            label="director"
            id="name"
            name="director"
            defaultValue="director"
            onChange={(e) => handleChange(e)}
          />
          <TextField
            label="title"
            name="title"
            id="outlined-size-normal"
            defaultValue="title"
            onChange={(e) => handleChange(e)}
          />
          <TextField
            type="date"
            name="releaseDate"
            id="outlined-size-normal"
            onChange={(e) => handleChange(e)}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <ToggleButton
            value="check"
            name="isFavorite"
            selected={selected}
            onChange={() => {
              setSelected(!selected);
            }}
          >
            {selected ? <Favorite /> : <FavoriteBorder />}
          </ToggleButton>
        </div>
        <div>
          <Button variant="contained" type="submit">
            Ok
          </Button>
        </div>
      </form>
    </div>
  );
};
export default MovieAdd;

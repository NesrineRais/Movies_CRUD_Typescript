import axios from "axios";

const url = "http://127.0.0.1:8000/api/movie/";

export const getMovies = () => {
  //Promise type table de donné
  return axios
    .get(url)
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch((error) => console.log(error));
};
export const getMovie = (id: number) => {
  return axios
    .get(url + id)
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch((error) => console.log(error));
};
export const addMovie = () => {
  return axios
    .post(url)
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch((error) => console.log(error));
};
export const deleteMovie = (id: number) => {
  return axios
    .delete(url + id)
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch((error) => console.log(error));
};
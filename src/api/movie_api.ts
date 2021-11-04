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
      return response.data;
    })
    .catch((error) => console.log(error));
};

export const addMovie = (data: any) => {
  return axios
    .post(url, data)
    .then((response) => {
      console.log("response", response.data);
      return response.data;
    })
    .catch((error) => console.log(error));
};

export const updateMovie = (id: number, data: any) => {
  console.log("response", data, id);
  return axios
    .put(url + id, data)
    .then((response) => {
      console.log("response", response.data);
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

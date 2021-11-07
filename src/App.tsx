import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header";
import MoviesList from "./pages/Movies_list";
import MovieAdd from "./pages/Movie_Add";
import MovieDetails from "./pages/Movie_detail";
import MovieEdit from "./pages/Movie_edit";
import MovieFavouris from "./pages/Movie_Favoris";
function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={MoviesList} />
        <Route exact path="/add" component={MovieAdd} />
        <Route exact path="/favoris" component={MovieFavouris} />
        <Route exact path="/:id" component={MovieDetails} />
        <Route exact path="/edit/:id" component={MovieEdit} />
      </Switch>
    </div>
  );
}

export default App;

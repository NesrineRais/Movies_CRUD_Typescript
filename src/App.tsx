import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header";
import MoviesList from "./pages/Movies_list";
import MovieAd from "./pages/Movie_ad";
import MovieDetails from "./pages/Movie_detail";
import MovieEdit from "./pages/Movie_edit";
function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={MoviesList} />
        <Route exact path="/add" component={MovieAd} />
        <Route exact path="/:id" component={MovieDetails} />
        <Route exact path="/edit/:id" component={MovieEdit} />
      </Switch>
    </div>
  );
}

export default App;

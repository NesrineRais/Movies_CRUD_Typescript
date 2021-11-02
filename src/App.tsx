import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header";
import MoviesList from "./pages/Movies_list";
import MovieAdd from "./pages/Movie_Add";
import MovieDetails from "./pages/Movie_detail";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={MoviesList} />
        <Route exact path="/add" component={MovieAdd} />
        <Route exact path="/:id" component={MovieDetails} />
      </Switch>
    </div>
  );
}

export default App;

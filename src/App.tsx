import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header";
import Movies from "./pages/Movies_list";
import Detail from "./pages/Movie_detail";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Movies} />
        <Route exact path="/:id" component={Detail} />
      </Switch>
    </div>
  );
}

export default App;

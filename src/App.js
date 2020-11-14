import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import { getMatches } from "./api/Api";
import "./App.css";

const App = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    getMatches()
      .then((data) => {
        setMatches(data.matches)
        console.log(data.matches)
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <Router>
      <div className="App">
        <Navbar />
          <h1 className="container">
            Latest updates
          </h1>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <Home {...props} matches={matches} />}
          />
          <Route exact path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

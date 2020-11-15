import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";

import { getMatches } from "./api/Api";
import "./App.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "35ch",
    },
  }
}));

const App = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getMatches()
      .then((data) => {
        setMatches(data.matches);
        console.log(data.matches);
        setLoading(false)
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <Home {...props} matches={matches} loading={loading} />
            )}
          />
          <Route exact path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

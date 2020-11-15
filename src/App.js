import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";

import { getMatches } from "./api/Api";
import "./App.css";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '35ch',
    },
  },
  textField:{
    width: "300px",
    marginLeft: "-1px"
  }
}));

const App = () => {
  const classes = useStyles();
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
        <div className="container search">
          <h1>
            Latest updates
          </h1>
          <form className={classes.root} noValidate>
            <TextField id="outlined-basic" label="Search" variant="outlined" placeholder="Search..." className={classes.textField}/>
          </form>
        </div>
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

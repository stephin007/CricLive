import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";

import { getMatches } from "./api/Api";
import "./App.css";
// 8376008302

const App = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [matchesPerPage, setMatchesPerPage] = useState(30);

  // Get Current POsts
  const indexOfLastMatch = currentPage * matchesPerPage;
  const indexOfFirstMatch = indexOfLastMatch - matchesPerPage;
  const currentMatches = matches.slice(indexOfFirstMatch, indexOfLastMatch);

  // Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

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
              <Home
                {...props}
                matches={currentMatches}
                loading={loading}
                matchesPerPage={matchesPerPage}
                totalMatches={matches.length}
                paginate = {paginate}
              />
            )}
          />
          <Route exact path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

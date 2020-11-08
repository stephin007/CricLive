import React, {useEffect} from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar"
import About from "./components/About"
import Home from "./components/Home"
import {getMatches} from "./api/Api"
import "./App.css"

const App = () => {
  // useEffect(()=>{
  //   getMatches()
  //   .then((data) => console.log("DATA: ",data))
  //   .catch(error=> console.log(error))
  // },[])
  return (
    <Router>
      <div className="App">
          <Navbar/>
          <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
            </Switch>
          
          {/* <MyCard/> */}
      </div>
    </Router>
  );
}

export default App;

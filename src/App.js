import React from "react"
import Navbar from "./components/Navbar"
import MyCard from "./components/MyCard"

import "./App.css"

const App = (props) => {
  return (
    <div className="App">
        <Navbar/>
        <h1>Latest Updates</h1>
        <MyCard></MyCard>
    </div>
  );
}

export default App;

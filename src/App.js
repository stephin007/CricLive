import React, {useEffect} from "react"
import Navbar from "./components/Navbar"
import MyCard from "./components/MyCard"
import {getMatches} from "./api/Api"
import "./App.css"

const App = () => {
  useEffect(()=>{
    getMatches()
    .then((data) => console.log("DATA: ",data))
    .catch()
  },[])
  return (
    <div className="App">
        <Navbar/>
        <h1>Latest Updates</h1>
        <MyCard/>
       
    </div>
  );
}

export default App;

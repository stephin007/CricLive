import React from 'react'
import MyCard from "./MyCard"

const Home = ({matches}) => {
    return (
        <div className="container">
            {
              matches.map((match) =>(
                  <MyCard key={match.unique_id} match={match}/>
              ))  
            }
        </div>
    )
}

export default Home

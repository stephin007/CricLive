import React from 'react'
import MyCard from "./MyCard"

const Home = ({filteredMatches}) => {
    return (
        <div className="container">
            {
              filteredMatches.map((match) =>(
                  <MyCard key={match.unique_id} match={match}/>
              ))  
            }
        </div>
    )
}

export default Home

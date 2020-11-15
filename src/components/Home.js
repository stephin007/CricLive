import React, { Fragment } from 'react'
import MyCard from "./MyCard"

import Spinner from "../img/spinner.gif"

const Home = ({filteredMatches, loading}) => {
    return (
        <Fragment>
        {
            loading === false ? (
                <div className="container">
                    {
                        filteredMatches.map((match) =>(
                            <MyCard key={match.unique_id} match={match}/>
                        ))  
                    }
                </div>
            ) : (
                <img src={Spinner} alt="Loading..." style={{display: "flex", justifyContent: "center", alignItems: "center", marginLeft:"550px", marginTop:"200px"}} />
            )     
        }
        </Fragment>
    )
}

export default Home

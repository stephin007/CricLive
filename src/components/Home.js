import React, { Fragment } from 'react'
import MyCard from "./MyCard"

import Spinner from "../img/spinner.gif"

const Home = ({filteredMatches, loading}) => {
    // if (filteredMatches.length === 0) {
    //     return <h3 style={{textAlign : "center"}}>Please Add a Contact</h3>
    // }

    return (
        <Fragment>
        {
            loading === false ? (
                <div className="container">
                    {
                        filteredMatches.length !== 0 ? (
                            filteredMatches.map((match) =>(
                                <MyCard key={match.unique_id} match={match}/>
                            ))
                        ) : 
                        (
                            <h3 style={{textAlign : "center", color: "grey"}}>No Matches Found, Try searching Twenty20</h3>
                        )
                    }    

                </div>
            ) : (
                <img src={Spinner} alt="Loading..." style={{position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}} />
            )     
        }
        </Fragment>
    )
}

export default Home

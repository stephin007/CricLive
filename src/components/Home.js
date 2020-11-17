import React, { Fragment, useState } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MyCard from "./MyCard"
import Pagination from "./Pagination"

import Spinner from "../img/spinner.gif"
const useStyles = makeStyles((theme) => ({
    root: {
        "& > *": {
          margin: theme.spacing(1),
          width: "35ch",
        },
      }
  }));

const Home = ({matches, loading, matchesPerPage,totalMatches, paginate}) => {
    const classes = useStyles();
    const [search, setSearch] = useState("");

    const filteredMatches = matches.filter((match) => {
        return match.type.toLowerCase().includes(search.toLowerCase());
      });
    

    return (
        <Fragment>
        <div className="container search">
          <h1>Latest <span style={{color: "#961900"}}>updates</span></h1>
          <form className={classes.root} noValidate>
            <TextField
              onChange={(e) => setSearch(e.target.value)}
              id="outlined-basic"
              label="Search"
              variant="outlined"
              placeholder="Search Match Type"
            />
          </form>
        </div>
        <Pagination matchesPerPage={matchesPerPage} totalMatches={totalMatches} paginate={paginate}/>
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
                <img src={Spinner} alt="Loading..." style={{position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "200", height: "200"}} />
            )     
        }
        
        </Fragment>
    )
}

export default Home

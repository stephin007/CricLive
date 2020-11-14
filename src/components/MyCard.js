import React, {Fragment} from 'react'
import { Card, CardContent, Grid, CardActions, Button, Typography } from '@material-ui/core'

import versus from "../img/versus.png"

const MyCard = ({match}) => {
    const getMatchCard  = () =>{
        return(
            <Fragment>
            <Card style={{marginBottom: "20px"}}>
            {match.type === "" 
                ? 
                <div className="badge badge-position">
                    Match Type Not found
                </div>

                :
                <div className="badge badge-position badge-green">
                    {match.type}
                </div>
            }        
                <CardContent >
                    <Grid container justify="center" alignItems="center" spacing={3} className="mycard">
                        <Grid item>
                            <Typography variant="h6">{match["team-1"]}</Typography>
                        </Grid>
                        <Grid item>
                            <img src={versus} alt="Vs" width="50px" height="50px"/>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6">{match["team-2"]}</Typography>
                        </Grid>
                    </Grid>
                </CardContent>
                {/* Use below if needed : style={{display: "flex", alignItems: "center", justifyContent:"center"}}*/}
                <CardActions className= "mycard">
                    <Button variant="contained" color="secondary" className= "mycard_firstButton">
                        Show Details
                    </Button>
                    <Button variant="contained" color="secondary">
                        Start Time: {new Date(match.dateTimeGMT).toLocaleString()}
                    </Button>
                </CardActions>
            </Card>
            </Fragment>
        )
    }
    return (
        getMatchCard()
    )
}

export default MyCard

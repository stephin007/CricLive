import React, {Fragment} from 'react'
import { Card, CardContent, Grid, CardActions, Button, Typography } from '@material-ui/core'

import versus from "../img/versus.png"

const MyCard = () => {
    const getMatchCard  = () =>{
        return(
            <Fragment>
                <h1>
                    Latest updates
                </h1>
            <Card>
                <CardContent >
                    <Grid container justify="center" alignItems="center" spacing={3} className="mycard">
                        <Grid item>
                            <Typography variant="h6">First Team</Typography>
                        </Grid>
                        <Grid item>
                            <img src={versus} alt="Vs" width="50px" height="50px"/>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6">Second Team</Typography>
                        </Grid>
                    </Grid>
                </CardContent>
                {/* Use below if needed : style={{display: "flex", alignItems: "center", justifyContent:"center"}}*/}
                <CardActions className= "mycard">
                    <Button variant="contained" color="secondary" className= "mycard_firstButton">
                        Show Details
                    </Button>
                    <Button variant="contained" color="secondary">
                        {new Date().toString()}
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

import React, { Fragment, useState } from "react";
import {
  Card,
  CardContent,
  Grid,
  CardActions,
  Button,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide
} from "@material-ui/core";

import versus from "../img/versus.png";
import { getMatchData } from "../api/Api";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const MyCard = ({ match }) => {
  const [detail, setDetail] = useState({});
  const [open, setOpen] = useState(false)

  const onClick = (id) => {
    getMatchData(id)
      .then((data) => {console.log(data)
        setDetail(data)
        handleClickOpen()
    })
      .catch((error) => console.log(error));
  };
  const getMatchCard = () => {
    return (
      <Fragment>
        <Card style={{ marginBottom: "20px" }}>
          {match.type === "" ? (
            <div className="badge badge-position">Test Series</div>
          ) : (
            <div className="badge badge-position badge-green">{match.type}</div>
          )}
          <CardContent>
            <Grid
              container
              justify="center"
              alignItems="center"
              spacing={3}
              className="mycard"
            >
              <Grid item>
                <Typography variant="h6">{match["team-1"]}</Typography>
              </Grid>
              <Grid item>
                <img src={versus} alt="Vs" width="50px" height="50px" />
              </Grid>
              <Grid item>
                <Typography variant="h6">{match["team-2"]}</Typography>
              </Grid>
            </Grid>
          </CardContent>
          {/* Use below if needed : style={{display: "flex", alignItems: "center", justifyContent:"center"}}*/}
          <CardActions className="mycard">
            <Button
              onClick={() => {
                onClick(match.unique_id);
              }}
              variant="contained"
              color="secondary"
              className="mycard_firstButton"
            >
              Show Details
            </Button>
            <Button variant="contained" color="secondary">
              Start Time: {new Date(match.dateTimeGMT).toLocaleString()}
            </Button>
          </CardActions>
        </Card>
      </Fragment>
    );
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };

  const getDialog = () => (
    <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
          <DialogTitle id="alert-dialog-slide-title">{"Match Details:"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
                <Typography>{detail.state}</Typography>
                <Typography>
                    Match Status:{" "}
                    <span style={{fontWeight: "bold"}}>
                        {detail.matchStarted ? "Started" : "Not Started"}
                    </span>
                </Typography>
                
                <Typography>
                    Score:  
                    <span style={{fontStyle: "italic", fontWeight: "bold"}}>
                        {detail.score}
                    </span>
                </Typography>
                <Typography>
                    Statistics:  
                    <span style={{fontStyle: "italic", fontWeight: "bold"}}>
                        {detail.stat}
                    </span>
                </Typography>
            </DialogContentText>
          </DialogContent>

          <DialogActions>
            <Button onClick={handleClose} color="primary" autofocus>
                Close
            </Button>
        </DialogActions>
    </Dialog>
  )

  return (
      <Fragment>
        {getMatchCard()}
        {getDialog()}    
      </Fragment>
  );
};

export default MyCard;

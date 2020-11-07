import React from 'react'
import PropTypes from 'prop-types';
import {Button,
    AppBar,
    Toolbar,
    Typography,
    CssBaseline,
    useScrollTrigger,
    Box,
    Container,
    Fab,
    Zoom
} from "@material-ui/core";
import {KeyboardArrowUp, SportsCricket} from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles';

import "../App.css"

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },

}));

function ScrollTop(props) {
    const { children, window } = props;
    const classes = useStyles();
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

        if (anchor) {
            anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    return (
        <Zoom in={trigger}>
            <div onClick={handleClick} role="presentation" className={classes.root}>
                {children}
            </div>
        </Zoom>
    );
}

ScrollTop.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};

const Navbar = (props) => {
    return (
        <div className="App">
            <React.Fragment>
                <CssBaseline />
                <AppBar>
                    <Toolbar>
                        <Typography
                            variant="h4"
                            style={{fontFamily:"Nunito"}}>
                            CricLive
                            <SportsCricket
                                style={{fontSize:"25px"}}/>
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Toolbar id="back-to-top-anchor" />

                <ScrollTop {...props}>
                    <Fab color="secondary" size="small" aria-label="scroll back to top">
                        <KeyboardArrowUp />
                    </Fab>
                </ScrollTop>
            </React.Fragment>
        </div>
    )
}

export default Navbar

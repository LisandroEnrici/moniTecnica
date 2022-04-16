import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Logo from '../../assets/logos/logoAzul.svg'

const useStyles = makeStyles(() => ({
    appBar: {
        background: '#ffffff',
        opacity: '0.84',
        alignItems: 'center'
    },
    toolBar: {
        width: '100%',
        maxWidth: '1000px',
        height: '80px',        
    }
}));

export default function Header() {
    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.appBar}>
            <Toolbar className={classes.toolBar} >
                <img src={Logo} alt="MONI" height="26"/>
            </Toolbar>
        </AppBar>
    );
}
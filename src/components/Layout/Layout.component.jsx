import { Box, makeStyles } from '@material-ui/core';
import React from 'react'
import Header from './Header.component';


const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: 'white',
        overflow: 'hidden'
    },
    contentContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        maxWidth: '1000px'
    }
}));

export default function Layout({
    children,
    header,
    backgd = ''
}) {
    const classes = useStyles()

    return (
        <Box style={{ backgroundImage: `url(${backgd})` }} className={classes.root}>
            {header ? <Header /> : null}
            <Box className={classes.contentContainer}>
                {children}
            </Box>
        </Box>
    );
}

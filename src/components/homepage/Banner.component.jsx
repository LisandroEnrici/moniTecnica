import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import eslogan from '../../assets/logos/eslogan.svg'


const useStyles = makeStyles((theme) => ({
    main: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        alignSelf: 'center',
        height: '75vh',
        width: '100%',
        maxWidth: '1000px',
        padding: '100px',
        //en pantallas chicas centra la imagen
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'center',
            padding: '0'
        }
    },
}))

export default function Banner() {
    const classes = useStyles()

    return (
        <Box className={classes.main}>
                <img src={eslogan} alt='Buenas, soy MONI' />
        </Box>
    )
}
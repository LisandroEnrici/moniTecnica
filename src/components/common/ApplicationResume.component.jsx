import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import StatusTag from './StatusTag.component';

const useStyles = makeStyles(() => ({
    main:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px'
    }
}))

export default function ApplicationResume({ name, last, status }) {
    const classes = useStyles()

    return (
        <Box className={classes.main}>
            <Typography align='center'>La solicitud de préstamo para {last}, {name} se ha registrado con éxito.
                <br />El resultado de la transacción es:</Typography>
                <StatusTag status={status} />
        </Box>
    )
}
import React from 'react';
import { Box, Divider, IconButton, Paper, Tooltip, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

const useStyles = makeStyles((theme) => ({
    main: {
        display: 'flex',
        flexDirection: 'column',
        padding: '30px',
        minHeight: '300px',
        borderRadius: `${theme.borderRadius.secondary} ${theme.borderRadius.secondary} 0 0`,
    },
    listHead: {
        display: 'flex',
        padding: '10px 20px',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headItem: {
        color: theme.palette.primary.dark
    }
}))

export default function ApplicationsList() {
    const classes = useStyles()

    return (
        <Paper className={classes.main}>
            <Box className={classes.listHead}>
                <Typography variant='h5' className={classes.headItem}>Solicitudes de Prestamo:</Typography>
                <Tooltip title='Nueva solicitud'>
                    <IconButton className={classes.headItem} >
                        <PersonAddIcon fontSize="large" />
                    </IconButton>
                </Tooltip>
            </Box>
            <Divider variant="middle" />
        </Paper>
    )
}
import React from 'react';
import { Box, CircularProgress, Divider, IconButton, Paper, Tooltip, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

const useStyles = makeStyles((theme) => ({
    main: {
        display: 'flex',
        flexDirection: 'column',
        padding: '30px',
        borderRadius: `${theme.borderRadius.secondary} ${theme.borderRadius.secondary} 0 0`,
    },
    listHead: {
        display: 'flex',
        padding: '10px 20px',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headItem: {
        color: `${theme.palette.primary.dark}`
    },
    listContainer: {
        display: 'flex',
        minHeight: '300px',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }
}))

export default function ApplicationsList({ applicationsRes, loading }) {
    const classes = useStyles()

    return (
        <Paper className={classes.main}>
            {/* Cabecera de lista de solicitudes */}
            <Box className={classes.listHead}>
                <Typography variant='h5' className={classes.headItem}>Solicitudes de Prestamo:</Typography>
                <Tooltip title='Nueva solicitud'>
                    <IconButton className={classes.headItem} >
                        <PersonAddIcon fontSize="large" />
                    </IconButton>
                </Tooltip>
            </Box>

            <Divider variant="middle" />

            <Box className={classes.listContainer}>
            {loading ?
                //Spinner de carga
                <CircularProgress color="secondary" />
                :
                <>
                    {applicationsRes.ok ?
                        <>
                            {Object.keys(applicationsRes.data).length ?
                                /* Se muestran las solicitudes */
                                null
                                :
                                /* El listado de solicitudes esta vacio */
                                <Typography align='center'>Aún no tienes solicitudes.<br/>Crea una haciendo click en "Nueva solicitud".</Typography>
                            }
                        </>
                        :
                        /* La query devolvió error */
                        <Typography align='center'>Ups... algo salió mal, intenta nuevamente.</Typography>
                    }
                </>
            }
            </Box>
        </Paper >
    )
}
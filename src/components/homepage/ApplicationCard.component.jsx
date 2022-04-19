import React from 'react';
import { Box, IconButton, makeStyles, Paper, Tooltip, Typography } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import StatusTag from '../common/StatusTag.component';

const useStyles = makeStyles((theme) => ({
    main: {
        display: 'flex',
        width: '100%',
        minHeight: '100px',
        alignItems: 'stretch',
        justifyContent: 'space-between',
        padding: '20px',
        gap: '10px',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column'
        }
    },
    infoContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly'
    },
    actionsContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: '-5px',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'row'
        }
    },
    editar: {
        color: `${theme.palette.info.main}`
    },
    eliminar: {
        color: `${theme.palette.error.main}`
    }
}))

export default function ApplicationCard({ application, id, onDelete, onEdit }) {
    const classes = useStyles()
    const handleDelete = (event) => {
        event.preventDefault()
        onDelete(id)
    }
    const handleEdit = (event) => {
        event.preventDefault()
        onEdit({ ...application, id: id })
    }

    return (
        <Paper className={classes.main}>
            <Box className={classes.infoContainer}>
                <Typography variant='h6' >{application.last}, {application.name}</Typography>
                <Typography variant='subtitle2'>Correo: {application.email}</Typography>
                <Typography variant='subtitle2'>DNI: {application.dni}</Typography>
                <Typography variant='subtitle2'>Género: {application.genre}</Typography>
            </Box>
            <Box className={classes.actionsContainer}>
                <StatusTag status={application.loanStatus} />
                <Box className={classes.buttonContainer}>
                    <Tooltip title='Editar'>
                        <IconButton className={classes.editar} onClick={handleEdit}>
                            <EditIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title='Eliminar'>
                        <IconButton className={classes.eliminar} onClick={handleDelete}>
                            <DeleteIcon />
                        </IconButton>
                    </Tooltip>
                </Box>
            </Box>
        </Paper>
    )
}
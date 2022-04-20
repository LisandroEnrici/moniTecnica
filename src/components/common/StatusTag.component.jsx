import React from 'react'
import { Box, makeStyles, Typography } from '@material-ui/core'

const useStyle = makeStyles((theme) => ({
    container: {
        display: 'flex',
        borderRadius: `${theme.borderRadius.small}`,
        padding: '4px 8px',
        textAlign: 'center',
        width: 'fit-content'
    },
    aproved: {
        backgroundColor: `${theme.palette.success.main}`
    },
    rejected: {
        backgroundColor: `${theme.palette.error.main}`
    },
    unknown: {
        backgroundColor: `${theme.palette.grayScale.g300}`
    },
    text: {
        color: 'white',
        fontSize: '15px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '12px'
        }
    }
}))

export default function StatusTag({ status }) {
    const classes = useStyle()
    let statusLbl = ''
    let style = classes.container

    switch (status) {
        case 'APROVED':
            statusLbl = 'APROBADO'
            style += ' ' + classes.aproved
            break;
        case 'REJECTED':
            statusLbl = 'RECHAZADO'
            style += ' ' + classes.rejected
            break;
        default:
            statusLbl = 'DESCONOCIDO'
            style += ' ' + classes.unknown
            break;
    }

    return (
        <Box className={style}>
            <Typography className={classes.text}>
                {status ? statusLbl : 'DESCONOCIDO'}
            </Typography>
        </Box>
    )
}
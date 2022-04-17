import React from 'react'
import { Box, makeStyles, Typography } from '@material-ui/core'

const useStyle = makeStyles((theme) => ({
    container: {
        display: 'flex',
        borderRadius: '4px',
        padding: '4px 8px',
        textAlign: 'center',
    },
    aproved: {
        backgroundColor: `${theme.palette.success.main}`
    },
    rejected: {
        backgroundColor: `${theme.palette.error.main}`
    },
    text: {
        color:'white',
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
    }

    return (
        <Box className={style}>
            <Typography className={classes.text}>
                {status ? statusLbl : 'DESCONOCIDO'}
            </Typography>
        </Box>
    )
}
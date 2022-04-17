import React from 'react';
import { Box, makeStyles, MenuItem, TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    main: {
        display: 'flex',
        flexDirection: 'column',
        padding: '15px',
        gap: '10px'
    }

}))

const GENDERS = ['Femenino', 'Masculino', 'No especifica']

export default function ApplicationForm({ values, handleChange }) {
    const classes = useStyles()
    const { name, last, genre, email, dni } = values

    return (
        <Box className={classes.main}>
            <TextField
                label='Nombre'
                variant='outlined'
                required
                onChange={handleChange('name')}
                value={name} />
            <TextField
                label='Apellido'
                variant='outlined'
                required
                onChange={handleChange('last')}
                value={last} />
            <TextField
                select
                label='Género'
                value={genre}
                onChange={handleChange('genre')}
                variant='outlined'
                required
            >
                {GENDERS.map((option) => (
                    <MenuItem key={option} value={option}>
                        {option}
                    </MenuItem>
                ))}
            </TextField>
            <TextField
                label='Correo:'
                variant='outlined'
                required
                onChange={handleChange('email')}
                value={email} />
            <TextField
                label='DNI'
                variant='outlined'
                required
                type='number'
                onChange={handleChange('dni')}
                value={dni} />
        </Box>
    )
}
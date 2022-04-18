import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import { useMediaQuery, useTheme } from '@material-ui/core';
import ApplicationForm from '../../components/common/ApplicationForm.component';
import { createApplication } from '../../webServices/webServices.controller';

const DEFAULT_VALUES = {
    name: '',
    last: '',
    genre: '',
    email: '',
    dni: ''
}

export default function NewApplicationContainer({ onClose, open }) {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('xs'));
    const [values, setValues] = useState(DEFAULT_VALUES)

    const handleCancel = () => {
        setValues(DEFAULT_VALUES)
        onClose();
    };

    const handleOk = (event) => {
        event.preventDefault()
        createApplication(values)
        setValues(DEFAULT_VALUES)
        onClose();
    };

    const handleChange = (key) => (event) => {
        event.preventDefault()
        setValues({ ...values, [key]: event.target.value })
    };

    return (
        <Dialog
            maxWidth="xs"
            open={open}
            fullScreen={fullScreen}
        >
            <form onSubmit={handleOk} style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%' }}>
                <DialogTitle>Crear nueva solicitud de préstamo</DialogTitle>
                <DialogContent dividers>
                    <ApplicationForm values={values} handleChange={handleChange} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCancel} color="secondary">
                        Cancelar
                    </Button>
                    <Button type='submit' color="primary">
                        Crear
                    </Button>
                </DialogActions>
            </form >
        </Dialog>
    );
}

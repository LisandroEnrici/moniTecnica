import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import { CircularProgress, useMediaQuery, useTheme } from '@material-ui/core';
import ApplicationForm from '../../components/common/ApplicationForm.component';
import { createApplication } from '../../webServices/webServices.controller';
import SnackBar from '../../components/common/SnackBar.component';

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
    const [loading, setLoading] = useState(false)
    const [snackOp, setSnackOp] = useState({ open: false, severity: '', message: '' })

    const handleCancel = () => {
        setValues(DEFAULT_VALUES)
        onClose();
    };

    const handleOk = async (event) => {
        event.preventDefault()
        setLoading(true)
        const res = await createApplication(values)
        if (res.ok) {
            setValues(DEFAULT_VALUES)
            setSnackOp({ open: true, severity: 'success', message: 'La solicitud se registró exitosamente' })
            onClose();
        } else {
            setSnackOp({ open: true, severity: 'error', message: 'Error: Revise los datos e intente nuevamente' })
        }
        setLoading(false)
    };

    const handleChange = (key) => (event) => {
        event.preventDefault()
        setValues({ ...values, [key]: event.target.value })
    };

    return (
        <>
            <Dialog
                maxWidth="xs"
                open={open}
                fullScreen={fullScreen}
            >
                <form onSubmit={handleOk} style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%' }}>
                    <DialogTitle>Crear nueva solicitud de préstamo</DialogTitle>
                    <DialogContent dividers>
                        {loading ?
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <CircularProgress color="secondary" />
                            </div>
                            :
                            <ApplicationForm values={values} handleChange={handleChange} />
                        }
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCancel} disabled={loading}>
                            Cancelar
                        </Button>
                        <Button type='submit' color="secondary" disabled={loading}>
                            Crear
                        </Button>
                    </DialogActions>
                </form >
            </Dialog>
            <SnackBar snackOptions={snackOp} setSnackOptions={setSnackOp} />
        </>
    );
}

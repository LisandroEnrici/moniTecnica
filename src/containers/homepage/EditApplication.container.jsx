import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import { CircularProgress, useMediaQuery, useTheme } from '@material-ui/core';
import ApplicationForm from '../../components/common/ApplicationForm.component';
import { editApplication } from '../../webServices/webServices.controller';

export default function EditApplicationContainer({ onClose, toEdit, setSnackOp }) {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('xs'));
    const [values, setValues] = useState(toEdit)
    const [loading, setLoading] = useState(false)
    const openDialog = Boolean(values)

    const handleCancel = (event) => {
        event.preventDefault()
        setValues(undefined)
        onClose();
    };

    const handleOk = async (event) => {
        event.preventDefault()
        setLoading(true)
        console.log(values)
        const res = await editApplication(values)
        if (res.ok) {
            setSnackOp({ open: true, severity: 'success', message: 'La solicitud se registró exitosamente' })
            setValues(undefined)
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
                open={openDialog}
                fullScreen={fullScreen}
            >
                <form onSubmit={handleOk} style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%' }}>
                    <DialogTitle>Crear nueva solicitud de préstamo</DialogTitle>
                    <DialogContent dividers>
                        {loading ?
                            <div style={{ display: 'flex', width: '100%', height: '100%', justifyContent: 'center', alignItems:'center' }}>
                                <CircularProgress color="secondary" />
                            </div>
                            :
                            <ApplicationForm values={values} handleChange={handleChange} />
                        }
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus onClick={handleCancel} disabled={loading}>
                            Cancelar
                        </Button>
                        <Button onClick={handleOk} color="secondary" disabled={loading}>
                            Guardar
                        </Button>
                    </DialogActions>
                </form >
            </Dialog>
        </>
    );
}

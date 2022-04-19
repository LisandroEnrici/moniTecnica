import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import { CircularProgress, useMediaQuery, useTheme } from '@material-ui/core';
import ApplicationForm from '../../components/common/ApplicationForm.component';
import { createApplication } from '../../webServices/webServices.controller';
import ApplicationResume from '../../components/common/ApplicationResume.component';

const DEFAULT_VALUES = {
    name: '',
    last: '',
    genre: '',
    email: '',
    dni: ''
}

export default function NewApplicationContainer({ onClose, open, setSnackOp }) {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('xs'));
    const [values, setValues] = useState(DEFAULT_VALUES)
    const [loading, setLoading] = useState(false)
    const [result, setResult] = useState(undefined)

    const handleCancel = () => {
        setValues(DEFAULT_VALUES)
        setResult(undefined)
        onClose();
    };

    const handleOk = async (event) => {
        event.preventDefault()
        setLoading(true)
        const res = await createApplication(values)
        if (res.ok) {
            setResult(res.data)
        } else {
            setSnackOp({ open: true, severity: 'error', message: 'Error: Revise los datos e intente nuevamente' })
        }
        setLoading(false)
    };

    const handleContinue = (event) => {
        event.preventDefault();
        setValues(DEFAULT_VALUES)
        setResult(undefined)
        onClose();
    }

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
                        <div style={{ display: 'flex', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                            {loading ?
                                <CircularProgress color="secondary" />
                                :
                                <>
                                    {result ?
                                        /* Muestra un resumen del resultado de la solicitud */
                                        <ApplicationResume name={result.name} last={result.last} status={result.loanStatus} />
                                        :
                                        <ApplicationForm values={values} handleChange={handleChange} />
                                    }
                                </>
                            }
                        </div>
                    </DialogContent>
                    <DialogActions>
                        {result ?
                            <Button onClick={handleContinue} color="secondary" disabled={loading}>
                                Continuar
                            </Button>
                            :
                            <>
                                <Button onClick={handleCancel} disabled={loading}>
                                    Cancelar
                                </Button>
                                <Button type='submit' color="secondary" disabled={loading}>
                                    Crear
                                </Button>
                            </>
                        }
                    </DialogActions>
                </form >
            </Dialog>
        </>
    );
}

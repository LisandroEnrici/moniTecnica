import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { deleteApplication } from '../../webServices/webServices.controller';
import { CircularProgress } from '@material-ui/core';


//Solicita la confirmación de la eliminación si el valor toDelete es distinto de ''
export default function DeleteApplicationContainer({ toDelete, onClose, setSnackOp }) {
    const [loading, setLoading] = useState(false)

    const handleClose = () => {
        onClose()
    };
    const handleConfirm = async () => {
        setLoading(true)
        const res = await deleteApplication(toDelete)
        if (res.ok) {
            setSnackOp({ open: true, severity: 'success', message: 'La solicitud se eliminó exitosamente' })
        } else {
            setSnackOp({ open: true, severity: 'error', message: 'Error: No se pudo eliminar la solicitud, intente nuevamente' })
        }
        setLoading(false)
        onClose()
    };

    return (
        <>
            <Dialog
                open={Boolean(toDelete)}
                onClose={handleClose}
            >
                <DialogTitle >Eliminar solicitud</DialogTitle>
                <DialogContent dividers>
                    {loading ?
                        <div style={{ display: 'flex', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                            <CircularProgress color="secondary" />
                        </div>
                        :
                        <DialogContentText >
                            ¿Desea eliminar la solicitud? Una vez eliminada no podrá recuperarla
                        </DialogContentText>
                    }
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} disabled={loading}>
                        Cancelar
                    </Button>
                    <Button onClick={handleConfirm} color="secondary" autoFocus disabled={loading}>
                        Eliminar
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

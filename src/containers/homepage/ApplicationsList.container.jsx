import React, { useEffect, useState } from 'react';
import SnackBar from '../../components/common/SnackBar.component';
import ApplicationsList from '../../components/homepage/ApplicationsList.component';
import { getApplications } from '../../webServices/webServices.controller'
import DeleteApplicationContainer from './DeleteApplication.container';
import EditApplicationContainer from './EditApplication.container';
import NewApplicationContainer from './NewApplication.container.jsx'

export default function ApplicationsListContainer() {
    const [applicationsRes, setApplicationsRes] = useState({})
    const [loading, setLoading] = useState(true)
    const [openCreate, setOpenCreate] = useState(false)
    const [toDelete, setToDelete] = useState('')
    const [toEdit, setToEdit] = useState(undefined)
    const [snackOp, setSnackOp] = useState({ open: false, severity: '', message: '' })

    async function fetchData() {
        const res = await getApplications()
        setApplicationsRes(res)
    }

    useEffect(() => {
        fetchData()
        setLoading(false)
    }, [])

    const onCreate = () => setOpenCreate(true)
    const onCloseCreate = () => { fetchData(); setOpenCreate(false) }
    const onDelete = (id) => setToDelete(id)
    const onCloseDelete = () => { fetchData(); setToDelete('') }
    const onEdit = (application) => setToEdit(application)
    const onCloseEdit = () => { fetchData(); setToEdit(undefined)}

    return (
        <>
            <ApplicationsList applicationsRes={applicationsRes} loading={loading} onCreate={onCreate} onDelete={onDelete} onEdit={onEdit} />
            <NewApplicationContainer open={openCreate} onClose={onCloseCreate} setSnackOp={setSnackOp} />
            <DeleteApplicationContainer toDelete={toDelete} onClose={onCloseDelete} setSnackOp={setSnackOp} />
            {Boolean(toEdit) && <EditApplicationContainer onClose={onCloseEdit} toEdit={toEdit} setSnackOp={setSnackOp} />}
            <SnackBar snackOptions={snackOp} setSnackOptions={setSnackOp} />
        </>
    )
}
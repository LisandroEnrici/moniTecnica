import React, { useEffect, useState } from 'react';
import ApplicationsList from '../../components/homepage/ApplicationsList.component';
import { getApplications } from '../../webServices/webServices.controller'
import DeleteApplicationContainer from './DeleteApplication.container';
import NewApplicationContainer from './NewApplication.container.jsx'

export default function ApplicationsListContainer() {
    const [applicationsRes, setApplicationsRes] = useState({})
    const [loading, setLoading] = useState(true)
    const [openCreate, setOpenCreate] = useState(false)
    const [toDelete, setToDelete] = useState('')

    useEffect(() => {
        async function fetchData() {
            const res = await getApplications()
            setApplicationsRes(res)
        }
        fetchData()
        setLoading(false)
    }, [])

    const onCreate = () => setOpenCreate(true)
    const onCloseCreate = () => setOpenCreate(false)
    const onDelete = (id) => setToDelete(id)

    return (
        <>
            <ApplicationsList applicationsRes={applicationsRes} loading={loading} onCreate={onCreate} onDelete={onDelete}/>
            <NewApplicationContainer open={openCreate} onClose={onCloseCreate} />
            <DeleteApplicationContainer toDelete={toDelete} setToDelete={setToDelete} />
        </>
    )
}
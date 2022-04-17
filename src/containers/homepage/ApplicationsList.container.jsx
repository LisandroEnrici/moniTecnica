import React, { useEffect, useState } from 'react';
import ApplicationsList from '../../components/homepage/ApplicationsList.component';
import { getApplications } from '../../webServices/webServices.controller'
import NewApplicationContainer from './NewApplication.container.jsx'

export default function ApplicationsListContainer() {
    const [applicationsRes, setApplicationsRes] = useState({})
    const [loading, setLoading] = useState(true)
    const [openCreate, setOpenCreate] = useState(false)

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

    return (
        <>
            <ApplicationsList applicationsRes={applicationsRes} loading={loading} onCreate={onCreate}/>
            <NewApplicationContainer open={openCreate} onClose={onCloseCreate} />
        </>
    )
}
import React, { useEffect, useState } from 'react';
import ApplicationsList from '../../components/homepage/ApplicationsList.component';
import { getApplications } from '../../webServices/webServices.controller'

export default function ApplicationsListContainer() {
    const [applicationsRes, setApplicationsRes] = useState({})
    const [loading, setLoading] = useState(true)
    console.log(applicationsRes)
    useEffect(() => {
        async function fetchData() {
            const res = await getApplications()
            setApplicationsRes(res)
        }
        fetchData()
        setLoading(false)
    }, [])

    return (
        <ApplicationsList applicationsRes={applicationsRes} loading={loading}/>
    )
}
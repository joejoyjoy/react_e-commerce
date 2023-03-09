import React from 'react'
import { Navigate, Outlet } from 'react-router';
import { useAuthContext } from '../../contexts/authContext'

function PublicRoute() {
    const { isAuthenticated } = useAuthContext();

    if (isAuthenticated) {
        return <Navigate to={'/profile'} />
    }

    return (
        <div>
            <Outlet />
        </div>
    )
}

export default PublicRoute
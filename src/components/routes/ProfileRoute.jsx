import React from 'react'
import { Navigate, Outlet } from 'react-router';
import { useAuthContext } from '../../contexts/authContext'

function ProfileRoute() {
    const { isAuthenticated } = useAuthContext();

    if (!isAuthenticated) {
        return <Navigate to={'/login'} />
    }

    return (
        <div>
            <Outlet />
        </div>
    )
}

export default ProfileRoute
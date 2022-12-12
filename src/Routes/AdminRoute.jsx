import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Layout/AuthProvider';
import BeatLoader from "react-spinners/ClipLoader";
import useAdmin from '../hooks/useAdmin';

const AdminRoute = ({ children }) => {
    const { user, loader } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);
    const location = useLocation();
    if (loader || isAdminLoading) {
        return <BeatLoader color="#36d7b7" />;
    }

    if (user && isAdmin) {
        return children
    } else {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
};

export default AdminRoute;



import React, { useContext } from 'react';
import { authContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(authContext);
    const location = useLocation();

    if (loading) {
        
        return <div className="text-center p-10">Loading...</div>;
    }

    if (!user) {
        
        return <Navigate state={{ from: location.pathname }} to="/login" />;
    }

    return children; 
};

export default PrivateRoute;

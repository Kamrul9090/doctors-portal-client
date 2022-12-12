import React, { useContext } from 'react';
import { Link, useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../Layout/AuthProvider';

const DisplayError = () => {
    const { logout } = useContext(AuthContext)
    const error = useRouteError()
    const navigate = useNavigate()

    const handleLogOut = () => {
        logout()
            .then(() => {
                navigate('/login')
            })
            .then(e => console.error(e))
    }
    return (
        <div>
            <p className="text-red-500 font-bold">Something is wrong!!!</p>
            <p className="text-red-500 font-bold">{error.statusText || error.message}</p>
            <h2 className="text-3xl">Please <Link to='/login'><button className='btn btn-md' onClick={handleLogOut}>Logout.</button></Link></h2>
        </div>
    );
};

export default DisplayError;
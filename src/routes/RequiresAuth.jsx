import React from 'react'
import { useAuthContext } from '../context'
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const RequiresAuth = () => {
    const location = useLocation();
    const {token} = useAuthContext();
  return token === "2323" ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{from : location}} />
  );
}

export default RequiresAuth
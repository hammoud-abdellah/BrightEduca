import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useContext(AuthContext);
  console.log(isAuthenticated);

  return (
    <>
      {isAuthenticated ? 
        <Outlet/>: 
      <>
      <Navigate to = '/Signin'/>
      </> }
    </>
  );
};

export default ProtectedRoute;
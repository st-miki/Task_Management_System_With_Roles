import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../Contexts/AuthContext'; // Assuming the correct file path and name

const PrivateRoute = () => {
  const { currentUser } = useAuth();

  return currentUser ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;

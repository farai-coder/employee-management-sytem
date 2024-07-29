import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useUserAuth } from './UserAuthContext';

export const ProtectedRoute = ({ children }) => {
  const { user } = useUserAuth();

  if (!user) {
    return <Redirect to="/signin" />;
  }

  return children;
};
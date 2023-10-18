import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(()=>{
    const storedIsAuthenticated = localStorage.getItem('isLogged');
    return storedIsAuthenticated ? JSON.parse(storedIsAuthenticated) : null;
  }); 

  useEffect(() => {;
    localStorage.setItem('isLogged', JSON.stringify(isAuthenticated));
  }, [isAuthenticated]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated}}>
      {children}
    </AuthContext.Provider>
  );
};
import React, { useState, createContext } from 'react';


export const AuthContext = createContext(false);

export const AuthProvider = ({ children }) => {

  const [auth, setAuth] = useState(false);
  // Login updates the user data with a name parameter
  const authenticate = () => {
    setAuth(true);
  };

  // Logout updates the user data to default
  const unAuthenticate = () => {
    setAuth(false);
  };

  return (
    <AuthContext.Provider value={{ auth, authenticate, unAuthenticate }}>
      {children}
    </AuthContext.Provider>
  );
}



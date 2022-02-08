import React, { useState, createContext } from 'react';

export const UserContext = createContext({ userObj: {}, userToken: ''});
export const UserProvider = ({ children }) => {
    // User is the name of the "data" that gets stored in context
    const [user, setUser] = useState({ userObj: {}, userToken: '' });
    // Login updates the user data with a name parameter
    const login = (updetedUser) => {
        
        setUser((user) => ({
          userObj: updetedUser.user,
          userToken: updetedUser.accessToken,
        }));
    };

    // Logout updates the user data to default
    const logout = () => {
        setUser((user) => ({
          userObj: {},
          userToken: ''
        }));
    };

    return (
      <UserContext.Provider value={{ user , login, logout }}>
        {children}
      </UserContext.Provider>
    );
  }


  
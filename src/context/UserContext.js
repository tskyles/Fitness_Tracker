import React from 'react';

export const UserContext = React.createContext({
  authenticated: false,
  user: null,
  loginDate: null,
  setUserData: () => {},
});

export const UserProvider = UserContext.Provider;

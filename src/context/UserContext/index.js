import React from 'react';

export const UserContext = React.createContext({
  authenticated: true,  //set to false before use, currently true for testing/dev
  user: null,
  setUserData: () => {},
});

export const UserProvider = UserContext.Provider;

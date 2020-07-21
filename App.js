import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Auth from './src/Nav/Auth';
import Main from './src/Nav/Main';

import { UserProvider } from './src/context/UserContext';

import Amplify from 'aws-amplify';
import AWSConfig from './aws-exports';
Amplify.configure(AWSConfig);

export default function App() {
  const [userData, setUserData] = useState({
    authenticated: false,
    user: null,
    loginDate: null,
  });

  const value = { userData, setUserData };

  return(
    <UserProvider value={value}>
      {userData.authenticated ?
        <Main />
        :
        <Auth />
      }
    </UserProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

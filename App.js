import Amplify from 'aws-amplify';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import AWSConfig from './aws-exports';
import { UserProvider } from './src/context/UserContext';
import Auth from './src/Nav/Auth';
import Main from './src/Nav/Main';

Amplify.configure(AWSConfig);


export default function App() {
  const [userData, setUserData] = useState({
    authenticated: true,   //set to false before use, currently true for testing/dev
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

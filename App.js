import Amplify from 'aws-amplify';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import AWSConfig from './aws-exports';
import { PlanProvider } from './src/context/PlanContext';
import { UserProvider } from './src/context/UserContext';
import AuthTabNav from './src/Nav/Tab/Auth';
import MainTabNav from './src/Nav/Tab/Main';

Amplify.configure(AWSConfig);


export default function App() {
  const [userData, setUserData] = useState({
    authenticated: true,   //set to false before use, currently true for testing/dev
    user: null,
  });
  const [planData, setPlanData] = useState({
    workingDays: [],
  })

  const userValue = { userData, setUserData };
  const planValue = { planData, setPlanData };

  return(
    <UserProvider value={userValue}>
      {userData.authenticated ?
        <PlanProvider value={planValue}>
          <MainTabNav />
        </PlanProvider>
        :
        <AuthTabNav />
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

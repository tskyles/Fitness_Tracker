import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Auth from './src/screens/Auth';

import Amplify from 'aws-amplify';
import AWSConfig from './aws-exports';
Amplify.configure(AWSConfig);

export default function App() {
  const [authenticated, setAuthenticated] = useState(false);

  if(authenticated){
    return(
      <View style={styles.container}>
        <Text>Hello!</Text>
      </View>
    )
  }

  return(
    <Auth 
      screenProps={{
        authenticated: authenticated
      }}
    />
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

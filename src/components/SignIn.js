import React, { useState, useContext } from 'react';
import { TextInput, Button, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { UserContext } from '../context/UserContext';

import { Auth } from 'aws-amplify';


export default function SignIn(props) {
  const { userData, setUserData } = useContext(UserContext);

  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [registered, setRegistered] = useState(false);

  function signIn() {
    Auth.signIn({
      username: username,
      password: password,
    })
      .then(user => {
        console.log('signedIn', user);
        setUserData({
          authenticated: true,
          user: user.signInUserSession.accessToken,
        })
      })
      .catch(error => console.log('error signing up', error));
  }

  return (
    <SafeAreaView styles={styles.container}>
      <TextInput
        styles={styles.input}
        placeholder='username'
        onChangeText={value => setUsername(value)}
      />
      <TextInput
        styles={styles.input}
        placeholder='password'
        onChangeText={value => setPassword(value)}
        secureTextEntry={true}
      />
      <Button
        title='Sign In'
        onPress={signIn}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    marginTop: 50,
  },
  input: {
    height: 50,
    borderBottomWidth: 2,
    borderBottomColor: '#000000',
    margin: 10,
  }
});
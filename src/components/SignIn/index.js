import { Auth } from 'aws-amplify';
import React, { useContext, useState } from 'react';
import { Button, StyleSheet, Text, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { UserContext } from '../../context/UserContext';


export default function SignIn(props) {
  const { userData, setUserData } = useContext(UserContext);

  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [registered, setRegistered] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

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
      .catch(error => {
        console.log('error signing in', error);
        setErrorMsg(error.message);
      });
  }

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='username'
        onChangeText={value => setUsername(value)}
      />
      <TextInput
        style={styles.input}
        placeholder='password'
        onChangeText={value => setPassword(value)}
        secureTextEntry={true}
      />
      <Button
        title='Sign In'
        onPress={signIn}
      />
      {errorMsg && 
        <Text>{errorMsg}</Text>
      }
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: "center",
  },
  input: {
    height: 50,
    borderBottomWidth: 2,
    borderBottomColor: '#000000',
    margin: 10,
  }
});
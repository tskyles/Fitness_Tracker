import React, { useState, useContext } from 'react';
import { TextInput, Button, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { UserContext } from '../context/UserContext';

import { Auth } from 'aws-amplify';


export default function SignUp(props){
  const { userData, setUserData } = useContext(UserContext);

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [registered, setRegistered] = useState(false);
  const [code, setCode] = useState(null);
  const [verified, setVerified] = useState(false);

  function signUp(){
    Auth.signUp({
      username: email,
      password: password,
      attributes: {
        email: email,
      }
    })
      .then(user => {
        console.log('registered', user);
        setRegistered(true);
        // setUserData({
        //   authenticated: true,
        //   user: {
        //     user_id: user.pool.clientId,
        //     username: user.username,
        //   }
        //   loginDate: null,
        // })
      })
      .catch(error => console.log('error signing up', error));
  }

  function verify(){
    Auth.confirmSignUp(email, code)
      .then(user => {
        console.log('verified', user);
      })
  }

  function test(){
    Auth.currentSession()
      .then(data => {
        console.log(data);
      })
  }

  return (
    <SafeAreaView styles={styles.container}>
      {!registered
        ?
        <>
          <TextInput 
            styles={styles.input}
            placeholder='email'
            onChangeText={value => setEmail(value)}
          />
          <TextInput
            styles={styles.input}
            placeholder='password'
            onChangeText={value => setPassword(value)}
            secureTextEntry={true}
          />
          <Button
            title='Sign Up'
            onPress={signUp}
          />
        </>
        :
        <>
          <TextInput
            styles={styles.input}
            placeholder='verification code'
            onChangeText={value => setCode(value)}
          />
          <Button
            title='Verify'
            onPress={verify}
          />
          <Button
            title='Test'
            onPress={test}
          />
        </>
      }
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
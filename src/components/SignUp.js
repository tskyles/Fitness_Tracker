import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

import { Auth } from 'aws-amplify';


export default function SignUp(props){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function signUp(){
    Auth.signUp({
      username: email,
      password: password,
      attributes: {
        email: email,
      }
    })
      .then(user => {
        console.log(user);
        // props.screenProps.authenticated = true;
        console.log(props)
      })
      .catch(error => console.log('error signing up', error));
  }

  return (
    <View styles={styles.container}>
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
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  input: {
    height: 50,
    borderBottomWidth: 2,
    borderBottomColor: '#000000',
    margin: 10,
  }
});
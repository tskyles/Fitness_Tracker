import { Auth } from 'aws-amplify';
import React, { useContext, useState } from 'react';
import { Button, StyleSheet, Text, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { UserContext } from '../../context/UserContext';


export default function SignUp(props){
  const { userData, setUserData } = useContext(UserContext);

  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [registered, setRegistered] = useState(false);
  const [code, setCode] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [displayInfo, setDisplayInfo] = useState(false);

  function signUp(){
    if(!username || !password || !email){
      setErrorMsg('All fields must be filled out');
      return;
    }

    Auth.signUp({
      username: username,
      password: password,
      attributes: {
        email: email,
      }
    })
      .then(() => {
        setErrorMsg(null);
        setRegistered(true);
      })
      .catch(error => {
        console.log('error signing up', error)
        handleErrorMsg(error.message);
      });
  }

  function verify(){
    Auth.confirmSignUp(username, code)
      .then(() => {
        Auth.signIn({
          username: username,
          password: password,
        })
          .then(user => {
            setUserData({
              authenticated: true,
              user: user.signInUserSession.accessToken,
            })
          })
          .catch(error => {
            console.log('error signing in', error)
            handleErrorMsg(error.message);
          });
      })
      .catch(error => {
        console.log('error validating email', error)
        handleErrorMsg(error.message);
      });
  }

  function handleInputFocus(){
    setDisplayInfo(!displayInfo);
  }

  function handleErrorMsg(message){
    if(message.includes('2 validation errors detected')){
      setErrorMsg('Password did not conform to policy');
    }else{
      setErrorMsg(message);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      {!registered
        ?
        <>
          <TextInput
            style={styles.input}
            placeholder='username'
            onChangeText={value => setUsername(value)}
          />
          <TextInput 
            style={styles.input}
            placeholder='email'
            onChangeText={value => setEmail(value)}
          />
          <TextInput
            style={styles.input}
            placeholder='password'
            onChangeText={value => setPassword(value)}
            secureTextEntry={true}
            onFocus={() => handleInputFocus()}
            onBlur={() => handleInputFocus()}
          />
          {displayInfo &&
            <Text>Password must be at least 8 characters and contain Uppercase, Lowercase, Numbers, and Symbols</Text>
          }
          <Button
            title='Sign Up'
            onPress={signUp}
          />
          {errorMsg &&
            <Text>{errorMsg}</Text>
          }
        </>
        :
        <>
          <Text style={styles.infoText}>Please enter the verfification code sent to your email</Text>
          <TextInput
            style={styles.input}
            placeholder='verification code'
            keyboardType='numeric'
            onChangeText={value => setCode(value)}
          />
          <Button
            title='Verify'
            onPress={verify}
          />
          {errorMsg &&
            <Text>{errorMsg}</Text>
          }
        </>
      }
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: "center",
    alignContent: "center"
  },
  input: {
    height: 50,
    borderBottomWidth: 2,
    borderBottomColor: '#000000',
    margin: 10,
  },
  infoText: {
    justifyContent: "center",
    alignSelf: "center",
  }
});
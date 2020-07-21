import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import SignUp from '../components/SignUp';

const Tab = createBottomTabNavigator();

export default function Auth(props){
  console.log('auth props', props);
  return(
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenProps={props.setAuth}
        >
          <Tab.Screen
            name='SignUp'
            component={SignUp}
            props={props.setAuth}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>

  )
}
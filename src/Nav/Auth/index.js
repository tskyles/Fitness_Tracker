import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import SignUp from '../../components/SignUp';
import SignIn from '../../components/SignIn';

const Tab = createBottomTabNavigator();

export default function Auth(props){
  return(
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
        >
          <Tab.Screen
            name='SignUp'
            component={SignUp}
          />
          <Tab.Screen
            name='SignIn'
            component={SignIn}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>

  )
}
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import SignUp from '../../components/SignUp';
import SignIn from '../../components/SignIn';

const Tab = createBottomTabNavigator();

export default function Auth(props){
  return(
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            keyboardHidesTabBar: true,
            showIcon: false,
            tabStyle: {
              alignContent: 'center',
              justifyContent: 'center'
            }
          }}
        >
          <Tab.Screen
            name='SignIn'
            component={SignIn}
          />
          <Tab.Screen
            name='SignUp'
            component={SignUp}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>

  )
}


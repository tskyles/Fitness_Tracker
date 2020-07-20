import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SignUp from '../components/SignUp';

const Tab = createBottomTabNavigator();

export default function Auth(props){
  return(
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name='SignUp'
          component={SignUp}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
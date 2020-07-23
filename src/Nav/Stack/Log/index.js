import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import LogDaily from '../../../Screens/Log/Daily';

const Stack = createStackNavigator();

export default function LogStackNav(){
  return (
    <Stack.Navigator
      initialRouteName='Daily'
    >
      <Stack.Screen 
        name='Daily'
        component={LogDaily}
      />
      {/* <Stack.Screen
        name='Weekly'
        component={}
      />
      <Stack.Screen
        name='Monthly'
        component={}
      /> */}
    </Stack.Navigator>
  )
}
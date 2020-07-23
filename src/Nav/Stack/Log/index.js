import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import LogDaily from '../../../Screens/Log/Daily';
import LogMonthly from '../../../Screens/Log/Monthly';
import LogWeekly from '../../../Screens/Log/Weekly';

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
      <Stack.Screen
        name='Weekly'
        component={LogWeekly}
      />
      <Stack.Screen
        name='Monthly'
        component={LogMonthly}
      />
    </Stack.Navigator>
  )
}
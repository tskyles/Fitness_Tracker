import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import SettingsMain from '../../../Screens/Settings/SettingsMain';

const Stack = createStackNavigator();

export default function SettingsStackNav(props) {


  return (
    <Stack.Navigator>
      <Stack.Screen
        name='SettingsMain'
        component={SettingsMain}
      />
    </Stack.Navigator>
  )
}
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import PlanMain from '../../../Screens/Plan/PlanMain';

const Stack = createStackNavigator();

export default function PlanStackNav(props){


  return (
    <Stack.Navigator>
      <Stack.Screen
        name='PlanMain'
        component={PlanMain}
      />
    </Stack.Navigator>
  )
}
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { PlanProvider } from '../../../context/PlanContext';
import PlanCreateWeek from '../../../Screens/Plan/PlanCreateWeek';
import PlanMain from '../../../Screens/Plan/PlanMain';

const Stack = createStackNavigator();

export default function PlanStackNav(props){


  return (
    <PlanProvider>
      <Stack.Navigator>
        <Stack.Screen
          name='PlanMain'
          component={PlanMain}
        />
        <Stack.Screen
          name='PlanCreateWeek'
          component={PlanCreateWeek}
        />
      </Stack.Navigator>
    </PlanProvider>
  )
}
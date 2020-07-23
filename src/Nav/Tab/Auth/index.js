import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SignIn from '../../../components/SignIn';
import SignUp from '../../../components/SignUp';


const Tab = createBottomTabNavigator();

export default function Auth(props){
  return(
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            keyboardHidesTabBar: true,
            showIcon: false,
            activeTintColor: '#707070',
            inactiveTintColor: '#000000',
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


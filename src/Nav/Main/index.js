import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Log from '../../Pages/Log';
import Settings from '../../Pages/Settings';

const Tab = createBottomTabNavigator();

export default function Main(props){

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            keyboardHidesTabBar: true,
            showIcon: true,
          }}
        >
          <Tab.Screen 
            name='Log'
            component={Log}
            options={{
              tabBarLabel: 'Log',
              tabBarIcon: () => (
                <FontAwesome name="book" size={24} color="black" />
              )
            }}
          />
          <Tab.Screen
            name='Settings'
            component={Settings}
            options={{
              tabBarLabel: 'Settings',
              tabBarIcon: () => (
                <MaterialIcons name="settings" size={24} color="black" />
              )
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Log from '../../../Screens/Log';
import Settings from '../../../Screens/Settings';

const Tab = createBottomTabNavigator();

export default function Main(props){

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            keyboardHidesTabBar: true,
            showIcon: true,
            activeTintColor: '#707070',
            inactiveTintColor: '#000000',
            size: 24,
          }}
        >
          <Tab.Screen 
            name='Log'
            component={Log}
            options={{
              tabBarLabel: 'Log',
              tabBarIcon: ({focused, color, size}) => (
                <FontAwesome
                  focused={focused}
                  name="book"
                  size={size}
                  color={color}
                />
              )
            }}
          />
          <Tab.Screen
            name='Settings'
            component={Settings}
            options={{
              tabBarLabel: 'Settings',
              tabBarIcon: ({ focused, color, size }) => (
                <MaterialIcons
                  focused={focused}
                  name="settings"
                  size={size}
                  color={color}
                />
              )
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

import { Foundation, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LogStackNav from '../../Stack/Log';
import PlanStackNav from '../../Stack/Plan';
import SettingsStackNav from '../../Stack/Settings';

const Tab = createBottomTabNavigator();

export default function MainTabNav(props){

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
            component={LogStackNav}
            options={{
              tabBarLabel: 'Log',
              tabBarIcon: ({focused, color, size}) => (
                <Foundation
                  focused={focused}
                  name="clipboard-pencil"
                  size={size}
                  color={color}
                />
              )
            }}
          />
          <Tab.Screen
            name='Plan'
            component={PlanStackNav}
            options={{
              tabBarLabel: 'Plan',
              tabBarIcon: ({ focused, color, size }) => (
                <MaterialCommunityIcons
                  focused={focused}
                  name="book-open-page-variant"
                  size={size}
                  color={color}
                />
              )
            }}
          />
          <Tab.Screen
            name='Settings'
            component={SettingsStackNav}
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

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Log from '../../Pages/Log';
import Settings from '../../Pages/Settings';


const Tab = createBottomTabNavigator();

export default function Main(props){

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen 
            name='Log'
            component={Log}
          />
          <Tab.Screen
            name='Settings'
            component={Settings}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
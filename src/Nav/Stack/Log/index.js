import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import CalenderIcon from '../../../components/CalenderIcon';
import ModalDropDownList from '../../../components/ModalDropDownList';
import LogDaily from '../../../Screens/Log/Daily';
import LogMonthly from '../../../Screens/Log/Monthly';
import LogWeekly from '../../../Screens/Log/Weekly';

const Stack = createStackNavigator();

export default function LogStackNav(){
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Stack.Navigator
      initialRouteName='Daily'
      screenOptions={{
        headerTitle: 'Fitness Tracker',
        headerRight: (props) => (
          <>
            <CalenderIcon 
              onPress={() => {
                console.log('pressed')
                setModalVisible(!modalVisible);
              }}
            />
            {modalVisible && 
              <ModalDropDownList
                modalVisible={modalVisible}
              />
            }
          </>
        ),
        headerRightContainerStyle: {
          paddingRight: 20,
        }
      }}

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

const styles = StyleSheet.create({
  headerIconRight: {
    marginRight: 10,
  },
  modal: {
    // position: "absolute",
    // backgroundColor: 'blue'
  }
})
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import CalenderIcon from '../../../components/CalenderIcon';
import ModalDropDownList from '../../../components/ModalDropDownList';
import LogDaily from '../../../Screens/Log/Daily';
import LogMonthly from '../../../Screens/Log/Monthly';
import LogWeekly from '../../../Screens/Log/Weekly';

const Stack = createStackNavigator();

export default function LogStackNav(props){
  const [modalVisible, setModalVisible] = useState(false);
  const [currentView, setCurrentView] = useState('Daily');
  const views = ['Daily', 'Weekly', 'Monthly']

  useEffect(() => {
    props.navigation.navigate(currentView)
  }, [currentView])

  function selectView(idx){
    setCurrentView(views[idx]);
    setModalVisible(false);
  }

  return (
    <Stack.Navigator
      initialRouteName='Daily'
      screenOptions={{
        headerTitle: 'Fitness Tracker',
        headerLeft: null,
        headerRight: () => (
          <>
            <CalenderIcon 
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            />
            {modalVisible && 
              <ModalDropDownList
                style={styles.dropDown}
                modalVisible={modalVisible}
                listItems={views}
                listTextStyle={styles.listText}
                listItemStyle={styles.listItems}
                onPress={selectView}
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
  dropDown: {
    zIndex: 2,
    position: 'absolute',
    right: 20,
    top: 50,
    backgroundColor: '#7a7a7a',
    width: 100,
  },
  listItems: {
    height: 35,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 10,
    fontSize: 20,
  },
  listText: {
    fontSize: 20,
  }
})
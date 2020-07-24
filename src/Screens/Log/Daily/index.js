import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DateScroller from '../../../components/DateScroller';

export default function LogDaily(props) {


  return (
    <View style={styles.container}>
      <DateScroller 
        dateHeader='Today'
        // goBack={}
        // goForward={}
        />
      <View style={styles.body}>
        <Text>Daily Log</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
    backgroundColor: '#707070',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
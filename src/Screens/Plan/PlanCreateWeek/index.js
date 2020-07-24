import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function PlanCreateWeek(props) {

  return (
    <View style={styles.container}>
      <Text>Select Workout Days:</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 25,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
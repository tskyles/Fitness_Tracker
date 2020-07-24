import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CircleSelector from '../../../components/CircleSelector';

export default function PlanCreateWeek(props) {
  
  return (
    <View style={styles.container}>
      <View>
        <Text>Select Workout Days:</Text>
        <Text>unselected are considered rest days</Text>
      </View>
      <View>
        <CircleSelector 
          label='S'
          circleStyle={styles.circle}
          textStyle={styles.text}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 25,
  },
  circle: {
    backgroundColor: '#ffffff',
    height: 40,
    width: 40,
    borderRadius: 40/2,
  },
  text: {
    fontSize: 20,
  }
});
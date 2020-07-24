import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function CircleSelector(props){

  return (
    <View style={[styles.circle, props.circleStyle]}>
      <Text style={[styles.text, props.textStyle]}>{props.label}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  circle: {
    backgroundColor: '#ffffff',
    borderColor: '#000000',
    borderStyle: 'solid',
    borderWidth: 2,
    height: 30,
    width: 30,
    borderRadius: 30 / 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontWeight: 'bold',
  }

})
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function LogHeader(props){


  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.touchable}
        onPress={() => props.goBack()}
      >
        <Ionicons 
          name="ios-arrow-back"
          size={24} 
          color="black" />
      </TouchableOpacity>

      <Text>{props.dateHeader}</Text>
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => props.goForward()}
      >
        <Ionicons 
          name="ios-arrow-forward" 
          size={24} 
          color="black" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: 'center',
    // backgroundColor: '#b53535',
  },
  touchable: {
    height: 35,
    width: 35,
    justifyContent: "center",
    alignItems: "center",
  }
})
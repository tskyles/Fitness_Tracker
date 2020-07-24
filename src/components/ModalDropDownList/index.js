import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function ModalDropDownList(props){

  return (
      <View style={styles.modalInner}>
        <Text>Day</Text>
        <Text>Week</Text>
        <Text>Month</Text>
      </View>
  )
}

const styles = StyleSheet.create({
  modalInner: {
    zIndex: 999,
    position: 'absolute',
    right: 20,
    top: 50,
    backgroundColor: '#7a7a7a',
    width: 100,
  }
})
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function CircleSelector(props){
  const [active, setActive] = useState(false);

  function handleOnPress(){
    setActive(!active);
    props.onCirclePress(props.listIndex)
  }

  return (
    <TouchableOpacity
      onPress={handleOnPress}
    >
      <View style={
        active ?
          [styles.circle, props.circleStyle, props.circleStyleActive]
        :
          [styles.circle, props.circleStyle, props.circleStyleInactive]
      }>
        <Text style={
          active ?
            [styles.text, props.textStyle, props.textStyleActive]
          :
            [styles.text, props.textStyle, props.textStyleInactive]
        }>{props.label}</Text>
      </View>
    </TouchableOpacity>
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
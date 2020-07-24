import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function ModalDropDownList(props){
  let elements = props.listItems.map((element, idx) => {
      return (
        <TouchableOpacity
          key={idx}
          style={{zIndex: 999}}
          onPress={() => props.onPress(idx)}
        >
          <View style={props.listItemStyle}>
            <Text style={props.listTextStyle}>{element}</Text>
          </View>
        </TouchableOpacity>
  )})

  return (
      <View style={props.style}>
        {elements}
      </View>
  )
}

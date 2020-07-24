import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { TouchableOpacity } from 'react-native';

export default function CalenderIcon(props){

  return (
    <>
      <TouchableOpacity
        onPress={() => props.onPress()}
      >
        <MaterialIcons
          name="date-range"
          size={24}
          color="black"
        />
      </TouchableOpacity>
      {props.children}
    </>
  )
}

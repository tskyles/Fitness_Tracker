import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import CircleSelector from '../CircleSelector';

export default function WeekDaysSelector(props){
  const [selectedDays, setSelectedDays] = useState([]);

  function handleCirclePress(idx){
    if(!selectedDays.includes(idx)){
      setSelectedDays([...selectedDays, idx]);
    }else{
      setSelectedDays(selectedDays.filter(element => element !== idx));
    }
  }

  const selectors = props.labels.map((label, idx) => {
    return (
      <CircleSelector
        key={idx}
        label={label}
        listIndex={idx}
        circleStyle={props.circleStyle}
        circleStyleActive={props.circleStyleActive}
        circleStyleInactive={props.circleStyleInactive}
        textStyle={props.textStyle}
        textStyleActive={props.textStyleActive}
        textStyleInactive={props.textStyleInactive}
        onCirclePress={handleCirclePress}
      />
    )
  })

  return (
    <View style={[styles.container, props.style]}>
      {selectors}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
})
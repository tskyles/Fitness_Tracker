import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import CircleSelector from '../CircleSelector';

export default function WeekDaysSelector(props){
  const [selectedIndexes, setSelectedIndexes] = useState([]);

  useEffect(() => {
    let orderedSelected = selectedIndexes.sort((a, b) => a - b)
    props.selectedDays({workingDays: orderedSelected});
  }, [selectedIndexes])

  function handleCirclePress(idx){
    if(!selectedIndexes.includes(idx)){
      setSelectedIndexes([...selectedIndexes, idx]);
    }else{
      setSelectedIndexes(selectedIndexes.filter(element => element !== idx));
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
import React from 'react';
import { StyleSheet, View } from 'react-native';
import CircleSelector from '../CircleSelector';

export default function WeekDaysSelector(props){
  const dayLabels = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  const selectors = dayLabels.map((label, idx) => {
    return (
      <CircleSelector
        key={idx}
        label={label}
        circleStyle={props.circleStyle}
        circleStyleActive={props.circleStyleActive}
        circleStyleInactive={props.circleStyleInactive}
        textStyle={props.textStyle}
        textStyleActive={props.textStyleActive}
        textStyleInactive={props.textStyleInactive}
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
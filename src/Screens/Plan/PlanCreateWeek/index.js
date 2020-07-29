import { Picker } from '@react-native-community/picker';
import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WeekDaysSelector from '../../../components/WeekDaysSelector';
import { PlanContext } from '../../../context/PlanContext';

export default function PlanCreateWeek(props) {
  const {planData, setPlanData} = useContext(PlanContext);
  const [splitTypeValue, setSplitTypeValue] = useState('-');
  const [daySplitTypeValues, setDaySplitTypeValues] = useState([ { split: '-' },
    { split: '-' },
    { split: '-' },
    { split: '-' },
    { split: '-' },
    { split: '-' },
    { split: '-' } ])
  const initialLabelValue = ('-');
  const dayLabels = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const splitTypes = ['-', 'AB', 'PPL', 'Muscle Group', 'Custom'];
  const splitTypeOptions = {
    '-': [],
    'ab': ['-', 'A', 'B'],
    'ppl': ['-', 'Push', 'Pull', 'Legs']
  }

  useEffect(() => {
    console.log('planData', planData)
  }, [planData])

  // useEffect(() => {
  //   console.log(splitTypeValue)
  // }, [splitTypeValue])

  function setDayPickerValue(value, idx){
    let modified = daySplitTypeValues;
    modified[idx].split = value;
    setDaySplitTypeValues(modified);
  }

  function createDayPickers(labels, labelIndexes, pickerCallback, valueCallback){
    return labelIndexes.map((item, idx) => {
      return (
        <View
          key={`pickerDayView${item}`}
        >
          <Text
            key={`pickerDayText${item}`}
          >{labels[item]}</Text>
          <Picker
            key={`pickerDayPicker${item}`}
            selectedValue={daySplitTypeValues[item].split}
            onValueChange={(itemValue) => valueCallback(itemValue, item)}
            prompt='Split Day'
          >
            {pickerCallback}
          </Picker>
        </View>
      )
    })
  }

  function createPickerItems(data){
    return data.map((item, idx) => {
      return (
        <Picker.Item 
          key={`pickerSplit${idx}`}
          label={item}
          value={item.replace(/\s/g, '').toLowerCase()}
        />
      )
    })
  }

  return (
    <View style={styles.container}>
      <View>
        <Text>Select Workout Days:</Text>
        <Text>unselected are considered rest days</Text>
      </View>
      <WeekDaysSelector
        labels={dayLabels}
        circleStyle={styles.circleBase}
        circleStyleActive={styles.circleActive}
        circleStyleInactive={styles.circleInactive}
        textStyle={styles.textBase}
        textStyleActive={styles.textStyleActive}
        textStyleInactive={styles.textStyleInactive}
        selectedDays={setPlanData}
      />
      <View>
        <Text>Choose Split Type:</Text>
        <Picker
          selectedValue={splitTypeValue}
          onValueChange={(itemValue) => setSplitTypeValue(itemValue)}
          prompt='Split Type'
        >
          {createPickerItems(splitTypes)}
        </Picker>
      </View>
      {(splitTypeValue !== initialLabelValue) &&
        <View>
          <Text>Set Split For Each Day:</Text>
          <View>
            {createDayPickers(dayNames, planData.workingDays, createPickerItems(splitTypeOptions[splitTypeValue]), setDayPickerValue)}
          </View>
        </View>
      }

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 25,
  },
  circleBase: {
    height: 40,
    width: 40,
    borderRadius: 40 / 2,
  },
  circleActive: {
    backgroundColor: '#3071ab'
  },
  circleInactive: {
    backgroundColor: '#ffffff',
  },
  textBase: {
    fontSize: 20,
  },
  textStyleActive: {
    color: '#ffffff',
  },
  textStyleInactive: {
    color: '#000000',
  }
});
import { Picker } from '@react-native-community/picker';
import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WeekDaysSelector from '../../../components/WeekDaysSelector';
import { PlanContext } from '../../../context/PlanContext';

export default function PlanCreateWeek(props) {
  const {planData, setPlanData} = useContext(PlanContext);
  const [splitValue, setSplitValue] = useState('-')
  const dayLabels = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const splitOptions = ['-', 'A,B', 'PPL', 'Muscle Group', 'Custom'];

  // useEffect(() => {
  //   console.log(planData)
  // }, [planData])

  function createPickerItems(data){
    return data.map(item => {
      return (
        <Picker.Item 
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
          selectedValue={splitValue}
          onValueChange={(itemValue) => setSplitValue(itemValue)}
        >
          {createPickerItems(splitOptions)}
        </Picker>
      </View>
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
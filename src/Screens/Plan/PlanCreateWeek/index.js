import React, { useContext, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WeekDaysSelector from '../../../components/WeekDaysSelector';
import { PlanContext } from '../../../context/PlanContext';

export default function PlanCreateWeek(props) {
  const {planData, setPlanData} = useContext(PlanContext);
  const dayLabels = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  useEffect(() => {
    console.log(planData)
  }, [planData])


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
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function PlanMain(props) {
  const [plans, setPlans] = useState(null);

  return (
    <View style={styles.container}>
      {!plans &&
        <View>
          <Text>No Training Plan Set</Text>
          <Button
            onPress={() => props.navigation.navigate('PlanCreateWeek')}
          title='Create Plan'
          />
        </View>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
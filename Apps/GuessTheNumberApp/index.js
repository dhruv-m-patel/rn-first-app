import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NumberSelection from './Screens/NumberSelection';

const styles = StyleSheet.create({
  gameContainer: {
    flex: 1,
  },
})

export default function GuessTheNumberApp() {
  const [selectedNumber, setSelectedNumber] = useState(undefined);

  const handleNumberSelection = (num) => {
    setSelectedNumber(num);
  };

  const handleResetNumber = () => {
    setSelectedNumber(undefined);
  };

  return (
    <View style={styles.gameContainer}>
      <NumberSelection
        onNumberSelected={setSelectedNumber}
        onReset={handleResetNumber}
      />
    </View>
  );
}

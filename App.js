import React, { useState, useCallback } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  const [counter, setCounter] = useState(0);

  const handleIncrement = useCallback(() => {
    setCounter(counter + 1);
  }, [counter]);

  const handleDecrement = useCallback(() => {
    setCounter(counter - 1);
  }, [counter]);

  return (
    <View style={styles.container}>
      <Text>Counter</Text>
      <Button title="-" onPress={handleDecrement} />
      <Text>{counter}</Text>
      <Button title="+" onPress={handleIncrement} />
    </View>
  );
}

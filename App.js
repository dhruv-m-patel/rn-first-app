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
  const [text, setText] = useState('Open up App.js to start working on your app!');

  const handleChangeText = useCallback(() => {
    setText('Hello World!');
  }, []);

  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <Button title="Change Text" onPress={handleChangeText} />
    </View>
  );
}

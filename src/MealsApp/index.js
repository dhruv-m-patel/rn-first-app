import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
  },
});

const MealsApp = () => {
  return (
    <View style={styles.screen}>
      <View>
        <Text>Meals App</Text>
      </View>
    </View>
  );
};

export default MealsApp;

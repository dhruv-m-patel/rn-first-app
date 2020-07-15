import React from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    fontSize: 16,
    color: 'black',
    marginTop: 30,
    padding: 10,
    backgroundColor: 'white',
  },
});

const AppContainer = ({ style: customStyle, ...props }) => (
  <View style={{ ...styles.container, ...customStyle }} {...props} />
);

export default AppContainer;

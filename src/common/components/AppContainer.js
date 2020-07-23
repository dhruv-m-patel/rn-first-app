import React from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

const AppContainer = ({
  style: customStyle,
  ...props
}) => (
  <View
    style={{ ...styles.container, ...customStyle }}
    {...props}
  />
);

export default AppContainer;

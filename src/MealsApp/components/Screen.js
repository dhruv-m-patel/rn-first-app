import React from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
});

const Screen = ({
  style: customStyle,
  ...props
}) => (
  <View
    style={{ ...styles.screen, ...customStyle }}
    {...props}
  />
);

export default Screen;

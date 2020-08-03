import React from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  box: {
    shadowColor: '#000000',
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    padding: 15,
    marginBottom: 15,
    marginHorizontal: 10,
  },
});

const Box = ({
  style: customStyle,
  ...props
}) => (
  <View
    style={{ ...styles.box, ...customStyle }}
    {...props}
  />
);

export default Box;

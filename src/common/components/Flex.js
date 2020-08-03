import React from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  flex: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

const Flex = ({
  style: customStyle,
  ...props
}) => (
  <View
    style={{ ...styles.flex, ...customStyle }}
    {...props}
  />
);

const FlexContent = ({
  style: customStyle,
  width,
  ...props
}) => (
  <View
    style={{ ...customStyle, width }}
    {...props}
  />
);

Flex.Content = FlexContent;

export default Flex;

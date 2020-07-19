import React from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const CenteredContent = ({
  style: customStyle,
  ...props
}) => (
  <View
    style={{ ...styles.container, ...customStyle }}
    {...props}
  />
);

export default CenteredContent;

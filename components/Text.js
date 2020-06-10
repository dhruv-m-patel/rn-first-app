import React from 'react';
import { StyleSheet, Text as RnText } from 'react-native';

const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'normal',
  },
});

const Text = props => (
  <RnText style={styles.text} {...props} />
);

export default Text;


import React from 'react';
import { StyleSheet, Text as RNText } from 'react-native';

const styles = StyleSheet.create({
  text: {
    fontWeight: 'normal',
    margin: '10px 0',
  },
});

const Text = props => (
  <RNText style={styles.text} {...props} />
);

export default Text;

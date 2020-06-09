import React from 'react';
import { StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  text: {
    fontWeight: 'normal',
    margin: '10px 0',
  },
});

const CenteredContent = props => (
  <Text style={styles.text} {...props} />
);

export default CenteredContent;


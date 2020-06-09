import React from 'react';
import { StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  header: {
    fontSize: 26,
    fontWeight: '400',
    color: '#333333',
    marginBottom: 10,
  },
});

const CenteredContent = props => (
  <Text style={styles.header} {...props} />
);

export default CenteredContent;


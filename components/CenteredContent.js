import React from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const CenteredContent = props => (
  <View style={styles.container} {...props} />
);

export default CenteredContent;

import React from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  card: {
    fontSize: 26,
    fontWeight: '400',
    color: '#333333',
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 0.8,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 10,
  },
});

const Card = props => (
  <View style={styles.card} {...props} />
);

export default Card;


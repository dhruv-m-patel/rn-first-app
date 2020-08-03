import React from 'react';
import { View, StyleSheet } from 'react-native';
import Box from './Box';

const styles = StyleSheet.create({
  card: {
    width: 300,
    maxWidth: '90%',
    alignItems: 'center',
    borderColor: '#eee',
    borderWidth: 2,
    borderRadius: 8,
    marginVertical: 10,
    padding: 15,
  },
});

const Card = ({
  style: customStyle,
  ...props
}) => (
  <Box
    style={{ ...styles.card, ...customStyle }}
    {...props}
  />
);

export default Card;

import React from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    width: 300,
    maxWidth: '90%',
    alignItems: 'center',
    borderColor: '#eee',
    borderWidth: 2,
    borderRadius: 8,
    shadowColor: '#ddd',
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowRadius: 6,
    shadowOpacity: 0.6,
    elevation: 5,
    backgroundColor: 'white',
    marginVertical: 10,
    padding: 10,
  },
});

const Card = ({
  style: customStyle,
  ...props
}) => (
  <View
    style={{ ...styles.card, ...customStyle }}
    {...props}
  />
);

export default Card;

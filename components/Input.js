import React, { forwardRef } from 'react';
import { StyleSheet, TextInput } from 'react-native';

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderColor: '#ddd',
    marginTop: 10,
    marginBottom: 10,
    padding: 3,
    borderRadius: 10,
  },
  sm: {
    fontSize: 12,
  },
  md: {
    fontSize: 16,
  },
  lg: {
    fontSize: 20,
  },
});

const Input = ({ size = 'md', ...props }) => (
  <TextInput
    style={{
      ...size && styles[size],
      ...styles.input,
    }}
    {...props}
  />
);

export default forwardRef(Input);

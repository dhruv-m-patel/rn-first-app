import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  input: {
    width: '95%',
    borderBottomColor: theme.color.border,
    borderBottomWidth: 1,
    marginVertical: 10,
    padding: 10,
    fontSize: theme.baseFontSize,
    color: theme.baseTextColor,
  },
});

const Input = React.forwardRef(({
  style: customStyle,
  ...props
}, ref) => (
  <TextInput
    ref={ref}
    style={{ ...styles.input, ...customStyle }}
    {...props}
  />
));

export default Input;

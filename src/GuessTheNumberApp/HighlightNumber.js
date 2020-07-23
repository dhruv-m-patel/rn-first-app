import React from 'react';
import { StyleSheet } from 'react-native';
import Text from '../common/components/Text';
import theme from '../common/theme';

const styles = StyleSheet.create({
  highlightNumber: {
    fontSize: 22,
    borderColor: theme.color.accent,
    color: theme.color.accent,
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
});

const HighlightNumber = ({
  number,
  color,
  style: customStyle,
  ...props
}) => (
  <Text
    style={{ ...styles.highlightNumber, ...customStyle, ...color && { color, borderColor: color } }}
    {...props}
    bold
  >
    {number}
  </Text>
);

export default HighlightNumber;

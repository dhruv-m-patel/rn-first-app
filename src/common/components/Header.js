import React from 'react';
import { StyleSheet } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
  header: {
    fontSize: 26,
    fontWeight: '400',
    color: '#333333',
    marginBottom: 10,
  },
});

const CenteredContent = ({
  style: customStyle,
  ...props
}) => (
  <Text
    style={{ ...styles.header, ...customStyle }}
    {...props}
  />
);

export default CenteredContent;

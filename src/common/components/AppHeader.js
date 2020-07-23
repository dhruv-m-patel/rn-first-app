import React from 'react';
import { View, StyleSheet } from 'react-native';
import theme from '../theme';
import Text from './Text';

const styles = StyleSheet.create({
  appHeader: {
    width: '100%',
    height: 90,
    paddingTop: 30,
    backgroundColor: theme.color.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: theme.baseFontSize + 4,
    color: theme.baseTextColor,
  },
});

const AppHeader = ({
  title,
  style: customStyle,
  ...props
}) => (
  <View style={{ ...styles.appHeader, ...customStyle }} {...props}>
    <Text bold style={styles.title}>{title}</Text>
  </View>
);

export default AppHeader;

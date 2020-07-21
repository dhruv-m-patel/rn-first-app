import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import theme from './theme';

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
    fontWeight: 'bold',
    color: theme.baseTextColor,
  },
});

const AppHeader = ({
  title,
  style: customStyle,
  ...props
}) => (
  <View style={{ ...styles.appHeader, ...customStyle }} {...props}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default AppHeader;

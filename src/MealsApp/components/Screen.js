import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppHeader from '../../common/components/AppHeader';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Screen = ({
  title,
  style: customStyle,
  children,
  ...props,
}) => (
  <View style={styles.screen} {...props}>
    <AppHeader title={title} />
    {children}
  </View>
);

export default Screen;

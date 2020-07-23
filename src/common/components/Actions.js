import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    marginHorizontal: 10,
  },
});

const ActionButton = ({
  width = '45%',
  style: customStyle,
  ...props
}) => (
  <Button
    width={width}
    style={{ ...styles.button, ...customStyle }}
    {...props}
  />
);

const Actions = ({
  style: customStyle,
  ...props
}) => (
  <View
    style={{ ...styles.actions, ...customStyle }}
    {...props}
  />
);

Actions.Button = ActionButton;

export default Actions;

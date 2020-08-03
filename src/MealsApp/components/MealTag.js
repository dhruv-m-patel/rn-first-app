import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from '../../common/components/Text';

const styles = StyleSheet.create({
  tag: {
    borderWidth: 1,
    borderColor: '#d4d3d3',
    borderRadius: 3,
    backgroundColor: '#d4d3d3',
    paddingVertical: 1,
    paddingHorizontal: 5,
    marginRight: 10,
    marginVertical: 5,
  },
  tagContent: {
    fontSize: 12,
    color: 'black',
  },
});

const MealTag = ({
  text,
}) => (
  <View style={styles.tag}>
    <Text bold style={styles.tagContent}>{text}</Text>
  </View>
);

export default MealTag;

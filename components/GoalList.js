import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import List from './List';

const styles = StyleSheet.create({
  goalListItem: {
    borderWidth: 1,
    borderColor: '#d3d3d3',
    marginBottom: 10,
    padding: 10,
    width: '100%',
  },
});

const GoalList = ({ items = [], onResetGoals }) => (
  <View>
    <List
      data={items}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <View style={styles.goalListItem}>
          <Text>{item.goal}</Text>
        </View>
      )}
    />
    {!!items.length && (
      <Button
        onPress={onResetGoals}
        title="Reset Goals"
      />
    )}
  </View>
);

export default GoalList;

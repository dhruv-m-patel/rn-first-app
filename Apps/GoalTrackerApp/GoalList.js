import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import List from '../../components/List';
import Flex from '../../components/Flex';

const styles = StyleSheet.create({
  goalListItem: {
    borderWidth: 1,
    borderColor: '#d3d3d3',
    marginBottom: 10,
    padding: 10,
    width: '100%',
  }
});

const GoalList = ({
  items = [],
  onResetGoals,
  onDeleteGoal
}) => {
  const handleDeleteGoal = (goalId) => {
    onDeleteGoal(goalId);
  };

  return (
    <View>
      <List
        data={items}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Flex style={styles.goalListItem}>
            <Flex.Content width="90%">
              <Text>{item.goal}</Text>
            </Flex.Content>
            <Flex.Content width="10%" style={{ padding: 0, margin: -10 }}>
              <Button
                title="X"
                onPress={() => handleDeleteGoal(item.id)}
                color="red"
              />
            </Flex.Content>
          </Flex>
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
}

export default GoalList;

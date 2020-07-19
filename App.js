import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import AppContainer from './components/AppContainer';
import Header from './components/Header';
import List from './components/List';
import Flex from './components/Flex';

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  goalListItem: {
    borderWidth: 1,
    borderColor: '#d3d3d3',
    marginBottom: 10,
    padding: 10,
    width: '100%',
  },
  goalInput: {
    padding: 10,
    borderBottomColor: '#d3d3d3',
    borderBottomWidth: 1,
    width: '80%',
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

const GoalInput = ({ onAddGoal }) => {
  const [courseGoal, setCourseGoal] = useState('');

  const handleAddGoal = () => {
    onAddGoal(courseGoal);
  };

  return (
    <Flex style={{ alignItems: 'space-around' }}>
      <Flex.Content width="80%">
        <TextInput
          placeholder="Course Goal"
          style={styles.goalInput}
          onChangeText={setCourseGoal}
          value={courseGoal}
        />
      </Flex.Content>
      <Flex.Content width='20%'>
        <Button
          title="ADD"
          onPress={handleAddGoal}
        />
      </Flex.Content>
    </Flex>
  );
}

export default function App() {
  const [goals, setGoals] = useState([]);

  const handleAddGoal = (goal) => {
    setGoals(currentGoals => [
      ...currentGoals,
      {
        id: (currentGoals.length + 1).toString(),
        goal,
      },
    ]);
  };

  const handleResetGoals = () => {
    setGoals([]);
  };

  return (
    <AppContainer style={styles.container}>
      <Header>Track Your Goals</Header>
      <GoalInput onAddGoal={handleAddGoal} />
      <Text />
      <GoalList items={goals} onResetGoals={handleResetGoals} />
    </AppContainer>
  );
}

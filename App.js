import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import AppContainer from './components/AppContainer';
import Header from './components/Header';
import Flex from './components/Flex';

const styles = StyleSheet.create({
  goalInput: {
    padding: 10,
    borderBottomColor: '#d3d3d3',
    borderBottomWidth: 1,
    width: '80%',
  },
  goalListItem: {
    borderWidth: 1,
    borderColor: '#d3d3d3',
    marginTop: 10,
    marginBottom: 5,
    padding: 10,
    width: '100%',
  },
  container: {
    paddingLeft: 20,
    paddingRight: 20,
  },
});

const GoalInput = ({ onAddGoal }) => {
  const [courseGoal, setCourseGoal] = useState('');

  const handleAddGoal = () => {
    onAddGoal(courseGoal);
  };

  return (
    <Flex>
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

const GoalList = ({ goals, onResetGoals }) => (
  <View>
    {goals.map(item => (
      <View key={item.id} style={styles.goalListItem}>
        <Text>{item.goal}</Text>
      </View>
    ))}
    {!!goals.length && (
      <Button
        onPress={onResetGoals}
        title="Reset Goals"
      />
    )}
  </View>
);

export default function App() {
  const [goals, setGoals] = useState([]);

  const handleAddGoal = (goal) => {
    setGoals(currentGoals => [
      ...currentGoals,
      { id: goals.length + 1, goal },
    ]);
  };

  const handleResetGoals = () => {
    setGoals([]);
  };

  return (
    <AppContainer style={styles.container}>
      <Header>Track Your Goals</Header>
      <GoalInput onAddGoal={handleAddGoal} />
      <GoalList goals={goals} onResetGoals={handleResetGoals} />
    </AppContainer>
  );
}

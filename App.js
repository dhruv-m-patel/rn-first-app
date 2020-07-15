import React, { useState } from 'react';
import { Text, StyleSheet } from 'react-native';
import AppContainer from './components/AppContainer';
import Header from './components/Header';
import GoalInput from './components/GoalInput';
import GoalList from './components/GoalList';

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
  },
});

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

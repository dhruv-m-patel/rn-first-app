import React, { useState } from 'react';
import { Modal, Text, Button, StyleSheet } from 'react-native';
import AppContainer from '../../components/AppContainer';
import Header from '../../components/Header';
import GoalInput from './GoalInput';
import GoalList from './GoalList';

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export default function GoalTrackerApp() {
  const [goals, setGoals] = useState([]);
  const [shouldShouldAddGoal, setShouldShowAddGoal] = useState(false);

  const handleAddGoal = (goal) => {
    setGoals(currentGoals => [
      ...currentGoals,
      {
        id: (currentGoals.length + 1).toString(),
        goal,
      },
    ]);
    setShouldShowAddGoal(false);
  };

  const handleDeleteGoal = (goalId) => {
    setGoals(currentGoals => currentGoals.filter(goal => goal.id !== goalId));
  };

  const onAddGoal = () => {
    setShouldShowAddGoal(true);
  };

  const handleCancelAddGoal = () => {
    setShouldShowAddGoal(false);
  };

  const handleResetGoals = () => {
    setGoals([]);
  };

  return (
    <AppContainer style={styles.container}>
      <Header>Track Your Goals</Header>
      <Modal
        visible={shouldShouldAddGoal}
        animationType="slide"
      >
        <GoalInput
          onAddGoal={handleAddGoal}
          onCancel={handleCancelAddGoal}
        />
      </Modal>
      <Button
        onPress={onAddGoal}
        title="Add Goal"
      />
      <Text />
      <GoalList
        items={goals}
        onResetGoals={handleResetGoals}
        onDeleteGoal={handleDeleteGoal}
      />
    </AppContainer>
  );
}

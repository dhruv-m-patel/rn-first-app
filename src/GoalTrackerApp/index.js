import React, { useState } from 'react';
import { Modal, Text, Button, SafeAreaView } from 'react-native';
import AppContainer from '../common/components/AppContainer';
import GoalInput from './GoalInput';
import GoalList from './GoalList';
import AppHeader from '../common/components/AppHeader';
import Card from '../common/components/Card';

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
    <AppContainer>
      <AppHeader title="Track Your Goals" />
      <Card>
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
        <SafeAreaView>
          <GoalList
            items={goals}
            onResetGoals={handleResetGoals}
            onDeleteGoal={handleDeleteGoal}
          />
        </SafeAreaView>
      </Card>
    </AppContainer>
  );
}

import React, { useState } from 'react';
import { Modal, View, Text, TextInput, Button, StyleSheet } from 'react-native';
import AppContainer from './components/AppContainer';
import Header from './components/Header';
import List from './components/List';
import Flex from './components/Flex';
import CenteredContent from './components/Header';

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
  goalInputContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  goalInput: {
    padding: 10,
    borderBottomColor: '#d3d3d3',
    borderBottomWidth: 1,
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

const GoalInput = ({ onAddGoal, onCancel }) => {
  const [courseGoal, setCourseGoal] = useState('');

  const handleAddGoal = () => {
    onAddGoal(courseGoal);
  };

  const handleCancel = () => {
    setCourseGoal('');
    onCancel();
  };

  return (
    <Flex style={styles.goalInputContainer}>
      <Flex.Content>
        <TextInput
          placeholder="Course Goal"
          style={styles.goalInput}
          onChangeText={setCourseGoal}
          value={courseGoal}
        />
      </Flex.Content>
      <Flex.Content>
        <Button
          title="SAVE GOAL"
          onPress={handleAddGoal}
        />
      </Flex.Content>
      <Flex.Content>
        <Button
          title="CANCEL"
          onPress={handleCancel}
          color="red"
        />
      </Flex.Content>
    </Flex>
  );
}

export default function App() {
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
      <Modal visible={shouldShouldAddGoal} animationType="slide">
        <GoalInput onAddGoal={handleAddGoal} onCancel={handleCancelAddGoal} />
      </Modal>
      <Button
        onPress={onAddGoal}
        title="Add Goal"
      />
      <Text />
      <GoalList items={goals} onResetGoals={handleResetGoals} />
    </AppContainer>
  );
}

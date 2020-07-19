import React, { useState, useRef, useEffect } from 'react';
import { Modal, View, Text, TextInput, Button, StyleSheet } from 'react-native';
import AppContainer from '../components/AppContainer';
import Header from '../components/Header';
import List from '../components/List';
import Flex from '../components/Flex';

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

const GoalInput = ({
  onAddGoal,
  onCancel,
}) => {
  const [courseGoal, setCourseGoal] = useState('');
  const inputRef = useRef();

  const handleAddGoal = () => {
    onAddGoal(courseGoal);
  };

  const handleCancel = () => {
    setCourseGoal('');
    onCancel();
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <Flex style={styles.goalInputContainer}>
      <Flex.Content>
        <TextInput
          ref={inputRef}
          placeholder="Course Goal"
          style={styles.goalInput}
          onChangeText={setCourseGoal}
          value={courseGoal}
        />
      </Flex.Content>
      <Flex.Content>
        <Button
          title="Save Goal"
          onPress={handleAddGoal}
        />
      </Flex.Content>
      <Flex.Content>
        <Button
          title="Cancel"
          onPress={handleCancel}
          color="red"
        />
      </Flex.Content>
    </Flex>
  );
}

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

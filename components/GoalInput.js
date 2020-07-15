import React, { useState } from 'react';
import { TextInput, Button, StyleSheet } from 'react-native';
import Flex from './Flex';

const styles = StyleSheet.create({
  goalInput: {
    padding: 10,
    borderBottomColor: '#d3d3d3',
    borderBottomWidth: 1,
    width: '80%',
  },
});

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

export default GoalInput;

import React, { useState, useRef, useEffect } from 'react';
import { TextInput, Button, StyleSheet } from 'react-native';
import Flex from '../../components/Flex';

const styles = StyleSheet.create({
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

export default GoalInput;

import React, { useState, useRef, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import Flex from '../common/components/Flex';

const styles = StyleSheet.create({
  goalInputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  goalInput: {
    width: '100%',
    padding: 10,
    borderBottomColor: '#d3d3d3',
    borderBottomWidth: 1,
  },
  buttonContainer: {
    marginTop: 10,
  }
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
        <View style={styles.buttonContainer}>
          <Button
            title="Save Goal"
            onPress={handleAddGoal}
          />
        </View>
      </Flex.Content>
      <Flex.Content>
        <View style={styles.buttonContainer}>
          <Button
            title="Cancel"
            onPress={handleCancel}
            color="red"
          />
        </View>
      </Flex.Content>
    </Flex>
  );
}

export default GoalInput;

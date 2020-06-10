import React, { useState, useCallback, useRef, useMemo } from 'react';
import { Button, useWindowDimensions } from 'react-native';
import AppContainer from './components/AppContainer';
import Header from './components/Header';
import Card from './components/Card';
import Text from './components/Text';
import Input from './components/Input';
import CenteredContent from './components/CenteredContent';

export default function App() {
  const [goals, setGoals] = useState([]);
  const [goalInput, setGoalInput] = useState();
  const { width, height } = useWindowDimensions();
  const inputRef = useRef();

  const handleGoalChanged = useCallback((text) => {
    setGoalInput(text)
  }, []);

  const handleAddGoal = useCallback(() => {
    setGoals([].concat(
      goals,
      [{
        id: goals.length + 1,
        goal: goalInput,
      }],
    ));
    setGoalInput();
    console.log('inputRef: ', inputRef);
    inputRef.current?.focus();
  }, [goals, goalInput, inputRef.current]);

  const handleReset = useCallback(() => {
    setGoals([]);
  }, []);

  const memoizedInput = useMemo(() => (
    <Input
      ref={inputRef}
      onChangeText={handleGoalChanged}
      onBlur={handleAddGoal}
      value={goalInput}
      width={width}
      placeholder="Add New Goal"
      size="lg"
      autoFocus
    />
  ), [goalInput, handleGoalChanged, handleAddGoal, width, inputRef]);

  return (
    <AppContainer>
      <Header>Track Your Goals</Header>
      {goals.length
        ? memoizedInput
        : (
          <CenteredContent height={height - 200} width={width}>
            {memoizedInput}
          </CenteredContent>
        )
      }
      {goals.map(({ id, goal }) => (
        <Card key={id.toString()}>
          <Text>{goal}</Text>
        </Card>
      ))}
      {!!goals.length && (
        <Button title="Reset Goals" onPress={handleReset} />
      )}
    </AppContainer>
  );
}

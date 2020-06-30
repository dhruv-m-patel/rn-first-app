import React, { useState, useCallback, useRef, useMemo } from 'react';
import { View, Button, useWindowDimensions, FlatList } from 'react-native';
import AppContainer from './components/AppContainer';
import Header from './components/Header';
import Card from './components/Card';
import Text from './components/Text';
import Input from './components/Input';
import CenteredContent from './components/CenteredContent';

export default function App() {
  const [currentGoals, setCurrentGoals] = useState([]);
  const [input, setInput] = useState('');
  const { width, height } = useWindowDimensions();
  const inputRef = useRef(null);

  const handleGoalChanged = useCallback((text) => {
    setInput(text)
  }, []);

  const handleAddGoal = useCallback(() => {
    setCurrentGoals([...currentGoals, { id: currentGoals.length + 1, goal: input }]);
    setInput();
    inputRef.current?.focus();
  }, [currentGoals, input, inputRef.current]);

  const handleReset = useCallback(() => {
    setCurrentGoals([]);
  }, []);

  const memoizedInput = useMemo(() => (
    <Input
      ref={inputRef}
      onChangeText={handleGoalChanged}
      onBlur={handleAddGoal}
      value={input}
      width={width}
      placeholder="Add New Goal"
      size="lg"
      autoFocus
    />
  ), [input, handleGoalChanged, handleAddGoal, width, inputRef]);

  return (
    <AppContainer>
      <Header>Track Your Goals</Header>
      {currentGoals.length
        ? memoizedInput
        : (
          <CenteredContent height={height - 200} width={width}>
            {memoizedInput}
          </CenteredContent>
        )
      }
      {!!currentGoals.length && (
        <View>
          <FlatList
            keyExtractor={item => item.id}
            data={currentGoals}
            renderItem={({ item }) => (
              <Card>
                <Text>{item.goal}</Text>
              </Card>
            )}
          />
          <Button title="Reset Goals" onPress={handleReset} />
        </View>
      )}
    </AppContainer>
  );
}

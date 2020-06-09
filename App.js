import React, { useState, useCallback } from 'react';
import { Button } from 'react-native';
import AppContainer from './components/AppContainer';
import Header from './components/Header';
import Text from './components/Text';
import CenteredContent from './components/CenteredContent';

export default function App() {
  const [counter, setCounter] = useState(0);

  const handleIncrement = useCallback(() => {
    setCounter(counter + 1);
  }, [counter]);

  const handleDecrement = useCallback(() => {
    setCounter(counter - 1);
  }, [counter]);

  const handleReset = useCallback(() => {
    setCounter(0);
  }, []);

  return (
    <AppContainer>
      <Header>Track Your Goals</Header>
      <Text>Click "+" to increment, click "-" to decrement</Text>
      <Button title="-" onPress={handleDecrement} />
      <CenteredContent>
        <Text centered>{counter}</Text>
      </CenteredContent>
      <Button title="+" onPress={handleIncrement} />
      <Text />
      <Text />
      <Button title="Reset Counter" onPress={handleReset} />
    </AppContainer>
  );
}

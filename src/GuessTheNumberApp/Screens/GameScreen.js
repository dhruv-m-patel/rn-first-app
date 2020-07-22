import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Button, TextInput, StyleSheet, Alert } from 'react-native';
import Actions from '../../common/components/Actions';
import Card from '../../common/components/Card';
import AppHeader from '../AppHeader';
import theme from '../theme';

function generateRandomNumberGuess(min, max, exclude) {
  const minimum = Math.ceil(min);
  const maximum = Math.floor(max);
  const guess = Math.floor(Math.random() * (maximum - minimum) + minimum);
  return guess === exclude ? generateRandomNumberGuess(min, max, exclude) : guess;
}

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    alignItems: 'center',
  },
  selectedNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    borderColor: theme.color.accent,
    color: theme.color.accent,
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
  },
  systemGuess: {
    fontSize: 18,
    fontWeight: 'bold',
    borderColor: theme.color.primary,
    color: theme.color.primary,
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
  }
});

const GameScreen = ({
  selectedNumber,
  onGameOver,
}) => {
  const [systemGuess, setSystemGuess] = useState(() => generateRandomNumberGuess(1, 99, selectedNumber));
  const [numberOfRounds, setNumberOfRounds] = useState(0);
  const lowestSystemGuess = useRef(1);
  const highestSystemGuess = useRef(100);

  const handleGenerateNextGuess = direction => {
    if ((direction === 'lower' && systemGuess < selectedNumber ) || (direction === 'greater' && systemGuess > selectedNumber)) {
      Alert.alert('Oh, no!', 'Nope, the system guess is a different number.', [{ text: 'Sorry!', style: 'cancel' }]);
      return;
    }

    if (direction === 'lower') {
      highestSystemGuess.current = systemGuess;
    } else {
      lowestSystemGuess.current = systemGuess;
    }
    const nextGuess = generateRandomNumberGuess(lowestSystemGuess.current, highestSystemGuess.current);
    setSystemGuess(nextGuess);
    setNumberOfRounds(rounds => rounds + 1);
  };

  useEffect(() => {
    if (systemGuess === selectedNumber) {
      onGameOver(numberOfRounds);
    }
  }, [systemGuess, selectedNumber, onGameOver, numberOfRounds]);

  return (
    <View>
      <AppHeader title="Guess The Number!" />
      <View style={styles.screen}>
        <Card>
          <Text>Your Guess</Text>
          <Text />
          <Text style={styles.selectedNumber}>{selectedNumber}</Text>
          <Text />
          <Text />
          <Text>Would system's next guess be</Text>
          <Text>lower or greater?</Text>
          <Text />
          <Actions>
            <Actions.Button title="Lower" onPress={() => { handleGenerateNextGuess('lower'); }} />
            <Actions.Button title="Greater" onPress={() => { handleGenerateNextGuess('greater'); }} />
          </Actions>
        </Card>
        <Text />
        <Card style={{ width: '50%' }}>
          <Text>System's Guess</Text>
          <Text />
          <Text style={styles.systemGuess}>{systemGuess}</Text>
          <Text />
        </Card>
      </View>
    </View>
  );
}

export default GameScreen;

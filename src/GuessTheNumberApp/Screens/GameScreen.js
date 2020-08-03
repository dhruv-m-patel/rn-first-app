import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import Actions from '../../common/components/Actions';
import Card from '../../common/components/Card';
import AppHeader from '../../common/components/AppHeader';
import theme from '../../common/theme';
import Text from '../../common/components/Text';
import HighlightNumber from '../HighlightNumber';

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
});

const GameScreen = ({
  selectedNumber,
  onGameOver,
}) => {
  const [systemGuess, setSystemGuess] = useState(
    () => generateRandomNumberGuess(1, 99, selectedNumber),
  );
  const [numberOfRounds, setNumberOfRounds] = useState(0);
  const lowestSystemGuess = useRef(1);
  const highestSystemGuess = useRef(100);

  const handleGenerateNextGuess = (direction) => {
    if ((direction === 'lower' && systemGuess < selectedNumber) || (direction === 'greater' && systemGuess > selectedNumber)) {
      Alert.alert('Oh, no!', 'Nope, the system guess is a different number.', [{ text: 'Sorry!', style: 'cancel' }]);
      return;
    }

    if (direction === 'lower') {
      highestSystemGuess.current = systemGuess;
    } else {
      lowestSystemGuess.current = systemGuess;
    }
    const nextGuess = generateRandomNumberGuess(
      lowestSystemGuess.current,
      highestSystemGuess.current,
    );
    setSystemGuess(nextGuess);
    setNumberOfRounds((rounds) => rounds + 1);
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
          <Text bold>Your Guess</Text>
          <HighlightNumber number={selectedNumber} />
          <Text style={{ fontSize: 16, marginTop: 15 }}>Would system's next guess be</Text>
          <Text style={{ fontSize: 16, marginBottom: 20 }}>lower or greater?</Text>
          <Actions>
            <Actions.Button
              title="Lower"
              onPress={() => { handleGenerateNextGuess('lower'); }}
            />
            <Actions.Button
              title="Greater"
              onPress={() => { handleGenerateNextGuess('greater'); }}
            />
          </Actions>
        </Card>
        <Text />
        <Card style={{ width: '50%' }}>
          <Text bold>System's Guess</Text>
          <HighlightNumber
            number={systemGuess}
            color={theme.baseTextColor}
          />
        </Card>
      </View>
    </View>
  );
};

export default GameScreen;

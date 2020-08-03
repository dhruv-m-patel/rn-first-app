import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import NumberSelection from './Screens/NumberSelection';
import GameScreen from './Screens/GameScreen';
import GameOver from './Screens/GameOver';

const styles = StyleSheet.create({
  gameContainer: {
    flex: 1,
  },
});

export default function GuessTheNumberApp() {
  const [selectedNumber, setSelectedNumber] = useState(undefined);
  const [endGame, setEndGame] = useState(false);
  const [totalRounds, setTotalRounds] = useState(0);

  const handleNumberSelection = (num) => {
    setSelectedNumber(num);
  };

  const handleResetNumber = () => {
    setSelectedNumber(undefined);
  };

  const handleGameOver = (rounds) => {
    setTotalRounds(rounds);
    setEndGame(true);
  };

  const handlePlayAgain = () => {
    setSelectedNumber(undefined);
    setEndGame(false);
    setTotalRounds(0);
  };

  if (endGame && totalRounds) {
    return (
      <GameOver
        roundsPlayed={totalRounds}
        onPlayAgain={handlePlayAgain}
      />
    );
  }

  return (
    <View style={styles.gameContainer}>
      {!selectedNumber
        ? (
          <NumberSelection
            onSelectNumber={handleNumberSelection}
            onResetNumber={handleResetNumber}
          />
        )
        : (
          <GameScreen
            selectedNumber={selectedNumber}
            onGameOver={handleGameOver}
          />
        )
      }
    </View>
  );
}

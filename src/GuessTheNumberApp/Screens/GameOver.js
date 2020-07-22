import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Actions from '../../common/components/Actions';
import Card from '../../common/components/Card';
import AppHeader from '../AppHeader';
import theme from '../theme';

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    alignItems: 'center',
  },
  title: {
    color: theme.color.accent,
    fontSize: 22,
    fontWeight: 'bold',
  },
});

const GameOver = ({
  roundsPlayed,
  onPlayAgain,
}) => (
  <View>
    <AppHeader title="Game Over!" />
    <View style={styles.screen}>
      <Card style={{ textAlign: 'center' }}>
        <Text />
        <Text style={styles.title}>Congratulations!</Text>
        <Text />
        <Text />
        <Text>You played total {roundsPlayed} rounds to finish the game!</Text>
        <Text />
        <Text />
        <Actions style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Actions.Button title="Play Again" color={theme.color.accent} onPress={onPlayAgain} />
        </Actions>
      </Card>
    </View>
  </View>
);

export default GameOver;

import React from 'react';
import { View, StyleSheet } from 'react-native';
import Actions from '../../common/components/Actions';
import Card from '../../common/components/Card';
import AppHeader from '../../common/components/AppHeader';
import theme from '../../common/theme';
import Text from '../../common/components/Text';
import HighlightNumber from '../HighlightNumber';

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    alignItems: 'center',
  },
  card: {
    textAlign: 'center',
  },
  title: {
    color: theme.color.accent,
    fontSize: 22,
    fontWeight: 'bold',
  },
  line1: {
    marginTop: 15,
  },
  line3: {
    marginBottom: 15,
  },
  actions: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});

const GameOver = ({
  roundsPlayed,
  onPlayAgain,
}) => (
  <View>
    <AppHeader title="Game Over!" />
    <View style={styles.screen}>
      <Card style={styles.card}>
        <Text style={styles.title}>Congratulations!</Text>
        <Text style={styles.line1}>You played</Text>
        <HighlightNumber
          number={roundsPlayed}
          color={theme.baseTextColor}
        />
        <Text style={styles.line3}>rounds to finish the game!</Text>
        <Actions style={styles.actions}>
          <Actions.Button
            title="Play Again"
            color={theme.color.primary}
            onPress={onPlayAgain}
          />
        </Actions>
      </Card>
    </View>
  </View>
);

export default GameOver;

import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, Alert } from 'react-native';
import AppHeader from '../AppHeader';
import theme from '../theme';
import Card from '../../common/components/Card';

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginVertical: 20,
  },
  inputContainer: {

  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  button: {
    width: '45%',
    marginHorizontal: 10,
  },
});

const NumberSelection = ({
  onSelectNumber,
  onResetNumber,
}) => {
  const [enteredNumber, setEnteredNumber] = useState('');
  const [selectedNumber, setSelectedNumber] = useState();
  const [confirmed, setConfirmed] = useState(false);

  const handleSelectNumber = () => {
    const chosenNumber = parseInt(enteredNumber, 10);
    if (chosenNumber !== NaN && chosenNumber > 0 && chosenNumber <=99) {
      setSelectedNumber(chosenNumber);
      setConfirmed(true);
    } else {
      Alert.alert('Invalid input', 'Select a number between 0-99');
    }
  };

  const handleResetNumber = () => {
    setConfirmed(false);
    setSelectedNumber(undefined);
    setEnteredNumber('');
  };

  return (
    <View>
      <AppHeader title="Start a New Game!" />
      <View style={styles.screen}>
        <Card>
          <Text style={styles.title}>Select a Number</Text>
          <TextInput style={styles.inputContainer} />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="Reset"
                color={theme.color.accent}
                onPress={handleResetNumber}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Confirm"
                color={theme.color.primary}
                onPress={handleSelectNumber}
              />
            </View>
          </View>
        </Card>
      </View>
      {confirmed && !!selectedNumber && (
        <View>
          <Text>You chose:</Text>
          <Text />
          <Text>{selectedNumber}</Text>
        </View>
      )}
    </View>
  );
}

export default NumberSelection;

import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import AppHeader from '../../common/components/AppHeader';
import theme from '../../common/theme';
import Card from '../../common/components/Card';
import Input from '../../common/components/Input';

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
    textAlign: 'center',
    fontSize: 16,
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
  numberSelectionCard: {
    width: 200,
    maxWidth: '50%',
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
});

const NumberSelection = ({
  onSelectNumber,
  onResetNumber,
}) => {
  const inputRef = useRef();
  const [enteredNumber, setEnteredNumber] = useState('');
  const [selectedNumber, setSelectedNumber] = useState();
  const [confirmed, setConfirmed] = useState(false);

  const handleNumberInput = text => {
    setEnteredNumber(text.replace(/[^0-9]/g, ''));
  };

  const handleConfirmNumber = () => {
    const chosenNumber = parseInt(enteredNumber, 10);
    if (chosenNumber !== NaN && chosenNumber > 0 && chosenNumber <=99) {
      setConfirmed(true);
      setSelectedNumber(chosenNumber);
    } else {
      Alert.alert('Invalid input', 'Select a number between 0-99');
    }
  };

  const handleSelectNumber = () => {
    onSelectNumber(selectedNumber);
  };

  const handleResetNumber = () => {
    setEnteredNumber('');
    setSelectedNumber(undefined);
    setConfirmed(false);
    onResetNumber();
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef]);

  return (
    <TouchableWithoutFeedback
      onPress={() => { Keyboard.dismiss() }}
    >
      <View>
        <AppHeader title="Start a New Game!" />
        <View style={styles.screen}>
          <Card>
            <Text style={styles.title}>Select a Number</Text>
            <Input
              ref={inputRef}
              style={styles.inputContainer}
              placeholder="0-99"
              onChangeText={handleNumberInput}
              maxLength={2}
              keyboardType="numeric"
            />
            <View style={styles.buttonContainer}>
              <View style={styles.button}>
                <Button
                  title="Reset"
                  onPress={handleResetNumber}
                />
              </View>
              <View style={styles.button}>
                <Button
                  title="Confirm"
                  color={theme.color.primary}
                  onPress={handleConfirmNumber}
                />
              </View>
            </View>
          </Card>
          {confirmed && !!selectedNumber && (
            <Card style={styles.numberSelectionCard}>
              <Text>You chose</Text>
              <Text />
              <Text style={styles.selectedNumber}>{selectedNumber}</Text>
              <Button title="Start Game" onPress={handleSelectNumber} />
            </Card>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default NumberSelection;

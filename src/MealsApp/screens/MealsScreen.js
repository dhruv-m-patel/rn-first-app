import React from 'react';
import { Text, Button } from 'react-native';
import Screen from '../components/Screen';

const MealsScreen = ({ navigation }) => (
  <Screen>
    <Text>Meals</Text>
    <Button title="Go to Meal Recipe" onPress={() => { navigation.navigate({ routeName: 'Recipe' }) }} />
  </Screen>
);

export default MealsScreen;

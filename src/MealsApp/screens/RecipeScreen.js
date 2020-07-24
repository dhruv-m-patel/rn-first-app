import React from 'react';
import { Text, Button } from 'react-native';
import Screen from '../components/Screen';

const RecipeScreen = ({ navigation }) => (
  <Screen>
    <Text>Recipe</Text>
    <Button title="Go to Meals" onPress={() => { navigation.replace({ routeName: 'Meals' }) }} />
  </Screen>
);

export default RecipeScreen;

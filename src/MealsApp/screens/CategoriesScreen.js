import React from 'react';
import { Text, Button } from 'react-native';
import Screen from '../components/Screen';

const CategoriesScreen = ({
  navigation,
}) => (
  <Screen>
    <Text>Categories coming soon</Text>
    <Button title="Go to Meals" onPress={() => { navigation.navigate({ routeName: 'Meals' }) }} />
  </Screen>
);

export default CategoriesScreen;

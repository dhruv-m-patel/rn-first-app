import React from 'react';
import { Text, Button } from 'react-native';
import Screen from '../components/Screen';
import * as Data from '../static/data.json';

const MealsScreen = ({ navigation }) => {
  return (
    <Screen>
      <Text>Meals</Text>
      <Button title="Go to Meal Recipe" onPress={() => { navigation.navigate({ routeName: 'Recipe' }) }} />
    </Screen>
  );
};

MealsScreen.navigationOptions = ({ navigation }) => {
  const categoryId = navigation.getParam('categoryId');
  console.log('categoryId: ', categoryId);
  const categoryInContext = Data.categories.find(c => c.id === categoryId);

  return {
    headerTitle: categoryInContext.name,
  };
};

export default MealsScreen;

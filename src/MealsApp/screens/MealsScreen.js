import React from 'react';
import { StyleSheet } from 'react-native';
import Screen from '../components/Screen';
import * as Data from '../static/data.json';
import MealsList from '../components/MealsList';

const styles = StyleSheet.create({
  mealsScreen: {
    alignItems: 'flex-start',
  },
});

const MealsScreen = ({ navigation }) => {
  const categoryId = navigation.getParam('categoryId');
  const meals = Data.meals.filter(m => m.categoryIds.includes(categoryId));

  return (
    <Screen style={styles.mealsScreen}>
      <MealsList
        meals={meals}
        onPress={(mealId) => {
          navigation.navigate({
            routeName: 'Recipe',
            params: {
              mealId,
            },
          });
        }}
      />
    </Screen>
  );
};

MealsScreen.navigationOptions = ({ navigation }) => {
  const categoryId = navigation.getParam('categoryId');
  const categoryInContext = Data.categories.find(c => c.id === categoryId);

  return {
    headerTitle: `${categoryInContext.name} Meals`,
  };
};

export default MealsScreen;

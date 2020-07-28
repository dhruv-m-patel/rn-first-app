import React from 'react';
import Screen from '../components/Screen';
import MealsList from '../components/MealsList';

const FavoritesScreen = ({
  favoriteMeals,
  navigation,
}) => (
  <Screen>
    <MealsList
      meals={favoriteMeals}
      onPress={mealId => {
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

export default FavoritesScreen;

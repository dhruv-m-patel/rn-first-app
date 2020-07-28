import React from 'react';
import Screen from '../components/Screen';
import MealsList from '../components/MealsList';
import * as Data from '../static/data.json';

const FavoritesScreen = ({
  favoriteMealIds = ['m1', 'm5'],
  navigation,
}) => {
  const favoriteMeals = favoriteMealIds.map(mealId => Data.meals.find(m => m.id == mealId));

  return (
    <Screen style={{ alignItems: 'flex-start' }}>
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
}

export default FavoritesScreen;

import React from 'react';
import { useSelector } from 'react-redux';
import Screen from '../../common/components/Screen';
import * as Data from '../static/data.json';
import MealsList from '../components/MealsList';

const MealsScreen = ({
  navigation,
}) => {
  const {
    favoriteMeals,
    filteredMeals,
  } = useSelector(({ meals }) => meals);

  const categoryId = navigation.getParam('categoryId');
  const meals = filteredMeals.filter((m) => m.categoryIds.includes(categoryId));

  return (
    <Screen>
      <MealsList
        meals={meals}
        onPress={(mealId) => {
          navigation.navigate({
            routeName: 'Recipe',
            params: {
              mealId,
              isFavorite: !!favoriteMeals.find((m) => m.id === mealId),
            },
          });
        }}
      />
    </Screen>
  );
};

MealsScreen.navigationOptions = ({ navigation }) => {
  const categoryId = navigation.getParam('categoryId');
  const categoryInContext = Data.categories.find((c) => c.id === categoryId);

  return {
    headerTitle: `${categoryInContext.name} Meals`,
  };
};

export default MealsScreen;

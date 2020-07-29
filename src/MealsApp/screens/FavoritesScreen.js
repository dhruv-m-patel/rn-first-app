import React from 'react';
import { HeaderButton, HeaderButtons, Item } from 'react-navigation-header-buttons';
import Screen from '../components/Screen';
import MealsList from '../components/MealsList';
import * as Data from '../static/data.json';
import ScreenHeaderButton from '../components/ScreenHeaderButton';

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

FavoritesScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'My Favorites',
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={ScreenHeaderButton}>
      <Item
        title="Menu"
        iconName={'ios-menu'}
        onPress={() => {
          navigation.toggleDrawer();
        }}
      />
    </HeaderButtons>
  )
});

export default FavoritesScreen;

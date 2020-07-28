import React from 'react';
import { HeaderButton, HeaderButtons, Item } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';
import Screen from '../components/Screen';
import MealsList from '../components/MealsList';
import * as Data from '../static/data.json';
import theme from '../../common/theme';

const MenuButton = props => (
  <HeaderButton
    IconComponent={Ionicons}
    iconSize={23}
    color={Platform.OS === 'android' ? theme.color.accent : undefined}
    {...props}
  />
);

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

FavoritesScreen.navigationOptions = {
  headerTitle: 'My Favorites',
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={MenuButton}>
      <Item
        title="Menu"
        iconName={'ios-menu'}
        onPress={() => {
          console.log('Menu button clicked');
        }}
      />
    </HeaderButtons>
  )
};

export default FavoritesScreen;

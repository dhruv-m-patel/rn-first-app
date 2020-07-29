import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';
import { View } from 'react-native';
import Screen from '../components/Screen';
import MealsList from '../components/MealsList';
import ScreenHeaderButton from '../components/ScreenHeaderButton';
import Text from '../../common/components/Text';

const FavoritesScreen = ({
  navigation,
}) => {
  const favoriteMeals = useSelector(({ meals }) => meals.favoriteMeals);

  return (
    <Screen>
      {favoriteMeals.length
        ? (
          <MealsList
            meals={favoriteMeals}
            onPress={mealId => {
              navigation.navigate({
                routeName: 'Recipe',
                params: {
                  mealId,
                  isFavorite: true,
                },
              });
            }}
          />
        )
        : (
          <View>
            <Text bold>You have no favorite meals set!</Text>
          </View>
        )
      }
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

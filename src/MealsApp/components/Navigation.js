import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CategoriesScreen from '../screens/CategoriesScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import MealsScreen from '../screens/MealsScreen';
import FiltersScreen from '../screens/FiltersScreen';
import RecipeScreen from '../screens/RecipeScreen';
import theme from '../../common/theme';

const screenNavigationOptions = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? theme.color.primary : undefined,
    },
    backgroundTintColor: Platform.OS === 'android' ? theme.baseTextColor : undefined,
  },
};

const screenNavigation = {
  Categories: CategoriesScreen,
  Meals: MealsScreen,
  Recipe: RecipeScreen
};

const favoritesScreens = {
  Favorites: FavoritesScreen,
  Recipe: RecipeScreen,
};

const mainNavigator = createStackNavigator(screenNavigation, screenNavigationOptions);

const favoritesNavigation = createStackNavigator(favoritesScreens, screenNavigationOptions);

const tabNavigationScreens = {
  Meals: {
    screen: mainNavigator,
    navigationOptions: {
      tabBarLabel: 'Menu',
      tabBarIcon: tabInfo => (
        <Ionicons
          name="ios-restaurant"
          size={25}
          color={tabInfo.tintColor}
        />
      ),
    },
  },
  Favorites: {
    screen: favoritesNavigation,
    navigationOptions: {
      tabBarLabel: 'My Favorites',
      tabBarIcon: tabInfo => (
        <Ionicons
          name="ios-star"
          size={25}
          color={tabInfo.tintColor}
        />
      ),
    },
  },
};

const tabNavigationOptions = {
  tabBarOptions: {
    activeTintColor: Platform.OS === 'android' ? theme.color.accent : theme.baseTextColor,
  },
};

const consolidatedNavigation = createBottomTabNavigator(tabNavigationScreens, tabNavigationOptions);

const filtersNavigator = createStackNavigator({
  Filters: FiltersScreen,
});

const drawerNavigationScreens = createDrawerNavigator({
  Menu: consolidatedNavigation,
  Filters: filtersNavigator,
});

export default createAppContainer(drawerNavigationScreens);

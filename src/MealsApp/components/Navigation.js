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

const appNavigationOptions = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? theme.color.primary : undefined,
    },
    backgroundTintColor: Platform.OS === 'android' ? theme.baseTextColor : undefined,
  },
};

const mainNavigatorScreens = {
  Categories: CategoriesScreen,
  Meals: MealsScreen,
  Recipe: RecipeScreen
};

const favoritesNavigatorScreens = {
  Favorites: FavoritesScreen,
  Recipe: RecipeScreen,
};

const screenNavigator = createStackNavigator(mainNavigatorScreens, appNavigationOptions);

const favoritesNavigator = createStackNavigator(favoritesNavigatorScreens, appNavigationOptions);

const tabNavigatorScreens = {
  Meals: {
    screen: screenNavigator,
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
    screen: favoritesNavigator,
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

const appNavigator = createBottomTabNavigator(tabNavigatorScreens, tabNavigationOptions);

const filtersNavigator = createStackNavigator({
  Filters: FiltersScreen,
});

const drawerNavigator = createDrawerNavigator({
  Menu: appNavigator,
  Filters: filtersNavigator,
});

export default createAppContainer(drawerNavigator);

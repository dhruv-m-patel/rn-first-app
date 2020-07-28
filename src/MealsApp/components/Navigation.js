import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CategoriesScreen from '../screens/CategoriesScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import MealsScreen from '../screens/MealsScreen';
import FiltersScreen from '../screens/FiltersScreen';
import RecipeScreen from '../screens/RecipeScreen';
import theme from '../../common/theme';

const screenNavigation = {
  Categories: CategoriesScreen,
  Meals: MealsScreen,
  Filters: FiltersScreen,
  Recipe: RecipeScreen
};

const screenNavigationOptions = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? theme.color.primary : undefined,
    },
    backgroundTintColor: Platform.OS === 'android' ? theme.baseTextColor : undefined,
  }
};

const mainNavigator = createStackNavigator(screenNavigation, screenNavigationOptions);

const tabNavigation = {
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
    screen: FavoritesScreen,
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

const consolidatedNavigation = createBottomTabNavigator(tabNavigation, tabNavigationOptions);

export default createAppContainer(consolidatedNavigation);

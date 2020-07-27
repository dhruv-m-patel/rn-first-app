import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { Platform } from 'react-native';
import CategoriesScreen from '../screens/CategoriesScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import MealsScreen from '../screens/MealsScreen';
import FiltersScreen from '../screens/FiltersScreen';
import RecipeScreen from '../screens/RecipeScreen';
import theme from '../../common/theme';

const config = {
  Categories: CategoriesScreen,
  Favorites: FavoritesScreen,
  Meals: MealsScreen,
  Filters: FiltersScreen,
  Recipe: RecipeScreen
};

const defaultStyles = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? theme.color.primary : undefined,
    },
    backgroundTintColor: Platform.OS === 'android' ? theme.baseTextColor : undefined,
  }
}

const navigator = createStackNavigator(config, defaultStyles);

export default createAppContainer(navigator);

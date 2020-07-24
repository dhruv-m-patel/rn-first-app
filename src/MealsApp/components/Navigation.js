import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import CategoriesScreen from '../screens/CategoriesScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import MealsScreen from '../screens/MealsScreen';
import FiltersScreen from '../screens/FiltersScreen';
import RecipeScreen from '../screens/RecipeScreen';

const navigator = createStackNavigator({
  Categories: CategoriesScreen,
  Favorites: FavoritesScreen,
  Meals: MealsScreen,
  Filters: FiltersScreen,
  Recipe: RecipeScreen
});

export default createAppContainer(navigator);

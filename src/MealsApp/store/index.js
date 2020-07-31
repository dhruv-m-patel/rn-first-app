import { createStore, combineReducers} from 'redux';
import * as Data from '../static/data.json';

const Actions = {
  UPDATE_FAVORITES: 'UpdateFavorites',
  UPDATE_FILTERS: 'UpdateFilters',
};

export function updateFavorites(mealId) {
  return {
    type: Actions.UPDATE_FAVORITES,
    mealId: mealId,
  };
}

export function updateFilters(filters) {
  return {
    type: Actions.UPDATE_FILTERS,
    filters,
  };
}

const initialState = {
  filteredMeals: Data.meals,
  favoriteMeals: [],
  filters: {
    isGlutenFree: undefined,
    isVegan: undefined,
    isVegetarian: undefined,
    isLectoseFree: undefined,
  },
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.UPDATE_FAVORITES:
      const shouldRemoveFavorite = !!state.favoriteMeals.find(m => m.id === action.mealId);
      return {
        ...state,
        favoriteMeals: shouldRemoveFavorite
          ? state.favoriteMeals.filter(m => m.id !== action.mealId)
          : [].concat(state.favoriteMeals, Data.meals.find(m => m.id === action.mealId)),
      };

    case Actions.UPDATE_FILTERS:
      const updatedFilters = {
        isGlutenFree: action.filters.isGlutenFree ? true : undefined,
        isVegan: action.filters.isVegan ? true : undefined,
        isVegetarian: action.filters.isVegetarian ? true : undefined,
        isLectoseFree: action.filters.isLectoseFree ? true : undefined,
      };

      return {
        ...state,
        filters: updatedFilters,
        filteredMeals: Data.meals.filter(m => (
          (updatedFilters.isGlutenFree && m.isGlutenFree)
          || (updatedFilters.isVegan && m.isVegan)
          || (updatedFilters.isVegetarian && m.isVegetarian)
          || (updatedFilters.isLectoseFree && m.isLectoseFree)
        )),
      };

    default:
      return state;
  }
};

export default createStore(
  combineReducers({
    meals: mealsReducer,
  }),
);

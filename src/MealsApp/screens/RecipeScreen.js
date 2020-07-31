import React, { useState, useCallback, useEffect } from 'react';
import { Image, View, ScrollView, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector, useDispatch } from 'react-redux';
import Screen from '../components/Screen';
import * as Data from '../static/data.json';
import MealTag from '../components/MealTag';
import Text from '../../common/components/Text';
import ScreenHeaderButton from '../components/ScreenHeaderButton';
import { updateFavorites } from '../store';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  recipeImage: {
    marginBottom: 15,
  },
  recipeHeader: {
    marginBottom: 15,
  },
  recipeName: {
    fontSize: 26,
  },
  recipeDetailRow: {
    marginBottom: 10,
  },
  recipeDetailText: {
    fontSize: 12,
  },
});

const RecipeScreen = ({
  navigation,
}) => {
  const { filteredMeals, favoriteMeals } = useSelector(({ meals }) => meals);
  const dispatch = useDispatch();

  const mealId = navigation.getParam('mealId');
  const recipe = filteredMeals.find(m => m.id === mealId);

  const updateFavorite =  useCallback(() => {
    dispatch(updateFavorites(mealId));
  }, [dispatch, mealId]);

  useEffect(() => {
    navigation.setParams({
      saveFavorites: updateFavorite,
      isFavorite: !favoriteMeals.find(m => m.id === mealId),
    });
  }, [updateFavorite, favoriteMeals, mealId]);

  return (
    <Screen>
      <ScrollView>
        <View style={styles.recipeImage}>
          <Image source={{ uri: recipe.imageUrl }} style={{ width: '100%', height: 150 }} />
        </View>
        <View style={styles.recipeHeader}>
          <Text bold style={styles.recipeName}>{recipe.title}</Text>
          <View style={styles.row}>
            {recipe.isGlutenFree && (
              <MealTag text="gluten-free" />
            )}
            {recipe.isVegan && (
              <MealTag text="vegan" />
            )}
            {recipe.isVegetarian && (
              <MealTag text="veg" />
            )}
            {recipe.isLectoseFree && (
              <MealTag text="lectose-free" />
            )}
          </View>
        </View>
        <View style={styles.recipeDetailRow}>
          <Text style={styles.recipeDetailText}><Text bold>Time:</Text> {recipe.duration}m</Text>
        </View>
        <View style={styles.recipeDetailRow}>
          <Text style={styles.recipeDetailText}><Text bold>Complexity:</Text> {recipe.complexity}</Text>
        </View>
        <View style={styles.recipeDetailRow}>
          <Text style={styles.recipeDetailText}><Text bold>Affordability:</Text> {recipe.affordability}</Text>
        </View>
        <View style={styles.recipeDetailRow}>
          <Text bold>Ingredients</Text>
          {recipe.ingredients.map(i => (
            <Text key={i} style={styles.recipeDetailText}>- {i}</Text>
          ))}
        </View>
        <View style={styles.recipeDetailRow}>
          <Text bold>Instructions</Text>
          {recipe.steps.map(i => (
            <Text key={i} style={styles.recipeDetailText}>- {i}</Text>
          ))}
        </View>
      </ScrollView>
    </Screen>
  );
}

RecipeScreen.navigationOptions = ({ navigation }) => {
  const mealId = navigation.getParam('mealId');
  const recipe = Data.meals.find(m => m.id === mealId);

  const isFavorite = navigation.getParam('isFavorite');
  const saveFavorites = navigation.getParam('saveFavorites');

  return {
    headerTitle: recipe.title,
    headerRight: ()  => (
      <HeaderButtons HeaderButtonComponent={ScreenHeaderButton}>
        <Item
          title="Favorite"
          iconName={isFavorite ? 'ios-star-outline' : 'ios-star'}
          onPress={saveFavorites}
        />
      </HeaderButtons>
    ),
  };
};

export default RecipeScreen;

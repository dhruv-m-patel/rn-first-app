import React from 'react';
import { Image, View, ScrollView, StyleSheet } from 'react-native';
import Screen from '../components/Screen';
import * as Data from '../static/data.json';
import MealTag from '../components/MealTag';
import Text from '../../common/components/Text';

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
const RecipeScreen = ({ navigation }) => {
  const mealId = navigation.getParam('mealId');
  const recipe = Data.meals.find(m => m.id === mealId);

  return (
    <Screen style={{ justifyContent: 'flex-start' }}>
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
          <Text style={styles.recipeDetailText}>Time: {recipe.duration}m</Text>
        </View>
        <View style={styles.recipeDetailRow}>
          <Text style={styles.recipeDetailText}>Complexity: {recipe.complexity}</Text>
        </View>
        <View style={styles.recipeDetailRow}>
          <Text style={styles.recipeDetailText}>Affordability: {recipe.affordability}</Text>
        </View>
        <View style={styles.recipeDetailRow}>
          <Text style={styles.recipeDetailText}>Affordability: {recipe.affordability}</Text>
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
  console.log('mealId: ', mealId);
  const recipe = Data.meals.find(m => m.id === mealId);

  return {
    headerTitle: recipe.title,
  };
};

export default RecipeScreen;

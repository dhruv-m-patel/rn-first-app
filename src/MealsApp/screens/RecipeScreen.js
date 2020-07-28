import React from 'react';
import { Image, View, ScrollView, StyleSheet } from 'react-native';
import { HeaderButton, HeaderButtons, Item } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';
import Screen from '../components/Screen';
import * as Data from '../static/data.json';
import MealTag from '../components/MealTag';
import Text from '../../common/components/Text';
import theme from '../../common/theme';
import { Platform } from 'react-native';

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

const FavoriteThisRecipeButton = props => (
  <HeaderButton
    IconComponent={Ionicons}
    iconSize={23}
    color={Platform.OS === 'android' ? theme.color.primary : undefined}
    {...props}
  />
);


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

  return {
    headerTitle: recipe.title,
    headerRight: ()  => (
      <HeaderButtons HeaderButtonComponent={FavoriteThisRecipeButton}>
        <Item
          title="Favorite"
          iconName="ios-star"
          onPress={() => { console.log('Favorite button clicked') }}
        />
      </HeaderButtons>
    ),
  };
};

export default RecipeScreen;

import React from 'react';
import { FlatList, View, Text, ImageBackground, StyleSheet } from 'react-native';
import Screen from '../components/Screen';
import * as Data from '../static/data.json';
import Card from '../components/Card';
import MealTag from '../components/MealTag';

const styles = StyleSheet.create({
  mealCard: {
    flex: 1,
    alignItems: 'flex-start',
    height: 200,
    width: '100%',
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
  },
  mealTitle: {
    fontSize: 18,
    fontWeight: '400',
    backgroundColor: '#000',
    color: 'white',
    width: '95%',
    height: '100%',
    opacity: 0.8,
    padding: 10,
  },
  row: {
    flexDirection: 'row',
  },
  mealDetails: {
    width: '100%',
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  mealDetailText: {
    color: '#333',
    fontSize: 12,
  },
  bgImage: {
    height: '100%',
    width: '95%',
    borderWidth: 1,
    borderColor: 'transparent',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  mealHeader: {
    flexDirection: 'row',
    height: '75%',
    overflow: 'hidden',
  },
  mealTags: {
    minHeight: 20,
  }
});

const MealCard = ({
  navigation,
  meal,
}) => (
  <Card
    onPress={() => {
      navigation.navigate({
        routeName: 'Recipe',
        params: {
          mealId: meal.id,
        },
      });
    }}
    style={styles.mealCard}
  >
    <View>
      <View style={{ ...styles.row, ...styles.mealHeader }}>
        <ImageBackground
          source={{ uri: meal.imageUrl }}
          style={styles.bgImage}
        >
          <Text style={styles.mealTitle}>{meal.title}</Text>
        </ImageBackground>
      </View>
      <View style={{ ...styles.row, ...styles.mealTags }}>
        {meal.isGlutenFree && (
          <MealTag text="gluten-free" />
        )}
        {meal.isVegan && (
          <MealTag text="vegan" />
        )}
        {meal.isVegetarian && (
          <MealTag text="veg" />
        )}
        {meal.isLectoseFree && (
          <MealTag text="lectose-free" />
        )}
      </View>
      <View style={{ ...styles.row, ...styles.mealDetails }}>
        <Text style={styles.mealDetailText}>{meal.duration}m</Text>
        <Text style={styles.mealDetailText}>{meal.complexity.toUpperCase()}</Text>
        <Text style={styles.mealDetailText}>{meal.affordability.toUpperCase()}</Text>
      </View>
    </View>
  </Card>
);

const MealsScreen = ({ navigation }) => {
  const categoryId = navigation.getParam('categoryId');
  const meals = Data.meals.filter(m => m.categoryIds.includes(categoryId));

  return (
    <Screen>
      <FlatList
        data={meals}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <MealCard meal={item} navigation={navigation} />
        )}
      />
    </Screen>
  );
};

MealsScreen.navigationOptions = ({ navigation }) => {
  const categoryId = navigation.getParam('categoryId');
  const categoryInContext = Data.categories.find(c => c.id === categoryId);

  return {
    headerTitle: `${categoryInContext.name} Meals`,
  };
};

export default MealsScreen;

import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { View, Text } from 'react-native';
import Screen from '../components/Screen';
import * as Data from '../static/data.json';
import Card from '../components/Card';

const styles = StyleSheet.create({
  category: {
    fontSize: 18,
    fontWeight: 'bold',
  }
})

const CategoryCard = ({
  navigation,
  category,
 }) => (
  <Card
    onPress={() => {
      navigation.navigate({
        routeName: 'Meals',
        params: {
          categoryId: category.id,
        },
      });
    }}
    style={{ backgroundColor: category.backgroundColor }}
  >
    <View>
      <Text style={{ ...styles.category, color: category.color }}>{category.name}</Text>
    </View>
  </Card>
);

const CategoriesScreen = ({
  navigation,
}) => (
  <Screen>
    <FlatList
      data={Data.categories}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <CategoryCard category={item} navigation={navigation} />
      )}
      numColumns={2}
    />
  </Screen>
);

CategoriesScreen.navigationOptions = {
  headerTitle: 'Meal Categories',
}

export default CategoriesScreen;

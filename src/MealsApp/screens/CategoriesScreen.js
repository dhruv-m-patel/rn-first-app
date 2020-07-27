import React from 'react';
import { FlatList } from 'react-native';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import Screen from '../components/Screen';
import * as Data from '../static/data.json';
import theme from '../../common/theme';
import { Platform } from 'react-native';

const styles = StyleSheet.create({
  category: {
    width: '50%',
    height: 150,
  }
})

const CategoriesScreen = ({
  navigation,
}) => (
  <Screen>
    <FlatList
      data={Data.categories}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.category}
          onPress={() => { navigation.navigate({ routeName: 'Meals' }) }}
        >
          <View>
            <Text>{item.name}</Text>
          </View>
        </TouchableOpacity>
      )}
      numColumns={2}
    />
    <Button title="Go to Meals" onPress={() => { navigation.navigate({ routeName: 'Meals' }) }} />
  </Screen>
);

CategoriesScreen.navigationOptions = {
  headerTitle: 'Meal Categories',
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? theme.color.primary : undefined,
  },
  backgroundTintColor: Platform.OS === 'android' ? theme.baseTextColor : undefined,
}

export default CategoriesScreen;

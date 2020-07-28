import React from 'react';
import { Switch, View, StyleSheet } from 'react-native';
import { HeaderButton, HeaderButtons, Item } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';
import Screen from '../components/Screen';
import Text from '../../common/components/Text';
import theme from '../../common/theme';

const styles = StyleSheet.create({
  filtersScreen: {
    justifyContent: 'flex-start',
  },
  filtersScreenHeader: {
    fontSize: 18,
    marginBottom: 20,
  },
  filterRow: {
    marginVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    width: '100%',
  },
});

const MenuButton = props => (
  <HeaderButton
    IconComponent={Ionicons}
    iconSize={23}
    color={Platform.OS === 'android' ? theme.color.accent : undefined}
    {...props}
  />
);

const FiltersScreen = () => (
  <Screen style={styles.filtersScreen}>
    <View style={styles.filtersScreenHeader}>
      <Text bold>Available filters</Text>
    </View>
    <View style={styles.filterRow}>
      <Text>Gluten-free</Text>
      <Switch />
    </View>
    <View style={styles.filterRow}>
      <Text>Vegan</Text>
      <Switch />
    </View>
    <View style={styles.filterRow}>
      <Text>Vegetarian</Text>
      <Switch />
    </View>
    <View style={styles.filterRow}>
      <Text>Lectose-free</Text>
      <Switch />
    </View>
  </Screen>
);

FiltersScreen.navigationOptions = {
  headerTitle: 'Current Filters',
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={MenuButton}>
      <Item
        title="Menu"
        iconName={'ios-menu'}
        onPress={() => {
          console.log('Menu button clicked');
        }}
      />
    </HeaderButtons>
  )
};


export default FiltersScreen;

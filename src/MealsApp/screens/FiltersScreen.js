import React, { useState } from 'react';
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

const FilterSwitch = ({
  label,
  value,
  onChange,
  style: customStyle,
  ...props
}) => (
  <View style={{ ...styles.filterRow, ...customStyle }} {...props}>
    <Text>{label}</Text>
    <Switch
      value={value}
      onValueChange={onChange}
    />
  </View>
);

const FiltersScreen = () => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [isLectoseFree, setIsLectoseFree] = useState(false);

  return (
    <Screen style={styles.filtersScreen}>
      <View style={styles.filtersScreenHeader}>
        <Text bold>Available filters</Text>
      </View>
      <FilterSwitch
        label="Gluten-free"
        value={isGlutenFree}
        onChange={setIsGlutenFree}
      />
      <FilterSwitch
        label="Vegan"
        value={isVegan}
        onChange={setIsVegan}
      />
      <FilterSwitch
        label="Vegetarian"
        value={isVegetarian}
        onChange={setIsVegetarian}
      />
      <FilterSwitch
        label="Lectose-free"
        value={isLectoseFree}
        onChange={setIsLectoseFree}
      />
    </Screen>
  );
};

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

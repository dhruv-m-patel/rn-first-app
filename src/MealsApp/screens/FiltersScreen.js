import React, { useEffect, useState } from 'react';
import { Switch, View, Platform, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import Screen from '../../common/components/Screen';
import Text from '../../common/components/Text';
import { updateFilters } from '../store';
import ScreenHeaderButton from '../../common/components/ScreenHeaderButton';
import theme from '../../common/theme';

const styles = StyleSheet.create({
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

const FiltersScreen = ({
  navigation,
  filters,
  saveFilters,
}) => {
  const [isGlutenFree, setIsGlutenFree] = useState(filters.isGlutenFree);
  const [isVegan, setIsVegan] = useState(filters.isVegan);
  const [isVegetarian, setIsVegetarian] = useState(filters.isVegetarian);
  const [isLectoseFree, setIsLectoseFree] = useState(filters.isLectoseFree);

  useEffect(() => {
    navigation.setParams({
      updateCurrentFilters: () => {
        saveFilters({
          ...(typeof isGlutenFree !== 'undefined' && { isGlutenFree }),
          ...(typeof isVegan !== 'undefined' && { isVegan }),
          ...(typeof isVegetarian !== 'undefined' && { isVegetarian }),
          ...(typeof isLectoseFree !== 'undefined' && { isLectoseFree }),
        });
      },
    });
  }, [saveFilters, isGlutenFree, isVegan, isVegetarian, isLectoseFree]);

  return (
    <Screen>
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

FiltersScreen.navigationOptions = ({ navigation }) => {
  const updateCurrentFilters = navigation.getParam('updateCurrentFilters');

  return ({
    headerTitle: 'Current Filters',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={ScreenHeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          color={Platform.OS === 'android' ? theme.color.accent : undefined}
          onPress={() => {
            navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={ScreenHeaderButton}>
        <Item
          title="Save"
          iconName="ios-save"
          color={Platform.OS === 'android' ? theme.color.accent : undefined}
          onPress={updateCurrentFilters}
        />
      </HeaderButtons>
    ),
  });
};

function mapStateToProps({ meals }) {
  const { filters } = meals;
  return {
    filters,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    saveFilters: (filters) => dispatch(updateFilters(filters)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FiltersScreen);

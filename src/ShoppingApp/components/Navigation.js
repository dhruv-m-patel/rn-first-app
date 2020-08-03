import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import theme from '../../common/theme';
import ProductCatalogScreen from '../screens/Shop/ProductCatalogScreen';
import ProductDetailsScreen from '../screens/Shop/ProductDetailsScreen';
import OrdersScreen from '../screens/Shop/OrdersScreen';
import CartScreen from '../screens/Shop/CartScreen';
import UserProductsScreen from '../screens/User/UserProductsScreen';
import EditProductDetailsScreen from '../screens/User/EditProductDetailsScreen';

const appNavigationOptions = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? theme.color.primary : undefined,
    },
    backgroundTintColor: Platform.OS === 'android' ? theme.baseTextColor : undefined,
  },
};

const shopScreensNavigator = {
  ProductCatalog: ProductCatalogScreen,
  ProductDetails: ProductDetailsScreen,
  Cart: CartScreen,
};

const shopNavigator = createStackNavigator(shopScreensNavigator, appNavigationOptions);

const userNavigator = createStackNavigator({
  UserProducts: UserProductsScreen,
  EditProduct: EditProductDetailsScreen,
}, appNavigationOptions);

const tabNavigatorScreens = {
  Shop: {
    screen: shopNavigator,
    navigationOptions: {
      tabBarLabel: 'Shop',
      tabBarIcon: (tabInfo) => (
        <Ionicons
          name="ios-restaurant"
          size={25}
          color={tabInfo.tintColor}
        />
      ),
    },
  },
  User: {
    screen: userNavigator,
    navigationOptions: {
      tabBarLabel: 'Admin',
      tabBarIcon: (tabInfo) => (
        <Ionicons
          name="ios-star"
          size={25}
          color={tabInfo.tintColor}
        />
      ),
    },
  },
};

const tabNavigationOptions = {
  tabBarOptions: {
    activeTintColor: Platform.OS === 'android' ? theme.color.accent : theme.baseTextColor,
  },
};

const appNavigator = createBottomTabNavigator(tabNavigatorScreens, tabNavigationOptions);

const orderNavigator = createStackNavigator({
  Orders: OrdersScreen,
}, appNavigationOptions);

const drawerNavigator = createDrawerNavigator({
  Shop: appNavigator,
  Orders: orderNavigator,
});

export default createAppContainer(drawerNavigator);

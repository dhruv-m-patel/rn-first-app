import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import { Platform } from 'react-native';
import theme from '../../common/theme';
import ProductCatalogScreen from '../screens/Shop/ProductCatalogScreen';
import ProductDetailsScreen from '../screens/Shop/ProductDetailsScreen';
import OrdersScreen from '../screens/Shop/OrdersScreen';
import CartScreen from '../screens/Shop/CartScreen';

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

const orderNavigator = createStackNavigator({
  Orders: OrdersScreen
}, appNavigationOptions);

const appNavigator = createDrawerNavigator({
  Shop: shopNavigator,
  Orders: orderNavigator,
});

export default createAppContainer(appNavigator);

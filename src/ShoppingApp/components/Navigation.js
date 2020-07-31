import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { Platform } from 'react-native';
import theme from '../../common/theme';
import ProductCatalogScreen from '../screens/Shop/ProductCatalogScreen';
import ProductDetailsScreen from '../screens/Shop/ProductDetailsScreen';
import OrderScreen from '../screens/Shop/OrderScreen';
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
  Order: OrderScreen,
  Cart: CartScreen,
};

const screenNavigator = createStackNavigator(shopScreensNavigator, appNavigationOptions);

export default createAppContainer(screenNavigator);

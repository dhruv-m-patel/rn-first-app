import React, { useCallback, useEffect } from 'react';
import { FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Product from '../../components/Product';
import Screen from '../../../common/components/Screen';
import { addToCart } from '../../store/actions/cart';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import ScreenHeaderButton from '../../../common/components/ScreenHeaderButton';

const ProductCatalogScreen = ({
  navigation,
}) => {
  const { availableProducts } = useSelector(({ products }) => products);
  const { items: cartItems } = useSelector(({ cart }) => cart);
  const dispatch = useDispatch();

  const handleAddProductToCart = useCallback((productId) => {
    dispatch(addToCart(availableProducts.find(p => p.id === productId)));
  }, [dispatch, availableProducts]);

  useEffect(() => {
    navigation.setParams({
      cartItems,
    });
  }, [cartItems]);

  return (
    <Screen>
      <FlatList
        data={availableProducts}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Product
            product={item}
            onAddToCart={handleAddProductToCart}
            onViewDetails={(productId) => {
              navigation.navigate({
                routeName: 'ProductDetails',
                params: {
                  productId,
                },
              });
            }}
          />
        )}
      />
    </Screen>
  );
}

ProductCatalogScreen.navigationOptions = ({ navigation }) => {
  const cartItems = navigation.getParam('cartItems');

  return {
    headerTitle: 'Products',
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={ScreenHeaderButton}>
        <Item
          title="Cart"
          iconName="ios-cart"
          color={Platform.OS === 'android' ? theme.color.accent : undefined}
          onPress={() => {
            navigation.navigate({
              routeName: 'Cart',
            });
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default ProductCatalogScreen;

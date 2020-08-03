import React, { useCallback } from 'react';
import { View, Image, Button, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import {useSelector, useDispatch} from 'react-redux';
import ScreenHeaderButton from '../../../common/components/ScreenHeaderButton';
import * as Data from '../../static/data.json';
import Screen from '../../../common/components/Screen';
import Text from '../../../common/components/Text';
import {addToCart} from '../../store/actions/cart';

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: '100%',
  },
  addToCartButton: {
    marginVertical: 20,
  },
  productHeader: {
    marginBottom: 20,
  },
  price: {
    fontSize: 14,
  }
});

const ProductDetailsScreen = ({ navigation }) => {
  const productId = navigation.getParam('productId');
  const { availableProducts } = useSelector(({ products }) => products);
  const product = availableProducts.find(p => p.id === productId);
  const dispatch = useDispatch();

  const handleAddToCart = useCallback(() => {
    dispatch(addToCart(product))
  }, [dispatch, product]);

  return (
    <Screen>
      <Image
        source={{ uri: product.imageUrl }}
        style={styles.image}
      />
      <View style={styles.addToCartButton}>
        <Button title="Add To Cart" onPress={handleAddToCart} />
      </View>
      <View style={styles.productHeader}>
        <Text bold>{product.title}</Text>
        <Text style={styles.price}>${product.price}</Text>
      </View>
      <Text>{product.description}</Text>
    </Screen>
  );
}

ProductDetailsScreen.navigationOptions = ({
  navigation,
}) => {
  const productId = navigation.getParam('productId');
  const product = Data.products.find(p => p.id === productId);

  return {
    headerTitle: product.title,
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
}

export default ProductDetailsScreen;

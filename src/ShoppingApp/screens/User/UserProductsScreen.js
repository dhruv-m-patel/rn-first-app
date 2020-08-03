import React from 'react';
import { View, Button, FlatList, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Screen from '../../../common/components/Screen';
import Product from '../../components/Product';
import { removeProduct } from '../../store/actions/products';

const styles = StyleSheet.create({
  product: {
    height: 350,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

const UserProductsScreen = ({
  navigation,
}) => {
  const { userProducts } = useSelector(({ products }) => products);
  const dispatch = useDispatch();

  const handleEditProduct = (productId) => {
    navigation.navigate({
      routeName: 'EditProductDetails',
      params: {
        productId,
      },
    });
  };

  const handleRemoveProduct = (productId) => {
    dispatch(removeProduct(productId));
  };

  return (
    <Screen>
      <FlatList
        data={userProducts}
        keyExtractor={p => p.id}
        renderItem={({ item }) => (
          <Product product={item} style={styles.product}>
            <View style={styles.buttons}>
            <Button title="Edit Product" onPress={() => { handleEditProduct(item.id); }} />
            <Button title="Remove Product" onPress={() => { handleRemoveProduct(item.id); }} />
          </View>
          </Product>
        )}
      />
    </Screen>
  );
}

UserProductsScreen.navigationOptions = () => ({
  headerTitle: 'Your Products',
});

export default UserProductsScreen;

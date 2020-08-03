import React, { useCallback } from 'react';
import { View, Button, FlatList, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Screen from '../../../common/components/Screen';
import Product from '../../components/Product';
import { removeProduct } from '../../store/actions/products';

const styles = StyleSheet.create({
  product: {
    height: 350,
  },
  addProductButton: {
    marginBottom: 15,
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

  const handleEditProduct = useCallback((productId) => {
    navigation.navigate({
      routeName: 'EditProduct',
      params: {
        productId,
      },
    });
  }, [navigation]);

  const handleRemoveProduct = useCallback((productId) => {
    dispatch(removeProduct(productId));
  }, [dispatch]);

  return (
    <Screen>
       <View styles={styles.addProductButton}>
        <Button
          title="Add New Product"
          onPress={() => {
            navigation.navigate({
              routeName: 'EditProduct',
              params: {
                ownerId: 'u1',
              },
            });
          }}
        />
      </View>
      <FlatList
        data={userProducts}
        keyExtractor={p => p.id}
        renderItem={({ item }) => (
          <Product product={item} style={styles.product}>
            <View style={styles.buttons}>
            <Button title="Edit" onPress={() => { handleEditProduct(item.id); }} />
            <Button title="Delete" onPress={() => { handleRemoveProduct(item.id); }} />
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

import React, { useCallback } from 'react';
import { View, Button, FlatList, Platform, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { removeProduct } from '../../store/actions/products';
import Screen from '../../../common/components/Screen';
import Product from '../../components/Product';
import Text from '../../../common/components/Text';
import ScreenHeaderButton from '../../../common/components/ScreenHeaderButton';
import theme from '../../../common/theme';

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
      {userProducts.length
        ? (
          <FlatList
            data={userProducts}
            keyExtractor={(p) => p.id}
            renderItem={({ item }) => (
              <Product product={item} style={styles.product}>
                <View style={styles.buttons}>
                  <Button title="Edit" onPress={() => { handleEditProduct(item.id); }} />
                  <Button title="Delete" onPress={() => { handleRemoveProduct(item.id); }} />
                </View>
              </Product>
            )}
          />
        )
        : (
          <View style={{ alignItems: 'center', marginVertical: 20 }}>
            <Text bold>You have no products on catalog.</Text>
          </View>
        )
      }

    </Screen>
  );
};

UserProductsScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'Your Products',
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={ScreenHeaderButton}>
      <Item
        title="Drawer"
        iconName="ios-menu"
        color={Platform.OS === 'android' ? theme.color.accent : undefined}
        onPress={() => {
          navigation.toggleDrawer();
        }}
      />
    </HeaderButtons>
  ),
});

export default UserProductsScreen;

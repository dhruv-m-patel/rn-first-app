import React, { useCallback, useEffect, useState } from 'react';
import { View, Button, FlatList, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Box from '../../../common/components/Box';
import Screen from '../../../common/components/Screen';
import Text from '../../../common/components/Text';
import theme from '../../../common/theme';
import CartItem from '../../components/CartItem';
import { removeFromCart } from '../../store/actions/cart';
import { createOrder } from '../../store/actions/order';

const styles = StyleSheet.create({
  summary: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    padding: 10,
  },
  summaryText: {
    fontSize: 18,
  },
  amount: {
    color: theme.color.primary,
  },
});

const CartScreen = ({
  navigation,
}) => {
  const { items, totalAmount } = useSelector(({ cart }) => cart);
  const [hasCreatedOrder, setHasCreatedOrder] = useState(false);
  const dispatch = useDispatch();

  const handleRemoveCartItem = useCallback((productId) => {
    const productToRemove = Object.values(items).find((i) => i.id === productId);
    dispatch(removeFromCart(productToRemove));
  }, [dispatch, items]);

  const handleCreateOrder = useCallback(() => {
    dispatch(createOrder({
      timestamp: new Date().toString(),
      items,
      totalAmount,
    }));
    setHasCreatedOrder(true);
  }, [dispatch, items, totalAmount]);

  useEffect(() => {
    if (hasCreatedOrder) {
      navigation.navigate({
        routeName: 'Orders',
      });
    }
  }, [navigation, hasCreatedOrder]);

  return (
    <Screen>
      {Object.values(items).length
        ? (
          <View>
            <Box style={styles.summary}>
              <Text style={styles.summaryText}>
                Total: <Text style={styles.amount}>${totalAmount.toFixed(2)}</Text>
              </Text>
              {!!Object.keys(items).length && (
                <Button
                  title="Order Now"
                  onPress={handleCreateOrder}
                />
              )}
            </Box>
            <FlatList
              data={Object.values(items)}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <CartItem
                  cartItem={item}
                  onRemoveItem={handleRemoveCartItem}
                />
              )}
            />
          </View>
        )
        : (
          <Text bold>There are no items currently in cart</Text>
        )
      }
    </Screen>
  );
};

CartScreen.navigationOptions = () => ({
  headerTitle: 'Your Cart',
});

export default CartScreen;

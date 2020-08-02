import React, { useCallback } from 'react';
import { View, Button, FlatList, StyleSheet } from 'react-native';
import { useSelector , useDispatch} from 'react-redux';
import Screen from '../../../common/components/Screen';
import Text from '../../../common/components/Text';
import theme from '../../../common/theme';
import CartItem from '../../components/CartItem';
import {removeFromCart} from '../../store/actions/cart';

const styles = StyleSheet.create({
  summary: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    padding: 10,
    shadowColor: '#000000',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: '#ffffff',
  },
  summaryText: {
    fontSize: 18,
  },
  amount: {
    color: theme.color.primary,
  },
});

const CartScreen = () => {
  const { items, totalAmount } = useSelector(({ cart }) => cart);
  const dispatch = useDispatch();

  const handleRemoveCartItem = useCallback((productId) => {
    const productToRemove = Object.values(items).find(i => i.id === productId);
    dispatch(removeFromCart(productToRemove));
  }, [dispatch, items]);

  return (
    <Screen>
      <View style={styles.summary}>
        <Text style={styles.summaryText}>
          Total: <Text style={styles.amount}>${totalAmount}</Text>
        </Text>
        {!!Object.keys(items).length && (
          <Button
            title="Order Now"
            onPress={() => {}}
          />
        )}
      </View>
      <FlatList
        data={Object.values(items)}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <CartItem
            cartItem={item}
            onRemoveItem={handleRemoveCartItem}
          />
        )}
      />
    </Screen>
  );
};

export default CartScreen;

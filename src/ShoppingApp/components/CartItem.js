import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Text from '../../common/components/Text';

const styles = StyleSheet.create({
  cartItem: {
    padding: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cartItemRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantity: {
    fontWeight: 'bold',
    marginRight: 10,
  },
  text: {
    fontSize: 16,
  },
  deleteButton: {
    marginLeft: 20,
  },
});

const CartItem = ({
  cartItem,
  onRemoveItem,
}) => {
  const handleRemoveItem = () => {
    onRemoveItem(cartItem.id);
  };

  return (
    <View style={styles.cartItem}>
      <View style={styles.cartItemRow}>
        <Text style={styles.quantity}>{cartItem.quantity}</Text>
        <Text>{cartItem.title}</Text>
      </View>
      <View style={styles.cartItemRow}>
        <Text>${cartItem.quantity * cartItem.price}</Text>
        {!!onRemoveItem && (
          <TouchableOpacity
            onPress={handleRemoveItem}
            style={styles.deleteButton}
          >
            <Ionicons
              name="ios-trash"
              size={23}
              color="red"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

export default CartItem;

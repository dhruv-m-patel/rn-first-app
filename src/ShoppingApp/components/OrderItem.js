import React, { useCallback, useState } from 'react';
import { View, Button, FlatList, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import Text from '../../common/components/Text';
import Box from '../../common/components/Box';
import { toReadableDate } from '../../lib/utils';
import CartItem from './CartItem';
import { cancelOrder } from '../store/actions/order';


const styles = StyleSheet.create({
  orderItem: {
    padding: 10,
  },
  summary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },
  date: {
    color: '#333',
  }
});

const OrderItem = ({
  order,
}) => {
  const [shouldShowDetails, setShouldShowDetails] = useState(false);
  const dispatch = useDispatch();

  const handleToggleDetails = () => {
    setShouldShowDetails(!shouldShowDetails);
  };

  const handleCancelOrder = useCallback(() => {
    dispatch(cancelOrder(order.orderId));
  }, [dispatch, order.orderId]);

  return (
    <Box style={styles.orderItem}>
      <View style={styles.summary}>
        <Text style={styles.date}>{toReadableDate(order.timestamp)}</Text>
        <Text bold>${order.totalAmount.toFixed(2)}</Text>
      </View>
      {!!shouldShowDetails && (
        <FlatList
          data={Object.values(order.items)}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <CartItem cartItem={item} />
          )}
        />
      )}
      <View style={styles.button}>
        <Button
          title={shouldShowDetails ? 'Hide Details' : 'Show Details'}
          onPress={handleToggleDetails}
        />
      </View>
      <Button
        color="red"
        title="Cancel This Order"
        onPress={handleCancelOrder}
      />
    </Box>
  );
}

export default OrderItem;

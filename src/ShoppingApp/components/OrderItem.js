import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import Text from '../../common/components/Text';
import Box from '../../common/components/Box';
import { toReadableDate } from '../../lib/utils';


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
  onShowDetails,
}) => (
  <Box style={styles.orderItem}>
    <View style={styles.summary}>
      <Text style={styles.date}>{toReadableDate(order.timestamp)}</Text>
      <Text bold>${order.totalAmount.toFixed(2)}</Text>
    </View>
    <Button
      title="Details"
      onPress={onShowDetails}
    />
  </Box>
);

export default OrderItem;

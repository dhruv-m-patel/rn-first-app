export const OrderActions = {
  CreateOrder: 'CreateOrder',
  CancelOrder: 'CancelOrder',
};

export const createOrder = ({
  timestamp,
  items,
  totalAmount,
}) => ({
  type: OrderActions.CreateOrder,
  order: {
    timestamp,
    items,
    totalAmount,
  },
});

export const cancelOrder = orderId => ({
  type: OrderActions.CancelOrder,
  orderId,
});

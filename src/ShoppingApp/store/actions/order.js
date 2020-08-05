export const OrderActions = {
  CreateOrder: 'CreateOrder',
  CancelOrder: 'CancelOrder',
};

export const createOrder = ({
  timestamp,
  items,
  totalAmount,
}) => (dispatch) => dispatch({
  type: OrderActions.CreateOrder,
  order: {
    timestamp,
    items,
    totalAmount,
  },
});

export const cancelOrder = (orderId) => (dispatch) => dispatch({
  type: OrderActions.CancelOrder,
  orderId,
});

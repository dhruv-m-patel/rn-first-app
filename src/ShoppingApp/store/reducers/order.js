import { OrderActions } from '../actions/order';

const initialState = {
  orders: [],
};

export default function orderReducer(state = initialState, action) {
  switch (action.type) {
    case OrderActions.CreateOrder:
      return {
        ...state,
        orders: state.orders.concat({
          ...action.order,
          orderId: `o${state.orders.length + 1}`,
        }),
      };

    case OrderActions.CancelOrder:
      return {
        ...state,
        orders: state.orders.filter(o => o.orderId !== action.orderId),
      };

    default:
      return state;
  }
}

import { CartActions } from '../actions/cart';
import { OrderActions } from '../actions/order';

const initialState = {
  items: {},
  totalAmount: 0,
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case CartActions.AddItem:
      return {
        ...state,
        items: state.items[action.product.id]
          ? {
              ...state.items,
              [action.product.id]: {
                ...action.product,
                quantity: state.items[action.product.id].quantity + 1,
              },
          }
          : {
            ...state.items,
            [action.product.id]: {
              ...action.product,
              quantity: 1,
            },
          },
        totalAmount: state.totalAmount + action.product.price,
      };

    case CartActions.RemoveItem:
      const updates = Object.values(state.items)
        .reduce((result, item) => {
          if (item.id !== action.product.id) {
            result.items[item.id] = item;
            result.totalAmount += (item.quantity * item.price);
          }
          return result;
        }, { items: {}, totalAmount: 0 });

      return {
        ...state,
        ...updates,
      };

    case OrderActions.CreateOrder:
      return initialState;

    default:
      return state;
  }
}

import * as Data from '../../static/data.json';
import { ProductActions } from '../actions/products';

const initialState = {
  availableProducts: Data.products,
  userProducts: Data.products.filter(p => p.ownerId === 'u1'),
};

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case ProductActions.AddProduct:
      const newProduct = {
        ...action.product,
        id: `p${availableProducts.length}`
      }
      return {
        ...state,
        availlableProducts: state.availableProducts.concat(newProduct),
        userProducts: state.userProducts.concat(newProduct),
      };

    case ProductActions.RemoveProduct:
      return {
        ...state,
        availlableProducts: state.availableProducts.filter(p => p !== action.productId),
        userProducts: state.userProducts.filter(p => p !== action.productId),
      };

    default:
      return state;
  }
};

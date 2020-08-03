import * as Data from '../../static/data.json';
import { ProductActions } from '../actions/products';

const initialState = {
  availableProducts: Data.products,
  userProducts: Data.products.filter((p) => p.ownerId === 'u1'),
};

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case ProductActions.AddProduct:
      const newProduct = {
        ...action.product,
        id: `p${state.availableProducts.length + 1}`,
      };

      return {
        ...state,
        availableProducts: state.availableProducts.concat(newProduct),
        userProducts: state.userProducts.concat(newProduct),
      };

    case ProductActions.UpdateProduct:
      const reduceProducts = (products) => products.reduce((result, product) => result.concat(
        product.id === action.product.productId
          ? action.product
          : product,
      ), []);

      const updatedState = {
        ...state,
        availableProducts: reduceProducts(state.availableProducts),
        userProducts: reduceProducts(state.userProducts),
      };
      return updatedState;

    case ProductActions.RemoveProduct:
      return {
        ...state,
        availableProducts: state.availableProducts.filter((p) => p.id !== action.productId),
        userProducts: state.userProducts.filter((p) => p.id !== action.productId),
      };

    default:
      return state;
  }
}

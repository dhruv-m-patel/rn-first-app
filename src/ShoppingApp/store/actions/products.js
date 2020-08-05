import { queryFirebase } from './index';

export const ProductActions = {
  FetchProducts: 'FetchProducts',
  AddProduct: 'AddProduct',
  UpdateProduct: 'UpdateProduct',
  RemoveProduct: 'RemoveProduct',
};

export const fetchProducts = () => async (dispatch) => queryFirebase('products')
  .then((data) => dispatch({
    type: ProductActions.FetchProducts,
    products: data,
  }));

export const addProduct = (product) => async (dispatch) => queryFirebase(
  '/products',
  { method: 'POST', body: product },
).then((data) => dispatch({
  type: ProductActions.AddProduct,
  product: {
    ...product,
    id: data.id,
  },
}));

export const updateProduct = (product) => async (dispatch) => queryFirebase(
  '/products',
  { method: 'PUT', body: product },
).then((data) => dispatch({
  type: ProductActions.UpdateProduct,
  product: data,
}));

export const removeProduct = (productId) => async (dispatch) => queryFirebase(
  '/products',
  { method: 'DELETE', body: productId },
).then(() => dispatch({
  type: ProductActions.RemoveProduct,
  productId,
}));

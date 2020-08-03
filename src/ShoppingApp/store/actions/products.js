export const ProductActions = {
  AddProduct: 'AddProduct',
  RemoveProduct: 'RemoveProduct',
};

export const addProduct = product => ({
  type: ProductActions.AddProduct,
  product,
});

export const removeProduct = productId => ({
  type: ProductActions.RemoveProduct,
  productId,
});

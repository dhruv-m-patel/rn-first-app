export const ProductActions = {
  AddProduct: 'AddProduct',
  UpdateProduct: 'UpdateProduct',
  RemoveProduct: 'RemoveProduct',
};

export const addProduct = (product) => ({
  type: ProductActions.AddProduct,
  product,
});

export const updateProduct = (product) => ({
  type: ProductActions.UpdateProduct,
  product,
});

export const removeProduct = (productId) => ({
  type: ProductActions.RemoveProduct,
  productId,
});

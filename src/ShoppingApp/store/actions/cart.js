export const CartActions = {
  AddItem: 'AddItem',
  RemoveItem: 'RemoveItem',
};

export const addToCart = (product) => (dispatch) => dispatch({
  type: CartActions.AddItem,
  product,
});

export const removeFromCart = (product) => (dispatch) => dispatch({
  type: CartActions.RemoveItem,
  product,
});

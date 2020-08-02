export const CartActions = {
  AddItem: 'AddItem',
  RemoveItem: 'RemoveItem',
};

export const addToCart = product => ({
  type: CartActions.AddItem,
  product,
});

export const removeFromCart = product => ({
  type: CartActions.RemoveItem,
  product,
});

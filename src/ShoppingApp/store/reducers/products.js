import * as Data from '../../static/data.json';

const initialState = {
  availableProducts: Data.products,
  userProducts: Data.products.filter(p => p.ownerId === 'u1'),
};

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
};

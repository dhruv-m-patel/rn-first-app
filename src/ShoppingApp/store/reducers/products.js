import * as Data from '../../static/data.json';

const initialState = {
  availableProducts: Data.products,
  userProducts: [],
};

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
};

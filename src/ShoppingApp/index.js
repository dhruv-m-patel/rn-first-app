import React from 'react';
import { enableScreens } from 'react-native-screens';
import { Provider } from 'react-redux';
import Navigation from './components/Navigation';
import store from './store';

export default function ShoppingApp() {
  enableScreens();

  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

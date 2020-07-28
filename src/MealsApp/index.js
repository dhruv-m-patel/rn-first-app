import React from 'react';
import { enableScreens } from 'react-native-screens';
import Navigation from './components/Navigation';

const MealsApp = () => {
  enableScreens();

  return (
    <Navigation />
  );
};

export default MealsApp;

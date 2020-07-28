import React from 'react';
import { enableScreens } from 'react-native-screens';
import Navigation from './components/Navigation';

export default function MealsApp() {
  enableScreens();

  return (
    <Navigation />
  );
};

import React, { useState } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { isLoaded, loadAsync } from 'expo-font';
import { AppLoading } from 'expo';
import CenteredContent from './src/common/components/CenteredContent';
import GoalTrackerApp from './src/GoalTrackerApp';
import GuessTheNumberApp from './src/GuessTheNumberApp';
import MealsApp from './src/MealsApp';
import Card from './src/common/components/Card';
import ThemeContext from './src/common/context/ThemeContext';
import ShoppingApp from './src/ShoppingApp';

const styles = StyleSheet.create({
  gameScreen: {
    flex: 1,
    fontSize: 16,
  },
});

const loadCustomFonts = async () => loadAsync({
  // eslint-disable-next-line global-require
  'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
  // eslint-disable-next-line global-require
  'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
});

const APPS = {
  goalTracker: GoalTrackerApp,
  guessTheNumber: GuessTheNumberApp,
  meals: MealsApp,
  shopping: ShoppingApp,
};

export default function App() {
  const [hasInitialized, setHasInitialized] = useState(false);
  const [appName, setAppName] = useState('');

  const handleAppSelection = (selectedAppName) => {
    setAppName(selectedAppName);
  };

  const handleAppLoadingComplete = () => {
    setHasInitialized(true);
  };

  const handleAppLoadingError = () => {
    // eslint-disable-next-line no-undef
    Alert.alert('Error', 'Loading custom fonts failed');
    setHasInitialized(true);
  };

  const CurrentApp = hasInitialized && !!appName && APPS[appName];
  return (
    <ThemeContext.Provider value={{ canUseCustomFonts: isLoaded }}>
      {hasInitialized
        ? (
          <View style={styles.gameScreen}>
            {CurrentApp
              ? <CurrentApp />
              : (
                <CenteredContent>
                  <Card>
                    <Button
                      title="Goal Tracker App"
                      onPress={() => handleAppSelection('goalTracker')}
                    />
                  </Card>
                  <Text />
                  <Card>
                    <Button
                      title="Guess The Number"
                      onPress={() => handleAppSelection('guessTheNumber')}
                    />
                  </Card>
                  <Card>
                    <Button
                      title="Meals App"
                      onPress={() => handleAppSelection('meals')}
                    />
                  </Card>
                  <Card>
                    <Button
                      title="Shopping App"
                      onPress={() => handleAppSelection('shopping')}
                    />
                  </Card>
                </CenteredContent>
              )
            }
          </View>
        )
        : (
          <AppLoading
            startAsync={loadCustomFonts}
            onFinish={handleAppLoadingComplete}
            onError={handleAppLoadingError}
          />
        )
      }
    </ThemeContext.Provider>
  );
}

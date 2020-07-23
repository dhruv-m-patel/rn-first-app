import React, { useState } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import * as ExpoFont from 'expo-font';
import { AppLoading } from 'expo';
import CenteredContent from './src/common/components/CenteredContent';
import GoalTrackerApp from './src/GoalTrackerApp';
import GuessTheNumberApp from './src/GuessTheNumberApp';
import Card from './src/common/components/Card';

const styles = StyleSheet.create({
  gameScreen: {
    flex: 1,
    fontFamily: 'OpenSans',
    fontSize: 16,
  },
});

const APPS = {
  goalTracker: GoalTrackerApp,
  guessTheNumber: GuessTheNumberApp,
};

export default function App() {
  const [hasInitialized, setHasInitialized] = useState(false);
  const [loadedCustomFonts, setLoadedCustomFonts] = useState(false);
  const [appName, setAppName] = useState('');

  const handleAppSelection = (selectedAppName) => {
    setAppName(selectedAppName);
  };

  const handleAppLoading = () => ExpoFont.loadAsync({
    'OpenSans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'OpenSansBold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  const handleAppLoadingComplete = () => {
    setHasInitialized(true);
    setLoadedCustomFonts(true);
  };

  const handleAppLoadingError = () => {
    Alert.alert('Error', 'Loading custom fonts failed');
    setHasInitialized(true);
  };

  const CurrentApp = hasInitialized && !!appName && APPS[appName];
  return hasInitialized
    ? (
      <View style={{ ...loadedCustomFonts && styles.gameScreen }}>
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
            </CenteredContent>
          )
        }
      </View>
    )
    : (
      <AppLoading
        startAsync={handleAppLoading}
        onFinish={handleAppLoadingComplete}
        onError={handleAppLoadingError}
      />
    );
}

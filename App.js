import React, { useState, useEffect } from 'react';
import { Button, Text } from 'react-native';
import CenteredContent from './src/common/components/CenteredContent';
import GoalTrackerApp from './src/GoalTrackerApp';
import GuessTheNumberApp from './src/GuessTheNumberApp';

const APPS = {
  goalTracker: GoalTrackerApp,
  guessTheNumber: GuessTheNumberApp,
};

export default function App() {
  const [appName, setAppName] = useState('');

  const handleAppSelection = (selectedAppName) => {
    setAppName(selectedAppName);
  };

  const CurrentApp = !!appName && APPS[appName];

  return CurrentApp
    ? <CurrentApp />
    : (
      <CenteredContent>
        <Button
          title="Goal Tracker App"
          onPress={() => handleAppSelection('goalTracker')}
        />
        <Text />
        <Button
          title="Guess The Number"
          onPress={() => handleAppSelection('guessTheNumber')}
        />
      </CenteredContent>
    );
}

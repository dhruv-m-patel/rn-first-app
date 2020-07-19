import React, { useState, useEffect } from 'react';
import { Button } from 'react-native';
import CenteredContent from './components/CenteredContent';
import GoalTrackerApp from './Apps/GoalTrackerApp';

const APPS = {
  goalTracker: GoalTrackerApp,
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
      </CenteredContent>
    );
}

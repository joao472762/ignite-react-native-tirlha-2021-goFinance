import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { Dashboard } from './src/Screens/Dashboard';

export default function App() {
  return (
    <>
      <StatusBar
        translucent
        style= 'dark'
        backgroundColor= 'transparent'
      />
      <Dashboard/>
    </>
  );
}

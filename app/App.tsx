import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';

import { Dashboard } from './src/Screens/Dashboard';
import { defaultTheme } from './src/global/styles/theme';
import { FontProvider } from './src/context/font';

export default function App() {
  return (
    <FontProvider>
      <ThemeProvider theme={defaultTheme}>
      <StatusBar
        backgroundColor = 'transparent'
        translucent 
        style="light" 
      />
        <Dashboard/>
      </ThemeProvider>
    </FontProvider>

  );
}


import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';

import { Dashboard } from './src/Screens/Dashboard';
import { defaultTheme } from './src/global/styles/theme';
import { FontProvider } from './src/context/font';
import { NewTransactionForm } from './src/Screens/Dashboard/NewTransactionForm';

export default function App() {
  return (
    <FontProvider>
      <ThemeProvider theme={defaultTheme}>
      <StatusBar
        backgroundColor = 'transparent'
        translucent 
        style="light" 
      />
        <NewTransactionForm/>
      </ThemeProvider>
    </FontProvider>

  );
}


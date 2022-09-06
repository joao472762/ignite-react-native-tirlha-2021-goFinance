import 'intl'
import 'intl/locale-data/jsonp/pt-BR'

import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';

import { Router } from './src/routes/app.routes';
import { FontProvider } from './src/context/font';
import { defaultTheme } from './src/global/styles/theme';
import { TransactionsProvider } from './src/context/TrasactionsContext';
import { SignIn } from './src/Screens/SignIn';
import { AuthContextProvider } from './src/context/AuthContext';

export default function App() {
  return (
    <FontProvider>
      <ThemeProvider theme={defaultTheme}>
      <StatusBar
        backgroundColor = 'transparent'
        translucent 
        style="light" 
      />
      <AuthContextProvider>
        <TransactionsProvider>
          <SignIn/> 
        </TransactionsProvider>
      </AuthContextProvider>
      </ThemeProvider>
    </FontProvider>

  );
}


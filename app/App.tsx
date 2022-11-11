import 'intl'
import 'intl/locale-data/jsonp/pt-BR'

import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';

import {Poppins_500Medium, Poppins_400Regular, Poppins_700Bold, useFonts} from '@expo-google-fonts/poppins'

import { Routes } from './src/routes';
import { Loader } from './src/components/Loader';
import { defaultTheme } from './src/global/styles/theme';
import { AuthContextProvider } from './src/context/AuthContext';
import { TransactionsProvider } from './src/context/TrasactionsContext';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_400Regular,
    Poppins_700Bold
  })
  return (
      <ThemeProvider theme={defaultTheme}>
        <StatusBar
          backgroundColor = 'transparent'
          translucent 
          style="light" 
        />
        <AuthContextProvider>
          {fontsLoaded ?<Routes/>: <Loader/>}
        </AuthContextProvider>
      </ThemeProvider>

  

  );
}


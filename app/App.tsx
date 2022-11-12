import 'intl'
import 'intl/locale-data/jsonp/pt-BR'
import { LogBox } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';
import {Poppins_500Medium, Poppins_400Regular, Poppins_700Bold, useFonts} from '@expo-google-fonts/poppins'



import { Routes } from './src/routes';
import { useAuth } from './src/hooks/useAuth';
import { Loader } from './src/components/Loader';
import { defaultTheme } from './src/global/styles/theme';
import { AuthContextProvider } from './src/context/AuthContext';

//while the auth session dosen't update  use the line
LogBox.ignoreLogs(['Waning:...'])

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_400Regular,
    Poppins_700Bold
  })
  const {useStorageIsLoading} = useAuth()
  return (
    <ThemeProvider theme={defaultTheme}>
        <StatusBar
          backgroundColor = 'transparent'
          translucent 
          style="light" 
        />
        
        <AuthContextProvider>
          {fontsLoaded || useStorageIsLoading ? <Routes/>: <Loader/>}
        </AuthContextProvider>
      </ThemeProvider>

  

  );
}


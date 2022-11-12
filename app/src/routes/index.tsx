import { NavigationContainer } from '@react-navigation/native';
import { TransactionsProvider } from '../context/TrasactionsContext';
import { useAuth } from '../hooks/useAuth';
import { SignIn } from '../Screens/SignIn';
import { AuthRoutes } from './auth/app.routes';

export function Routes(){
    const {user} = useAuth()
    return (
            <NavigationContainer>
                {user ? <AuthRoutes/> : <SignIn/>}
            </NavigationContainer>
    )
}
import { Platform } from 'react-native';
import { Feather } from '@expo/vector-icons'
import { useTheme } from 'styled-components';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Dashboard } from '../../Screens/Dashboard';
import { NewTransaction } from '../../Screens/NewTransaction';
import { Resume } from '../../Screens/Resume';
import { TransactionsProvider } from '../../context/TrasactionsContext';


const {Navigator,Screen} = createBottomTabNavigator()

export function AuthRoutes(){

    const {colors} = useTheme()

    return(
        <TransactionsProvider>
            <Navigator
                sceneContainerStyle={{}}
                screenOptions={{
                    headerShown:false,
                    tabBarLabelPosition: 'beside-icon',
                    tabBarInactiveTintColor: colors.text,
                    tabBarActiveTintColor: colors.secundary,
                    tabBarStyle:{
                        height: 80,
                        paddingVertical: Platform.OS === 'ios' ? 20 : 0
                    }
                }}
            >
                <Screen 
                    name='Listagem' 
                    component={Dashboard}
                    options = {{
                        tabBarIcon: ({color,size}) => (
                            <Feather
                                name= 'list'
                                size={size}
                                color ={ color}
                            />
                        )
                    }}
                />
                <Screen 
                    name='Cadastrar' 
                    component={NewTransaction}
                    options = {{
                        tabBarIcon: ({color,size}) => (
                            <Feather
                                name='dollar-sign'
                                size={size}
                                color ={ color}
                            />
                        )
                    }}
                />
                <Screen 
                    name='Resumo' 
                    component={Resume}
                    options = {{
                        tabBarIcon: ({color,size}) => (
                            <Feather
                                name='pie-chart'
                                size={size}
                                color ={ color}
                            />
                        )
                    }}
                />
            </Navigator>
        </TransactionsProvider>
        
    )
}
import { Platform } from 'react-native';
import { Feather } from '@expo/vector-icons'
import { useTheme } from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Dashboard } from '../Screens/Dashboard';
import { NewTransaction } from '../Screens/NewTransaction';


const {Navigator,Screen} = createBottomTabNavigator()

export function Router(){

    const {colors} = useTheme()

    return(
        <NavigationContainer>
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
                    component={NewTransaction}
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
        </NavigationContainer>
    )
}
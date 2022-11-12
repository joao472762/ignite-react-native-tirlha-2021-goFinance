import { isLoading } from 'expo-font'
import { useState } from 'react'
import { Alert } from 'react-native'
import styled from 'styled-components/native'
import { useAuth } from '../../../../hooks/useAuth'
import {
    Avatar,
    Menssage, 
    UserName, 
    Greeting, 
    PowerIcon,
    LogoutButton, 
    HeaderContent,
    HeaderContainer,
} from './styles'

export function Header(){
    const {user,signOut} = useAuth()
    const [disabledButton, setDisableButton] = useState(false)
    
    const [userFirstName] = user!?.name.split(' ')

    async function handleSignOut(){
        try {
            setDisableButton(true)
            
            Alert.alert('Sair da Conta','tem certeza, que quer sair da usa conta?',[
                {
                    text: 'cancelar',
                    style: 'cancel',
                    onPress: () => setDisableButton(false)
                },
                {
                    text: 'sair',
                    style: 'destructive',
                    onPress: () => {signOut()}


                }
            ])
        } catch (error) {
            console.error(error)
            Alert.alert('não foi possível sair da aplicação')
        }
    }
   
    return(
        <HeaderContainer>
            <HeaderContent>
                <Avatar source={{uri: user?.avatarUrl}}/>

                <Greeting>
                    <Menssage> Olá, </Menssage>
                    <UserName> {userFirstName} </UserName>
                </Greeting>

                <LogoutButton 
                    onPress={handleSignOut} 
                    activeOpacity={.3}
                    disabled={disabledButton}
                >
                    <PowerIcon name='power' />
                </LogoutButton>

            </HeaderContent>
        </HeaderContainer>
    )
}
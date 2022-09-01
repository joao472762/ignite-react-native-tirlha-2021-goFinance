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
import {RectButton} from 'react-native-gesture-handler'
export function Header(){
    return(
        <HeaderContainer>
            <HeaderContent>
                <Avatar source={{uri: 'https://avatars.githubusercontent.com/u/84108989?v=4'}}/>

                <Greeting>
                    <Menssage> Olá, </Menssage>
                    <UserName> João </UserName>
                </Greeting>

                <LogoutButton activeOpacity={.3}>

                    <PowerIcon name='power' />
                </LogoutButton>

            </HeaderContent>
        </HeaderContainer>
    )
}
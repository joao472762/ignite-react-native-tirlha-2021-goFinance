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
    const {user} = useAuth()
    const [userFirstName] = user!?.name.split(' ')
   
    return(
        <HeaderContainer>
            <HeaderContent>
                <Avatar source={{uri: user?.avatarUrl}}/>

                <Greeting>
                    <Menssage> Olá, </Menssage>
                    <UserName> {userFirstName} </UserName>
                </Greeting>

                <LogoutButton activeOpacity={.3}>

                    <PowerIcon name='power' />
                </LogoutButton>

            </HeaderContent>
        </HeaderContainer>
    )
}
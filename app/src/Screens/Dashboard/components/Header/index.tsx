import {
    Avatar,
    Menssage, 
    UserName, 
    Greeting, 
    PowerIcon,
    ExitButton, 
    HeaderContent,
    HeaderContainer,
} from './styles'

export function Header(){
    return(
        <HeaderContainer>
            <HeaderContent>
                <Avatar source={{uri: 'https://avatars.githubusercontent.com/u/84108989?v=4'}}/>

                <Greeting>
                    <Menssage> Olá, </Menssage>
                    <UserName> João </UserName>
                </Greeting>

                <ExitButton>
                    <PowerIcon name='power' />
                </ExitButton>
            </HeaderContent>
        </HeaderContainer>
    )
}
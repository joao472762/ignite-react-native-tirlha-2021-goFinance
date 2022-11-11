import {
    Label,
    Title,
    Header,
    Footer,
    LoginWays,
    LoginAdvise,
    SignInContainer,
} from './styles'

import GoogleSvg from '../../assets/google.svg'
import AppleSvg from '../../assets/apple.svg'
import MoneySvg from '../../assets/money.svg'
import { SignSocialButton } from './components/SignInSocialButton'
import { useAuth } from '../../hooks/useAuth'
import {Alert} from 'react-native'

export function SignIn(){
    const {signIn} = useAuth()

    async function handleSignInWithGoogle(){
        try {
            signIn()
        } catch (error) {
            console.error(error)
            Alert.alert('não foi possível realizar o login')
        }
    }
    return(
        <SignInContainer>
            <Header>
                <MoneySvg/>
                <Label>gofinances</Label>
                <Title>
                    Controle suas {'\n'}
                    finanças de forma {'\n'}
                    muito simples
                </Title>
                <LoginAdvise>
                    Faça seu login com {'\n'}
                    uma das contas abaixo
                </LoginAdvise>
            </Header>

            <Footer>
                <LoginWays>
                    <SignSocialButton
                        title='Entrar com Google'
                        svg={GoogleSvg}
                        onPress={handleSignInWithGoogle}
                    />
                    <SignSocialButton
                        title='Entrar com Apple'
                        svg={AppleSvg}
                    />
                </LoginWays>
            </Footer>
            
        </SignInContainer>
    )
}
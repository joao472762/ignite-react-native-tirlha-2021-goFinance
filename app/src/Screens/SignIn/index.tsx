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
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { useAuth } from '../../hooks/useAuth'

export function SignIn(){
    const data = useAuth()
    console.log(data)
    return(
        <SignInContainer>
            <Header>
                <MoneySvg/>
                <Label>gofincances</Label>
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
import {TouchableOpacityProps} from 'react-native'
import { TransactionTypeButtonContainer, Title, Icon } from './styles'


interface TransactionTypeButtonProps extends TouchableOpacityProps {
    type: 'Income' | 'Outcome'

    isActive: boolean
}

const iconType = {
    Income: 'arrow-up-circle',
    Outcome: 'arrow-down-circle'
}

export function TransactionTypeButton({type,isActive,...res}: TransactionTypeButtonProps){
    return(
        <TransactionTypeButtonContainer
            {...res}
            isActive = {isActive}
            type={type}
        >
           <Icon name={iconType[type]} type={type}/>
            <Title>
                {type}
            </Title>

        </TransactionTypeButtonContainer>
    )
}
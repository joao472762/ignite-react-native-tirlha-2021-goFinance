import styled, { css } from "styled-components/native"
import {TouchableOpacity} from 'react-native'
import {Feather} from '@expo/vector-icons'
import { RFValue } from "react-native-responsive-fontsize"

interface iconProps {
    type: 'Income' | "Outcome"
}

interface TransactionTypeButtonContainerProps  {
    isActive: boolean
    type: 'Income' | "Outcome"
}

export const TransactionTypeButtonContainer = styled(TouchableOpacity)<TransactionTypeButtonContainerProps>`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    
    width: 48%;
    height: ${RFValue(56)}px;

    border-style:solid;
    border-color: ${( {theme} ) => theme.colors.text};
    border-width: ${( {isActive}) => isActive ? 0 : 1.5}px;
    border-radius: 5px;

    ${ ({isActive,theme,type}) => 
        isActive && type === 'Income' && css`
        background-color: ${theme.colors.successLight};
        ` 
    }

    ${ ({isActive,theme,type}) => 
        isActive && type === 'Outcome' && css`
        background-color: ${theme.colors.alertLight};
        ` 
    }

`

export const Icon = styled(Feather)<iconProps>`
       font-size: ${RFValue(24)}px;

       color: ${( {type, theme} ) => 
            type === 'Income'
            ? theme.colors.success
            : theme.colors.alert
       };
`

export const Title = styled.Text`
    font-size: ${RFValue(14)}px;
    color: ${( {theme} ) => theme.colors.title};
    font-family: ${( {theme} ) => theme.fonts.PoppinsRegular};

    margin-left:  ${RFValue(12)}px;;
`

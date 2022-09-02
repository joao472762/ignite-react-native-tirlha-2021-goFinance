import {Feather} from '@expo/vector-icons'
import styled from "styled-components/native"
import { RFValue } from "react-native-responsive-fontsize"

import { defaultTheme } from "../../../../../../global/styles/theme"

const {colors} = defaultTheme

const iconVariant = {
    income :  colors.success,
    outcome:  colors.alert,
    total:  colors.shape
}


interface typeProps {
    type: 'income' | 'outcome' | 'total'
}

export const HighlighCardContainer = styled.View<typeProps>`
    justify-content: space-between;

    border-radius: 5px;
    margin-right: 16px;
    height: ${RFValue(200)}px;
    min-width: ${RFValue(300)}px;
    
    padding: 20px;
    padding-bottom: 42px;
    padding-left: 22px;

    background-color: ${props => 
    props.type === 'total'
    ? props.theme.colors.secundary
    : props.theme.colors.shape
};
`

export const HighlighCardHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;
`

export const Title = styled.Text<typeProps>`
    font-size: ${RFValue(14)}px;
    font-family: ${( {theme} ) => theme.fonts.PoppinsRegular};

    color: ${props => (
        props.type === 'total'
        ? props.theme.colors.shape
        : props.theme.colors.title
        ) 
    };
`
interface icon  {
    variant: 'income' | 'outcome' | 'total'
} 



export const Icon = styled(Feather)<typeProps>`
    font-size: ${RFValue(40)}px;
    color: ${ props => iconVariant[props.type]};
`

export const Amount = styled.Text<typeProps>`
    font-size: ${RFValue(32)}px;
    font-family: ${( {theme} ) => theme.fonts.PoppinsMedium};

    color: ${props => (
        props.type === 'total'
        ? props.theme.colors.shape
        : props.theme.colors.title
        ) 
    };

`


export const LastAlteration = styled.Text<typeProps>`
    font-size: ${RFValue(12)}px;

    color: ${props => (
        props.type === 'total'
        ? props.theme.colors.shape
        : props.theme.colors.text
        ) 
    };
`

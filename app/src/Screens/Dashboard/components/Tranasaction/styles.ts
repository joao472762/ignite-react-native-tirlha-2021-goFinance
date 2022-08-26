import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import {Feather} from '@expo/vector-icons'

export const TransactionContainer = styled.View`
    padding: 17px 24px 18px;

    
    border-radius: 5px;
    margin-bottom: ${RFValue(16)}px;
    background-color: ${( {theme}) => theme.colors.shape};

`

export const Description = styled.Text`
    font-size: ${RFValue(14)}px;
    color: ${( {theme}) => theme.colors.title};
    font-family: ${( {theme}) => theme.fonts.PoppinsRegular};
`

interface Pricehighligh  {
    type: 'income' | 'outcome'
}
export const PriceHighlight = styled.Text<Pricehighligh>`
    font-size: ${RFValue(20)}px;
    margin-top: ${RFValue(2)}px;
    font-family: ${( {theme}) => theme.fonts.PoppinsRegular};
    color: ${ props => (
        props.type === 'income'
        ? props.theme.colors.success
        : props.theme.colors.alert
    )};
`

export const TransactionFooter = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin-top: ${RFValue(19)}px;

`

export const Category = styled.View`
    flex-direction: row;
    align-items: center;

`

export const Icon = styled(Feather)`
 font-size: ${RFValue(20)}px;
 color: ${( {theme}) => theme.colors.text};
`

export const CategoryName = styled.Text`
    font-size: ${RFValue(14)}px;
    margin-left: ${RFValue(12)}px;
    color: ${( {theme}) => theme.colors.text};
`

export const CriationDate = styled.Text`
    font-size: ${RFValue(14)}px;
    color: ${( {theme}) => theme.colors.text};
`

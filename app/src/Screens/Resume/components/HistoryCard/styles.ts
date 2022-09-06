import styled from "styled-components/native"
import { RFValue } from "react-native-responsive-fontsize"


interface HistoryCardContainerProps {
    color: string
}
export const HistoryCardContainer = styled.View<HistoryCardContainerProps>`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: ${RFValue(13)}px  ${RFValue(24)}px;
    margin-bottom: ${RFValue(8)}px;

    border-radius: 8px;
    border-left-width: 5px;
    border-left-style: solid;
    border-left-color: ${( {color} ) => color};


    background-color: ${( {theme} ) => theme.colors.shape};

    
`

export const Label = styled.Text`
    color: ${( {theme}) => theme.colors.title};
    font-size: ${RFValue(15)}px;
    font-family: ${( {theme} ) => theme.fonts.PoppinsRegular};
`

export const AmountContainer = styled.View`
    flex-direction: row;
    
`

export const Currency = styled.Text`
    color: ${( {theme}) => theme.colors.title};
    font-size: ${RFValue(15)}px;
    font-family: ${( {theme} ) => theme.fonts.PoppinsMedium};
`

export const Amount = styled.Text`
    color: ${( {theme}) => theme.colors.title};
    font-size: ${RFValue(15)}px;
    font-family: ${( {theme} ) => theme.fonts.PoppinsBold};
`

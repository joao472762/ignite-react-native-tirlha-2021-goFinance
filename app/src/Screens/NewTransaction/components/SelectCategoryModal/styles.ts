import {Feather} from '@expo/vector-icons'
import styled from "styled-components/native"
import { TouchableOpacity } from "react-native"
import { RFValue } from "react-native-responsive-fontsize"

interface CategoryProps {
    isSelected: boolean

}

export const SelectCategoryModalContent = styled.View`
    justify-content: space-between;
    background-color: ${( {theme} ) => theme.colors.background};
    flex: 1;
`


export const Footer = styled.View`
    padding: 0 ${RFValue(24)}px  ${RFValue(10)}px;

`

export const ItemSeparator = styled.View`
    height: 1px;
    background-color: ${( {theme} ) => theme.colors.text_dark};
`


export const Category = styled(TouchableOpacity)<CategoryProps>`
    padding: ${RFValue(15)}px;
    flex-direction: row;
    align-items: center;

    background-color: ${( {theme,isSelected} ) => 
        isSelected 
        ? theme.colors.overlay
        : theme.colors.background
    };
`

export const Icon = styled(Feather)`
    font-size: ${RFValue(22)}px;
    color: ${( {theme}) => theme.colors.text_dark};
`

export const CategoryName = styled.Text`
    color: ${( {theme}) => theme.colors.text_dark};
    font-size: ${RFValue(14)}px;
    font-family: ${( {theme} ) => theme.fonts.PoppinsRegular};

    margin-left: ${RFValue(12)}px;
`

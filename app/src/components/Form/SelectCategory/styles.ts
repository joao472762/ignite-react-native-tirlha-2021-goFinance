import {Feather} from '@expo/vector-icons'
import styled from "styled-components/native"
import { RFValue } from "react-native-responsive-fontsize"
import { TouchableOpacity } from 'react-native'

export const SelectCategoryContainer = styled(TouchableOpacity)`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    border-radius: 5px;
    height: ${RFValue(56)}px;
    padding: 0 ${RFValue(8)}px;;

    background-color: ${( {theme} ) => theme.colors.shape};
`

export const Category = styled.Text`
    font-size: ${RFValue(14)}px;
    color: ${( {theme} ) => theme.colors.text};
    font-family: ${( {theme} ) => theme.fonts.PoppinsMedium};
`

export const Icon = styled(Feather)`
    font-size: ${RFValue(20)}px;
    color: ${( {theme} ) => theme.colors.text};
`

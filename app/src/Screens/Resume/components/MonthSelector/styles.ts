import { RFValue } from "react-native-responsive-fontsize"
import styled from "styled-components/native"
import {Feather} from '@expo/vector-icons'


export const MonthSelectorContainer = styled.View`
    align-items: center;
  
    flex-direction: row;

    margin-top: ${RFValue(41)}px;
`

export const MonthSelectButton = styled.TouchableOpacity`
`

export const Month = styled.Text`
    flex: 1;
    text-align: center;
    color: ${( {theme}) => theme.colors.text_dark};
    font-size: ${RFValue(20)}px;
    font-family: ${( {theme} ) => theme.fonts.PoppinsRegular};
`

export const MonthSelectIcon = styled(Feather)`
        font-size: ${RFValue(24)}px;
`
export const LoadContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content:  center;
`
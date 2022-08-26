import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const HeaderContainer = styled.View`
    align-items: center;

    padding-bottom: ${RFValue(19)}px;
    padding-top: ${getStatusBarHeight() + RFValue(33)}px;
    background-color: ${( {theme} ) => theme.colors.primary};
`

export const Title = styled.Text`
    color: ${( {theme} ) => theme.colors.shape};
    font-size: ${RFValue(18)}px;
    font-family: ${( {theme} ) => theme.fonts.PoppinsRegular};
`
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const  ErrorMenssage = styled.Text`
    padding: 0 ${RFValue(14)}px;
    margin-top: ${RFValue(4)}px;
    font-size: ${RFValue(12)}px;
    font-family: ${( {theme} ) => theme.fonts.PoppinsRegular};
    color: ${( {theme} ) => theme.colors.alert};
`

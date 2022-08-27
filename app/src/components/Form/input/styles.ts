import { TextInput } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { defaultTheme } from "../../../global/styles/theme";

export const BaseInput = styled(TextInput)`
    margin-top: ${RFValue(8)}px;
    border-radius: 5px;
  
    font-size: ${RFValue(14)}px;
    height: ${RFValue(56)}px;
    padding:  0 16px;
    background-color: ${( {theme} ) => theme.colors.shape};
    font-family: ${( {theme} ) => theme.fonts.PoppinsRegular};

`
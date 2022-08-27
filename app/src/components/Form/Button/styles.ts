import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const ButtonContainer = styled(TouchableOpacity)`
    border-radius: 5px;
    height: ${RFValue(56)}px;
    align-items: center;
    justify-content: center;
    background-color: ${( {theme} ) => theme.colors.secundary};

`

export const Title  = styled.Text`
    font-size: ${RFValue(14)}px;
    color: ${( {theme} ) => theme.colors.shape};
    font-family: ${( {theme} ) => theme.fonts.PoppinsMedium};
    
`
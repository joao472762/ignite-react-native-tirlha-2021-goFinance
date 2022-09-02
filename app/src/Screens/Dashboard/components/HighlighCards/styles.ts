import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const HighlighCardsContainer = styled.ScrollView.attrs({
    horizontal: true,
    contentContainerStyle: {paddingRight: 8,paddingLeft:24},
    showsHorizontalScrollIndicator :false
})`
 
    max-height: ${RFValue(200)}px;
    margin-top: ${RFValue(-142)}px ;
`
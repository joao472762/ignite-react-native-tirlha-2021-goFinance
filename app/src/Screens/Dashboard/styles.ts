import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const DashBoardContainer = styled.View`
    flex: 1;
`

export const HighlighCardsContainer = styled.ScrollView.attrs({
    horizontal: true,
    contentContainerStyle: {paddingRight: 8,paddingLeft:24},
    showsHorizontalScrollIndicator :false
})`
    position: absolute;
    margin-top: ${RFPercentage(20)}px ;
`
import styled from "styled-components/native";
import { RFValue} from "react-native-responsive-fontsize";



export const DashBoardContainer = styled.View`
    flex: 1;
`

export const HighlighCardsContainer = styled.ScrollView.attrs({
    horizontal: true,
    contentContainerStyle: {paddingRight: 8,paddingLeft:24},
    showsHorizontalScrollIndicator :false
})`
 
    max-height: ${RFValue(200)}px;
    margin-top: ${RFValue(-142)}px ;
`

export const TransactionsContainer = styled.View`
    flex: 1;
    margin-top: ${RFValue(34)}px;
    padding: 0 ${RFValue(24)}px;
  
   
`

export const Title = styled.Text`
    font-size: ${RFValue(18)}px;
    margin-bottom: ${RFValue(16)}px;
    color: ${( {theme}) => theme.colors.text_dark};
    font-family: ${( {theme}) => theme.fonts.PoppinsRegular};
`

